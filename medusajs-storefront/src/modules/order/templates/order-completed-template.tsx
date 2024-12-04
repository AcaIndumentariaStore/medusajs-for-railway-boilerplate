import { Order } from "@medusajs/medusa"
import { Heading } from "@medusajs/ui"
import { cookies } from "next/headers"

import CartTotals from "@modules/common/components/cart-totals"
import Items from "@modules/order/components/items"
import OnboardingCta from "@modules/order/components/onboarding-cta"
import OrderDetails from "@modules/order/components/order-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import PaymentDetails from "@modules/order/components/payment-details"
import AutoConfetti from "@modules/magic-ui/Auto-Confetti"
import WhatsAppRedirect from "@modules/order/components/whatsapp-redirect"

type OrderCompletedTemplateProps = {
  order: Order
}

export default function OrderCompletedTemplate({
  order,
}: OrderCompletedTemplateProps) {
  const isOnboarding = cookies().get("_medusa_onboarding")?.value === "true"

  return (
    <div className="p-6 min-h-[calc(100vh-64px)]">
      <WhatsAppRedirect orderId={order.id} displayId={`${order.display_id}`} />

      <div className="bg-white border border-neutral-100 rounded-md content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full">
        {isOnboarding && <OnboardingCta orderId={order.id} />}
        <div className="flex flex-col gap-4 max-w-4xl h-full bg-white w-full py-10 md:px-6">
          <Heading
            level="h1"
            className="flex flex-col gap-y-3 text-ui-fg-base text-3xl mb-4"
          >
            <span>¡Muchas gracias por tu compra!</span>
            <span>Su pedido se realizó exitosamente. 🎉</span>
          </Heading>
          <OrderDetails order={order} />
          <div className="border-y ">
            <div className="flex flex-col justify-start items-start py-4">
              <span className="text-ui-fg-subtle text-sm">
                Datos para realizar el pago de tu pedido mediante Transferencia
                Bancaria:
              </span>
              <div className="text-sm py-2 space-y-1 text-ui-fg-subtle">
                <div className="flex flex-row space-x-1">
                  <span className="font-semibold">Nombre:</span>
                  <span className="">Alan Cuervo Alonso</span>
                </div>
                <div className="flex flex-row space-x-1">
                  <span className="font-semibold">CVU:</span>
                  <span className="">0000003100089229572347</span>
                </div>
                <div className="flex flex-row space-x-1">
                  <span className="font-semibold">Alias:</span>
                  <span className="">Aca.indumentaria</span>
                </div>
              </div>
              <span className="text-ui-fg-subtle text-sm">
                Luego tomá una captura de pantalla de tu comprobante y
                envíanoslo por WhatsApp al +54 9 11 6940-7581.
              </span>
            </div>
          </div>
          <Heading level="h2" className="flex flex-row text-3xl-regular">
            Resumen del Pedido
          </Heading>
          <Items items={order.items} region={order.region} />
          <div className="absolute inset-0 z-50 pointer-events-none">
            <AutoConfetti />
          </div>
          <CartTotals data={order} />
          <ShippingDetails order={order} />
          <PaymentDetails order={order} />
          {/* <Help /> */}
        </div>
      </div>
    </div>
  )
}
