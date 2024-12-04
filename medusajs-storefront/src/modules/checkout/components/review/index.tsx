"use client"

import { Heading, Text, clx } from "@medusajs/ui"

import PaymentButton from "../payment-button"
import { useSearchParams } from "next/navigation"
import { Cart } from "@medusajs/medusa"
import Link from "next/link"

const Review = ({
  cart,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}) => {
  const searchParams = useSearchParams()

  const isOpen = searchParams.get("step") === "review"

  const previousStepsCompleted =
    cart.shipping_address &&
    cart.shipping_methods.length > 0 &&
    cart.payment_session

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none": !isOpen,
            }
          )}
        >
          Revisar
        </Heading>
      </div>
      {isOpen && previousStepsCompleted && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="txt-medium-plus text-ui-fg-base mb-1">
                Al hacer clic en el botón Realizar pedido, confirmas que has
                leído, comprendido y aceptado nuestros{" "}
                <Link
                  className="underline text-aca-green hover:text-aca-strong-green"
                  href="/politicas#terminos-de-uso"
                >
                  Términos de uso
                </Link>
                ,
                {" "}
                <Link
                  className="underline text-aca-green hover:text-aca-strong-green"
                  href="/politicas#terminos-de-venta"
                >
                  Términos de venta
                </Link>{" "}
                y{" "}
                <Link
                  className="underline text-aca-green hover:text-aca-strong-green"
                  href="/politicas#politica-de-devoluciones"
                >
                  Política de devoluciones
                </Link>{" "}
                y reconoces que has leído la {" "}
                <Link
                  className="underline text-aca-green hover:text-aca-strong-green"
                  href="/politicas#politica-de-privacidad"
                >
                  Política de privacidad
                </Link>{" "}
                de Aca Indumentaria.
              </Text>
            </div>
          </div>
          <PaymentButton cart={cart} />
        </>
      )}
    </div>
  )
}

export default Review
