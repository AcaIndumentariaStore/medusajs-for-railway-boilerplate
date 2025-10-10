import { AbstractPaymentProcessor, PaymentProcessorContext, PaymentProcessorError, PaymentProcessorSessionResponse, PaymentSessionStatus, Cart } from "@medusajs/medusa"
import { MercadoPagoConfig, Preference } from 'mercadopago'

interface MercadoPagoOptions {
  access_token: string
  success_backurl: string
  webhook_url: string
}

// Definir el tipo del contexto
interface CartContext {
  cart?: Cart
}

class MercadopagoProviderService extends AbstractPaymentProcessor {
  static identifier = "mercadopago"
  
  protected client_: any
  protected options_: MercadoPagoOptions

  constructor(container: any, options: MercadoPagoOptions) {
    super(container)
    this.options_ = options
    this.client_ = new MercadoPagoConfig({
      accessToken: options.access_token,
    })
  }

  async initiatePayment(
    context: PaymentProcessorContext
  ): Promise<PaymentProcessorError | PaymentProcessorSessionResponse> {
    try {
      const { amount, currency_code, resource_id, customer } = context
      
      // Type assertion para el contexto del carrito
      const cartContext = context.context as CartContext
      const cart = cartContext?.cart
      
      // Construir array de items desde el carrito
      const items: any[] = []
      
      if (cart?.items) {
        for (const item of cart.items) {
          items.push({
            id: item.variant_id || item.id,
            title: item.title,
            description: item.description || '',
            quantity: item.quantity,
            currency_id: currency_code.toUpperCase(),
            unit_price: item.unit_price / 100, // Convertir de centavos
          })
        }
      }
      
      // 🔧 FIX: Agregar shipping_total como item separado
      if (cart?.shipping_total && cart.shipping_total > 0) {
        items.push({
          id: 'shipping',
          title: 'Costo de Envío',
          description: 'Envío y manejo',
          quantity: 1,
          currency_id: currency_code.toUpperCase(),
          unit_price: cart.shipping_total / 100,
        })
      }

      // Crear preference de Mercadopago
      const preference = new Preference(this.client_)
      
      const preferenceData = {
        items: items,
        back_urls: {
          success: this.options_.success_backurl,
          failure: this.options_.success_backurl,
          pending: this.options_.success_backurl,
        },
        auto_return: 'approved' as const,
        notification_url: this.options_.webhook_url,
        external_reference: resource_id,
        payer: customer ? {
          email: customer.email,
          name: `${customer.first_name || ''} ${customer.last_name || ''}`.trim(),
        } : undefined,
      }

      const result = await preference.create({ body: preferenceData })

      return {
        session_data: {
          preferenceId: result.id,
          init_point: result.init_point,
        },
      }
    } catch (error: any) {
      return {
        error: error.message || "Error al iniciar pago",
        code: error.code || "unknown",
        detail: error.detail || error.message,
      }
    }
  }

  async updatePayment(
    context: PaymentProcessorContext
  ): Promise<void | PaymentProcessorError | PaymentProcessorSessionResponse> {
    // Mismo código que initiatePayment para actualizar cuando cambie el carrito
    return this.initiatePayment(context)
  }

  async authorizePayment(
    paymentSessionData: Record<string, unknown>,
    context: Record<string, unknown>
  ): Promise<PaymentProcessorError | { status: PaymentSessionStatus; data: Record<string, unknown> }> {
    return {
      status: PaymentSessionStatus.AUTHORIZED,
      data: paymentSessionData,
    }
  }

  async capturePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return paymentSessionData
  }

  async cancelPayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return paymentSessionData
  }

  async deletePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return {}
  }

  async getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    return PaymentSessionStatus.AUTHORIZED
  }

  async refundPayment(
    paymentSessionData: Record<string, unknown>,
    refundAmount: number
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return paymentSessionData
  }

  async retrievePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return paymentSessionData
  }

  async updatePaymentData(
    sessionId: string,
    data: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return data
  }
}

export default MercadopagoProviderService