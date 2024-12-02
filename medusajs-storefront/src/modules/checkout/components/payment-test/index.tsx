import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="green" className={className}>
      Hasta {" "}
      <span className="font-semibold">12 Cuotas</span> sin interes
    </Badge>
  )
}

export default PaymentTest
