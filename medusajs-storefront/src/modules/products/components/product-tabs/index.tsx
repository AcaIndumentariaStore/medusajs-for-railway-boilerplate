"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import Image from "next/image"
import { Text, Badge } from "@medusajs/ui"
import { CiCreditCard1, CiCreditCard2 } from "react-icons/ci"
import { PiMoneyWavyThin } from "react-icons/pi"
import { SiMercadopago } from "react-icons/si"

import Accordion from "./accordion"

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

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Información del Producto",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Envío y devoluciones",
      component: <ShippingInfoTab />,
    },
    {
      label: "Métodos de Pago",
      component: <PaymentInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">País de origen</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Tipo</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Peso</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensiones</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null}
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Entrega rápida</span>
            <p className="max-w-sm">
              Realizamos envíos entre 1 y 5 días hábiles. Para más detalles
              sobre el tiempo de entrega en tu zona, no dudes en comunicarte con
              nosotros a través de WhatsApp.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Intercambios simples</span>
            <p className="max-w-sm">
              Si necesitas realizar un cambio de talle o hay algún problema con
              tu producto, contáctanos por WhatsApp para coordinarlo de manera
              rápida y sencilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const PaymentInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <section className="flex flex-col items-start gap-x-2">
          <div className="flex flex-row items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#a0b4a4"
              fill="none"
            >
              <path
                d="M2 4.5H8.75736C9.55301 4.5 10.3161 4.81607 10.8787 5.37868L14 8.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 13.5H2"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 7.5L10.5 9.5C11.0523 10.0523 11.0523 10.9477 10.5 11.5C9.94772 12.0523 9.05229 12.0523 8.5 11.5L7 10C6.13931 10.8607 4.77671 10.9575 3.80294 10.2272L3.5 10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 11V15.5C5 17.3856 5 18.3284 5.58579 18.9142C6.17157 19.5 7.11438 19.5 9 19.5H18C19.8856 19.5 20.8284 19.5 21.4142 18.9142C22 18.3284 22 17.3856 22 15.5V12.5C22 10.6144 22 9.67157 21.4142 9.08579C20.8284 8.5 19.8856 8.5 18 8.5H9.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.25 14C15.25 14.9665 14.4665 15.75 13.5 15.75C12.5335 15.75 11.75 14.9665 11.75 14C11.75 13.0335 12.5335 12.25 13.5 12.25C14.4665 12.25 15.25 13.0335 15.25 14Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="font-semibold text-lg">Efectivo</span>
          </div>
          <div className="mt-5 transition-all duration-150 ease-in-out">
            <Text className="mb-1">
              <strong>Realizá tu pedido: </strong>Selecciona los productos que
              deseas y finaliza tu compra eligiendo la opción de pago Efectivo.
            </Text>
            <Text className="mb-1">
              <strong>Confirma tu pedido: </strong>Recibirás un mensaje con los
              detalles de tu compra y el tiempo estimado de entrega.
            </Text>
            <Text className="mb-1">
              <strong>Pagá al recibir: </strong>Al recibir tu producto, realiza
              el pago en efectivo. ¡Así de fácil!
            </Text>
          </div>
        </section>
        <section className="flex flex-col items-start gap-x-2 border-t pt-4">
          <div className="flex flex-row items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#a0b4a4"
              fill="none"
            >
              <path
                d="M13.5 15H6C4.11438 15 3.17157 15 2.58579 14.4142C2 13.8284 2 12.8856 2 11V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H18C19.8856 3 20.8284 3 21.4142 3.58579C22 4.17157 22 5.11438 22 7V12C22 12.9319 22 13.3978 21.8478 13.7654C21.6448 14.2554 21.2554 14.6448 20.7654 14.8478C20.3978 15 19.9319 15 19 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 9C14 10.1045 13.1046 11 12 11C10.8954 11 10 10.1045 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 17C13 15.3431 14.3431 14 16 14V12C16 10.3431 17.3431 9 19 9V14.5C19 16.8346 19 18.0019 18.5277 18.8856C18.1548 19.5833 17.5833 20.1548 16.8856 20.5277C16.0019 21 14.8346 21 12.5 21H12C10.1362 21 9.20435 21 8.46927 20.6955C7.48915 20.2895 6.71046 19.5108 6.30448 18.5307C6 17.7956 6 16.8638 6 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="font-semibold text-lg">Transferencia</span>
          </div>
          <div className="mt-5 transition-all duration-150 ease-in-out">
            <Text className="mb-1">
              <strong>Realizá tu pedido: </strong>Seleccioná los productos que
              deseas y finaliza tu compra. Al elegir la opción de pago
              Transferencia, luego de realizar la compra podras ver los datos
              bancarios para realizar el depósito.
            </Text>
            <Text className="mb-1">
              <strong>Confirma tu pago: </strong>Toma una captura de pantalla de
              tu comprobante y envíanoslo por WhatsApp al +54 9 11 6940-7581.
            </Text>
            <Text className="mb-1">
              <strong>¡Y listo! </strong>Una vez confirmado tu pago, nos
              pondremos en contacto para coordinar la fecha y hora de entrega
              más conveniente.
            </Text>
          </div>
        </section>
        <section className="flex flex-col items-start gap-x-2 border-t pt-4">
          <div className="flex flex-row items-center space-x-2">
            <SiMercadopago className="text-3xl text-aca-strong-green" />
            <span className="font-semibold text-lg">Mercado Pago</span>
          </div>
          <div className="mt-5 transition-all duration-150 ease-in-out">
            <div className="">
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
                    <p className="text-xs">HASTA 3 CUOTAS SIN INTERES</p>
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
                    <Text className="uppercase text-sm">Tarjeta de Debito</Text>
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
                  <Text className="uppercase text-sm">Dinero en Cuenta</Text>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductTabs
