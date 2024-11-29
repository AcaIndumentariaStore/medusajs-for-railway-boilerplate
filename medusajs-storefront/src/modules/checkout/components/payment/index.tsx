"use client"

import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { RadioGroup } from "@headlessui/react"
import ErrorMessage from "@modules/checkout/components/error-message"
import { Cart } from "@medusajs/medusa"
import { CheckCircleSolid, CreditCard } from "@medusajs/icons"
import {
  Button,
  Container,
  Heading,
  Text,
  Tooltip,
  clx,
  Badge,
} from "@medusajs/ui"
import { CardElement } from "@stripe/react-stripe-js"
import { StripeCardElementOptions } from "@stripe/stripe-js"

import { CiCreditCard1, CiCreditCard2 } from "react-icons/ci"
import { PiMoneyWavyThin } from "react-icons/pi"

import Visa from "../../../../images/tarjetas/visa.svg"
import MasterCard from "../../../../images/tarjetas/mastercard.svg"
import Amex from "../../../../images/tarjetas/amex.svg"
import Dinners from "../../../../images/tarjetas/diners.svg"
import Cabal from "../../../../images/tarjetas/cabal.svg"
import ArgenCard from "../../../../images/tarjetas/argencard.svg"
import TarjetaNaranja from "../../../../images/tarjetas/tarjeta_naranja.svg"
import Nativa from "../../../../images/tarjetas/nativa.svg"
import Cencosud from "../../../../images/tarjetas/cencosud.svg"
import Cordobesa from "../../../../images/tarjetas/cordobesa.svg"
import TarjetaShopping from "../../../../images/tarjetas/tarjeta_shopping.svg"
import TarjetaWalmart from "../../../../images/tarjetas/tarjeta_walmart.svg"

import VisaDebit from "../../../../images/debito/visa_debit.svg"
import CabalDebit from "../../../../images/debito/cabal_debit.svg"
import MastercardDebit from "../../../../images/debito/mastercard_debit.svg"
import MaestroDebit from "../../../../images/debito/maestro.svg"

import PagoFacil from "../../../../images/debito/pagofacil.svg"
import RapiPago from "../../../../images/debito/rapipago.svg"

import Divider from "@modules/common/components/divider"
import Spinner from "@modules/common/icons/spinner"
import PaymentContainer from "@modules/checkout/components/payment-container"
import { setPaymentMethod } from "@modules/checkout/actions"
import { paymentInfoMap } from "@lib/constants"
import { StripeContext } from "@modules/checkout/components/payment-wrapper"
import Image from "next/image"

const Payment = ({
  cart,
}: {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | null
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cardBrand, setCardBrand] = useState<string | null>(null)
  const [cardComplete, setCardComplete] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "payment"

  const isStripe = cart?.payment_session?.provider_id === "stripe"
  const isCash = cart?.payment_session?.provider_id === "Efectivo"
  const isBankTransfer =
    cart?.payment_session?.provider_id === "Transferencia Bancaria"
  const isMercadoPago = cart?.payment_session?.provider_id === "mercadopago"

  const stripeReady = useContext(StripeContext)

  const paymentReady =
    cart?.payment_session && cart?.shipping_methods.length !== 0

  const useOptions: StripeCardElementOptions = useMemo(() => {
    return {
      style: {
        base: {
          fontFamily: "Inter, sans-serif",
          color: "#424270",
          "::placeholder": {
            color: "rgb(107 114 128)",
          },
        },
      },
      classes: {
        base: "pt-3 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover transition-all duration-300 ease-in-out",
      },
    }
  }, [])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const set = async (providerId: string) => {
    setIsLoading(true)
    await setPaymentMethod(providerId)
      .catch((err) => setError(err.toString()))
      .finally(() => {
        if (providerId === "paypal") return
        setIsLoading(false)
      })
  }

  const handleChange = (providerId: string) => {
    setError(null)
    set(providerId)
  }

  const handleEdit = () => {
    router.push(pathname + "?" + createQueryString("step", "payment"), {
      scroll: false,
    })
  }

  const handleSubmit = () => {
    setIsLoading(true)
    router.push(pathname + "?" + createQueryString("step", "review"), {
      scroll: false,
    })
  }

  useEffect(() => {
    setIsLoading(false)
    setError(null)
  }, [isOpen])

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && !paymentReady,
            }
          )}
        >
          Payment
          {!isOpen && paymentReady && <CheckCircleSolid />}
        </Heading>
        {!isOpen && paymentReady && (
          <Text>
            <button
              onClick={handleEdit}
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
            >
              Edit
            </button>
          </Text>
        )}
      </div>
      <div>
        {cart?.payment_sessions?.length ? (
          <div className={isOpen ? "block" : "hidden"}>
            <RadioGroup
              value={cart.payment_session?.provider_id || ""}
              onChange={(value: string) => handleChange(value)}
            >
              {cart.payment_sessions
                .sort((a, b) => {
                  return a.provider_id > b.provider_id ? 1 : -1
                })
                .map((paymentSession) => {
                  return (
                    <PaymentContainer
                      paymentInfoMap={paymentInfoMap}
                      paymentSession={paymentSession}
                      key={paymentSession.id}
                      selectedPaymentOptionId={
                        cart.payment_session?.provider_id || null
                      }
                    />
                  )
                })}
            </RadioGroup>

            {isStripe && stripeReady && (
              <div className="mt-5 transition-all duration-150 ease-in-out">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Enter your card details:
                </Text>

                <CardElement
                  options={useOptions as StripeCardElementOptions}
                  onChange={(e) => {
                    setCardBrand(
                      e.brand &&
                        e.brand.charAt(0).toUpperCase() + e.brand.slice(1)
                    )
                    setError(e.error?.message || null)
                    setCardComplete(e.complete)
                  }}
                />
              </div>
            )}

            {isCash && (
              <div className="mt-5 transition-all duration-150 ease-in-out">
                <div className="border p-4 rounded-md">
                  <Text className="txt-medium-plus text-ui-fg-base mb-3">
                    Utilizando la opción de pago en efectivo:
                  </Text>
                  <Text className="mb-1">
                    <strong>Realizá tu pedido: </strong>Selecciona los productos
                    que deseas y finaliza tu compra eligiendo la opción de pago
                    Efectivo.
                  </Text>
                  <Text className="mb-1">
                    <strong>Confirma tu pedido:</strong>Recibirás un mensaje con
                    los detalles de tu compra y el tiempo estimado de entrega.
                  </Text>
                  <Text className="mb-1">
                    <strong>Pagá al recibir:</strong>Al recibir tu producto,
                    realiza el pago en efectivo. ¡Así de fácil!
                  </Text>
                </div>
              </div>
            )}

            {isBankTransfer && (
              <div className="mt-5 transition-all duration-150 ease-in-out">
                <div className="border p-4 rounded-md">
                  <Text className="txt-medium-plus text-ui-fg-base mb-3">
                    Utilizando la opción Transferencia:
                  </Text>
                  <Text className="mb-1">
                    <strong>Realizá tu pedido: </strong>Seleccioná los productos
                    que deseas y finaliza tu compra. Al elegir la opción de pago
                    Transferencia, luego de realizar la compra podras ver los
                    datos bancarios para realizar el depósito.
                  </Text>
                  <Text className="mb-1">
                    <strong>Confirma tu pago:</strong>Toma una captura de
                    pantalla de tu comprobante y envíanoslo por WhatsApp al +54
                    9 11 2345-6789.
                  </Text>
                  <Text className="mb-1">
                    <strong>¡Y listo! </strong>Una vez confirmado tu pago, nos
                    pondremos en contacto para coordinar la fecha y hora de
                    entrega más conveniente.
                  </Text>
                </div>
              </div>
            )}

            {isMercadoPago && (
              <div className="mt-5 transition-all duration-150 ease-in-out">
                <div className="border p-4 rounded-md">
                  <Text className="txt-medium-plus text-ui-fg-base mb-3">
                    Utilizando la opción de pagar a traves de{" "}
                    <span className="font-semibold text-neutral-600">
                      Mercado Pago
                    </span>{" "}
                    seras redirigido y podras pagar de las siguientes formas:
                  </Text>
                  <section className="border-b py-2 mb-2">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-x-2">
                        <CiCreditCard1 className="text-xl" />
                        <Text className="uppercase text-sm">
                          Tarjeta de Credito
                        </Text>
                      </div>
                      <Badge color="green">
                        <p className="text-xs">HASTA 12 CUOTAS SIN INTERES</p>
                      </Badge>
                    </div>
                    <div className="grid grid-cols-8 lg:grid-cols-12 gap-2 py-4">
                      <Image src={Visa} alt="" />
                      <Image src={MasterCard} alt="" />
                      <Image src={Amex} alt="" />
                      <Image src={Dinners} alt="" />
                      <Image src={Cabal} alt="" />
                      <Image src={ArgenCard} alt="" />
                      <Image src={TarjetaNaranja} alt="" />
                      <Image src={Nativa} alt="" />
                      <Image src={Cencosud} alt="" />
                      <Image src={Cordobesa} alt="" />
                      <Image src={TarjetaShopping} alt="" />
                      <Image src={TarjetaWalmart} alt="" />
                    </div>
                  </section>
                  <section className="border-b py-2 mb-2">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-x-2">
                        <CiCreditCard2 className="text-xl" />
                        <Text className="uppercase text-sm">
                          Tarjeta de Debito
                        </Text>
                      </div>
                    </div>
                    <div className="grid grid-cols-8 lg:grid-cols-12 gap-2 py-4">
                      <Image src={VisaDebit} alt="" />
                      <Image src={MastercardDebit} alt="" />
                      <Image src={CabalDebit} alt="" />
                      <Image src={MaestroDebit} alt="" />
                    </div>
                  </section>
                  <section className="border-b py-2 mb-2">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-x-2">
                        <PiMoneyWavyThin className="text-xl" />
                        <Text className="uppercase text-sm">Efectivo</Text>
                      </div>
                    </div>
                    <div className="grid grid-cols-8 lg:grid-cols-12 gap-2 py-4">
                      <Image src={PagoFacil} alt="" />
                      <Image src={RapiPago} alt="" />
                    </div>
                  </section>
                  <section className="py-2">
                    <div className="flex flex-row items-center gap-x-2">
                      <PiMoneyWavyThin className="text-xl" />
                      <Text className="uppercase text-sm">
                        Dinero en Cuenta
                      </Text>
                    </div>
                  </section>
                </div>
              </div>
            )}

            <ErrorMessage error={error} />

            <Button
              size="large"
              className="mt-6"
              onClick={handleSubmit}
              isLoading={isLoading}
              disabled={(isStripe && !cardComplete) || !cart.payment_session}
            >
              Continue to review
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-16 text-ui-fg-base">
            <Spinner />
          </div>
        )}

        <div className={isOpen ? "hidden" : "block"}>
          {cart && paymentReady && cart.payment_session && (
            <div className="flex items-start gap-x-1 w-full">
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment method
                </Text>
                <Text className="txt-medium text-ui-fg-subtle">
                  {paymentInfoMap[cart.payment_session.provider_id]?.title ||
                    cart.payment_session.provider_id}
                </Text>
                {process.env.NODE_ENV === "development" &&
                  !Object.hasOwn(
                    paymentInfoMap,
                    cart.payment_session.provider_id
                  ) && (
                    <Tooltip content="You can add a user-friendly name and icon for this payment provider in 'src/modules/checkout/components/payment/index.tsx'" />
                  )}
              </div>
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">
                  Payment details
                </Text>
                <div className="flex gap-2 txt-medium text-ui-fg-subtle items-center">
                  <Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                    {paymentInfoMap[cart.payment_session.provider_id]?.icon || (
                      <CreditCard />
                    )}
                  </Container>
                  <Text>
                    {cart.payment_session.provider_id === "stripe" && cardBrand
                      ? cardBrand
                      : "Another step will appear"}
                  </Text>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default Payment
