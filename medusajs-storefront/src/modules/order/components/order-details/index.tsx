import { Order } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <Text>
        Nos contactaremos a la brevedad para confirmar su pedido y coordinar la
        fecha de entrega. Al siguiente numero telefonico{" "}
        <span className="text-ui-fg-medium-plus font-semibold">
          {order.shipping_address.phone}
        </span>
        .
      </Text>
      <Text className="mt-2">
        Fecha del pedido: {new Date(order.created_at).toDateString()}
      </Text>
      <Text className="mt-2 text-aca-green">
        Número del pedido: {order.display_id}
      </Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text>
              Estado del pedido:{" "}
              <span className="text-ui-fg-subtle ">
                {formatStatus(order.fulfillment_status)}
              </span>
            </Text>
            <Text>
              Estado del pago:{" "}
              <span className="text-ui-fg-subtle ">
                {formatStatus(order.payment_status)}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
