import { AbstractPaymentProcessor, PaymentProcessorError, PaymentProcessorSessionResponse, PaymentProcessorContext, PaymentSessionStatus } from "@medusajs/medusa";

class MercadoPagoCheckOutPro extends AbstractPaymentProcessor {
  static identifier = "Mercado Pago CheckOut Pro";
  options: Record<string, unknown>;

  constructor(container, options: Record<string, unknown>) {
    super(container);
    this.options = options;
  }

  async capturePayment(paymentSessionData: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
    return { status: 'captured' };
  }

  async authorizePayment(paymentSessionData: Record<string, unknown>, context: Record<string, unknown>): Promise<PaymentProcessorError | { status: PaymentSessionStatus; data: Record<string, unknown>; }> {
    return { status: PaymentSessionStatus.AUTHORIZED, data: paymentSessionData };
  }

  async cancelPayment(paymentSessionData: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
    return { status: 'cancelled' };
  }

  async initiatePayment(context: PaymentProcessorContext): Promise<PaymentProcessorError | PaymentProcessorSessionResponse> {
    return { session_data: context };
  }

  async deletePayment(paymentSessionData: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
    return {};
  }

  async getPaymentStatus(paymentSessionData: Record<string, unknown>): Promise<PaymentSessionStatus> {
    return PaymentSessionStatus.AUTHORIZED;
  }

  async refundPayment(paymentSessionData: Record<string, unknown>, refundAmount: number): Promise<Record<string, unknown> | PaymentProcessorError> {
    return { status: 'refunded' };
  }

  async retrievePayment(paymentSessionData: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
    return paymentSessionData;
  }

  async updatePayment(context: PaymentProcessorContext): Promise<void | PaymentProcessorError | { session_data: Record<string, unknown> }> {
    return { session_data: context.paymentSessionData };
  }

  async updatePaymentData(sessionId: string, data: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
    return { status: 'updated' };
  }
}

export default MercadoPagoCheckOutPro;