import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const metadata = {
  title: "404",
  description: "Something went wrong",
}

function CartError() {

  const handlePaymentSuccess = () => {
    const whatsappUrl = `https://wa.me/+5491169407581?text=Hola, acabo de realizar un pago y quiero confirmar mi orden.`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">
        Pago con Mercadopago Exitoso
      </h1>
      <p className="text-small-regular text-ui-fg-base">
        Envianos el comprobante de pago y te contactaremos a la brevedad para
        finalizar tu compra y coordinar el envio o retiro del producto.
      </p>
      <div className="flex gap-x-1 items-center group" onClick={handlePaymentSuccess}>
        <Text className="text-aca-green">Enviar comprobante</Text>
      </div>
    </div>
  )
}

export default function NotFound() {
  const pathname = usePathname()

  if (pathname.includes("/ar/cart")) {
    return <CartError />
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Página no encontrada</h1>
      <p className="text-small-regular text-ui-fg-base">
        La página a la que intentaste acceder no existe.
      </p>
      <Link className="flex gap-x-1 items-center group" href="/">
        <Text className="text-aca-green">Ir a la página principal</Text>
        <ArrowUpRightMini
          className="group-hover:rotate-45 ease-in-out duration-150"
          color="var(--fg-interactive)"
        />
      </Link>
    </div>
  )
}
