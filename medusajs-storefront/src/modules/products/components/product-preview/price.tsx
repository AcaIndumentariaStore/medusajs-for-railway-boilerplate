import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <div className="flex flex-col md:flex-row ">
      {price.price_type === "sale" && (
        <Text className="line-through font-bold text-ui-fg-base">
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-ui-fg-base font-semibold", {
          "text-aca-green": price.price_type === "sale",
        })}
      >
        {price.calculated_price}
      </Text>
    </div>
  )
}
