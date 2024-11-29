import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="green" className={className}>
      <span className="font-semibold">30%</span> de Descuento
    </Badge>
  )
}

export default PaymentTest
