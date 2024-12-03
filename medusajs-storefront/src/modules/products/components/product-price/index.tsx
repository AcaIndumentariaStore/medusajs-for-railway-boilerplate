import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing"
import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { RegionInfo } from "types/global"

export default function ProductPrice({
  product,
  variant,
  region,
}: {
  product: PricedProduct
  variant?: PricedVariant
  region: RegionInfo
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
    region,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-neutral-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col text-ui-fg-base">
      <span
        className={clx("text-xl font-semibold text-neutral-800", {
          "text-aca-green": selectedPrice.price_type === "sale",
        })}
      >
        {!variant && "Precio: "}
        {selectedPrice.calculated_price}
      </span>
      {selectedPrice.price_type === "sale" && (
        <>
          <p>
            <span className="text-neutral-800">Original: </span>
            <span className="line-through text-neutral-800">{selectedPrice.original_price}</span>
          </p>
          <span className="text-aca-green">
            -{selectedPrice.percentage_diff}%
          </span>
        </>
      )}
    </div>
  )
}
