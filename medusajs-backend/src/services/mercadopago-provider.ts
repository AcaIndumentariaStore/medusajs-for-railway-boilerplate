import { AbstractPaymentProcessor, PaymentProcessorContext, PaymentProcessorError, PaymentProcessorSessionResponse, PaymentSessionStatus } from "@medusajs/medusa"

class MercadopagoProviderService extends AbstractPaymentProcessor {
  static identifier = "mercadopago"

  async initiatePayment(context: PaymentProcessorContext): Promise<PaymentProcessorError | PaymentProcessorSessionResponse> {
    console.log("Custom service loaded but not active yet")
    // Retornar error para que use el plugin original
    throw new Error("Using original plugin")
  }

  async updatePayment(context: PaymentProcessorContext) {
    return this.initiatePayment(context)
  }

  async authorizePayment(paymentSessionData: Record<string, unknown>, context: Record<string, unknown>) {
    return { status: PaymentSessionStatus.AUTHORIZED, data: paymentSessionData }
  }

  async capturePayment(paymentSessionData: Record<string, unknown>) {
    return paymentSessionData
  }

  async cancelPayment(paymentSessionData: Record<string, unknown>) {
    return paymentSessionData
  }

  async deletePayment(paymentSessionData: Record<string, unknown>) {
    return {}
  }

  async getPaymentStatus(paymentSessionData: Record<string, unknown>) {
    return PaymentSessionStatus.AUTHORIZED
  }

  async refundPayment(paymentSessionData: Record<string, unknown>, refundAmount: number) {
    return paymentSessionData
  }

  async retrievePayment(paymentSessionData: Record<string, unknown>) {
    return paymentSessionData
  }

  async updatePaymentData(sessionId: string, data: Record<string, unknown>) {
    return data
  }
}

export default MercadopagoProviderService