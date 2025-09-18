import { 
  AbstractPaymentService, 
  PaymentSessionStatus, 
  PaymentSessionResponse, 
  Data, 
  Cart, 
  PaymentContext, 
  PaymentSession, 
  Payment 
} from "@medusajs/medusa";
import { humanizeAmount } from "medusa-core-utils";
import MercadoPago from "mercadopago";

class MercadoPagoWithShippingService extends AbstractPaymentService {
  static identifier = "mercadopago-with-shipping";
  
  options_: Record<string, unknown>;
  mercadopago_: typeof MercadoPago;
  regionService_: any;
  manager_: any;

  constructor(container: any, options: Record<string, unknown>) {
    super(container);
    this.options_ = options;
    this.mercadopago_ = MercadoPago;
    this.regionService_ = container.regionService;
    this.manager_ = container.manager;

    this.mercadopago_.configure({
      access_token: options.access_token as string
    });
  }

  async createPayment(cart: Cart & PaymentContext): Promise<PaymentSessionResponse> {
    const region_id = cart.region_id;
    const region = await this.regionService_.retrieve(region_id);
    const currency_code = region.currency_code;

    // Mapear items del carrito
    const items = cart.items.map((item: any) => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      unit_price: humanizeAmount(item.unit_price, currency_code),
      currency_id: currency_code.toUpperCase(),
      description: item.description
    }));

    // **SOLUCIÓN: Agregar el shipping como un item adicional si tiene costo**
    if (cart.shipping_total && cart.shipping_total > 0) {
      items.push({
        id: "shipping",
        title: "Costo de envío",
        quantity: 1,
        unit_price: humanizeAmount(cart.shipping_total, currency_code),
        currency_id: currency_code.toUpperCase(),
        description: "Costo de envío del pedido"
      });
    }

    const preference = {
      items: items,
      payer: {
        name: cart.billing_address?.first_name,
        surname: cart.billing_address?.last_name,
        email: cart.email
      },
      notification_url: `${this.options_.webhook_url}/mercadopago`,
      external_reference: cart.id,
      back_urls: {
        success: `${this.options_.success_backurl}/${cart.id}/`
      }
    };

    const paymentIntent = await this.mercadopago_.preferences.create(preference);

    return {
      session_data: {
        preferenceId: paymentIntent.body.id,
        url: paymentIntent.body.init_point,
        urlSandbox: paymentIntent.body.sandbox_init_point
      },
      update_requests: {
        customer_metadata: {}
      }
    };
  }

  async updatePayment(paymentSessionData: Data, cart: Cart): Promise<Data> {
    const region_id = cart.region_id;
    const region = await this.regionService_.retrieve(region_id);
    const currency_code = region.currency_code;

    // Mapear items del carrito
    const items = cart.items.map((item: any) => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
      unit_price: humanizeAmount(item.unit_price, currency_code),
      currency_id: currency_code.toUpperCase(),
      description: item.description
    }));

    // **SOLUCIÓN: Agregar el shipping como un item adicional si tiene costo**
    if (cart.shipping_total && cart.shipping_total > 0) {
      items.push({
        id: "shipping",
        title: "Costo de envío",
        quantity: 1,
        unit_price: humanizeAmount(cart.shipping_total, currency_code),
        currency_id: currency_code.toUpperCase(),
        description: "Costo de envío del pedido"
      });
    }

    const preference = {
      items: items,
      payer: {
        name: cart.billing_address?.first_name,
        surname: cart.billing_address?.last_name,
        email: cart.email
      },
      external_reference: cart.id,
      back_urls: {
        success: `${this.options_.success_backurl}/${cart.id}/`
      }
    };

    const paymentIntent = await this.mercadopago_.preferences.update({
      id: (paymentSessionData as any).preferenceId,
      ...preference
    });

    return {
      preferenceId: paymentIntent.body.id,
      url: paymentIntent.body.init_point
    };
  }

  async retrievePayment(paymentData: Data): Promise<Data> {
    const res = await this.mercadopago_.payment.get((paymentData as any).id);
    return res.body;
  }

  async authorizePayment(paymentSession: PaymentSession, context: Data): Promise<{ status: PaymentSessionStatus; data: Data }> {
    const status = await this.getStatus(context);
    return {
      data: {
        ...paymentSession.data,
        id: (context as any).id
      },
      status: status
    };
  }

  async capturePayment(payment: Payment): Promise<Data> {
    if ((payment.data as any).captured === true) {
      return payment.data;
    }
    return payment.data;
  }

  async refundPayment(payment: Payment, refundAmount: number): Promise<Data> {
    await this.mercadopago_.refund.create({
      payment_id: (payment.data as any).id,
      amount: Math.round(humanizeAmount(refundAmount, payment.currency_code))
    });

    return await this.retrievePayment(payment.data);
  }

  async cancelPayment(payment: Payment): Promise<Data> {
    const paymentData = await this.retrievePayment(payment.data);
    const isCancelled = (paymentData as any).status === "cancelled";
    const isFullyRefund = (paymentData as any).status === "refunded" && 
      (paymentData as any).transaction_amount === (paymentData as any).transaction_amount_refunded;

    if (isCancelled || isFullyRefund) {
      return paymentData;
    }

    if ((payment.data as any).captured === true) {
      await this.mercadopago_.refund.create({
        payment_id: (payment.data as any).id
      });
    }

    if ((paymentData as any).status === "pending" || (paymentData as any).status === "in_process") {
      await this.mercadopago_.payment.cancel((payment.data as any).id);
    }

    return await this.retrievePayment(payment.data);
  }

  async deletePayment(paymentSession: PaymentSession): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getStatus(data: Data): Promise<PaymentSessionStatus> {
    const paymentIntent = await this.retrievePayment(data);
    
    switch ((paymentIntent as any).status) {
      case "approved":
      case "authorized":
        return PaymentSessionStatus.AUTHORIZED;
      case "refunded":
      case "charged_back":
      case "cancelled":
        return PaymentSessionStatus.CANCELED;
      case "rejected":
        return PaymentSessionStatus.ERROR;
      case "pending":
      case "in_process":
      case "in_mediation":
        return PaymentSessionStatus.PENDING;
      default:
        return PaymentSessionStatus.PENDING;
    }
  }

  async updatePaymentData(paymentSessionData: Data, data: Data): Promise<Data> {
    return { ...paymentSessionData, ...data };
  }

  async getPaymentData(paymentSession: PaymentSession): Promise<Data> {
    return await this.retrievePayment(paymentSession.data);
  }

  async notificationPayment(body: Record<string, unknown>): Promise<Record<string, unknown>> {
    const paymentId = (body.data as any).id;
    const payment = await this.retrievePayment(body.data as Data);
    return { ...body, payment };
  }
}

export default MercadoPagoWithShippingService;
