import { AbstractPaymentService, PaymentSessionStatus } from "@medusajs/medusa";
import { humanizeAmount } from "medusa-core-utils";
import MercadoPago from "mercadopago";

class MercadoPagoWithShippingService extends AbstractPaymentService {
  static identifier = "mercadopago-with-shipping";
  
  options_: Record<string, unknown>;
  mercadopago_: typeof MercadoPago;
  regionService_: any;
  manager_: any;

  constructor(container, options: Record<string, unknown>) {
    super(container);
    this.options_ = options;
    this.mercadopago_ = MercadoPago;
    this.regionService_ = container.regionService;
    this.manager_ = container.manager;

    this.mercadopago_.configure({
      access_token: options.access_token
    });
  }

  async createPayment(cart: any): Promise<Record<string, unknown>> {
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
      preferenceId: paymentIntent.body.id,
      url: paymentIntent.body.init_point,
      urlSandbox: paymentIntent.body.sandbox_init_point
    };
  }

  async updatePayment(paymentSessionData: Record<string, unknown>, cart: any): Promise<Record<string, unknown>> {
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
      id: paymentSessionData.preferenceId,
      ...preference
    });

    return {
      preferenceId: paymentIntent.body.id,
      url: paymentIntent.body.init_point
    };
  }

  async retrievePayment(paymentData: Record<string, unknown>): Promise<Record<string, unknown>> {
    const res = await this.mercadopago_.payment.get(paymentData.id);
    return res.body;
  }

  async authorizePayment(paymentSession: Record<string, unknown>, context: Record<string, unknown>): Promise<{ status: PaymentSessionStatus; data: Record<string, unknown> }> {
    const status = await this.getStatus(context);
    return {
      data: {
        ...paymentSession.data,
        id: context.id
      },
      status: status
    };
  }

  async capturePayment(payment: Record<string, unknown>): Promise<Record<string, unknown>> {
    if (payment.data.captured === true) {
      return payment.data;
    }
    return payment.data;
  }

  async refundPayment(payment: Record<string, unknown>, refundAmount: number): Promise<Record<string, unknown>> {
    await this.mercadopago_.refund.create({
      payment_id: payment.data.id,
      amount: Math.round(humanizeAmount(refundAmount, payment.currency_code))
    });

    return await this.retrievePayment(payment.data);
  }

  async cancelPayment(payment: Record<string, unknown>): Promise<Record<string, unknown>> {
    const paymentData = await this.retrievePayment(payment.data);
    const isCancelled = paymentData.status === "cancelled";
    const isFullyRefund = paymentData.status === "refunded" && 
      paymentData.transaction_amount === paymentData.transaction_amount_refunded;

    if (isCancelled || isFullyRefund) {
      return paymentData;
    }

    if (payment.data.captured === true) {
      await this.mercadopago_.refund.create({
        payment_id: payment.data.id
      });
    }

    if (paymentData.status === "pending" || paymentData.status === "in_process") {
      await this.mercadopago_.payment.cancel(payment.data.id);
    }

    return await this.retrievePayment(payment.data);
  }

  async deletePayment(paymentSession: Record<string, unknown>): Promise<Record<string, unknown>> {
    throw new Error("Method not implemented.");
  }

  async getStatus(data: Record<string, unknown>): Promise<PaymentSessionStatus> {
    const paymentIntent = await this.retrievePayment(data);
    
    switch (paymentIntent.status) {
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

  async updatePaymentData(paymentSessionData: Record<string, unknown>, data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return { ...paymentSessionData, ...data };
  }

  async getPaymentData(paymentSession: Record<string, unknown>): Promise<Record<string, unknown>> {
    return await this.retrievePayment(paymentSession.data);
  }

  async notificationPayment(body: Record<string, unknown>): Promise<Record<string, unknown>> {
    const paymentId = body.data.id;
    const payment = await this.retrievePayment(body.data);
    return { ...body, payment };
  }
}

export default MercadoPagoWithShippingService;
