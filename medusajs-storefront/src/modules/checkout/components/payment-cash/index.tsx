import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="green" className={className}>
      <span className="font-semibold">20%</span> de Descuento
    </Badge>
  )
}

export default PaymentTest
