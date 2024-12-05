import { Text, clx } from "@medusajs/ui";
import { PriceType } from "../product-actions";

export default async function PreviewPrice({ price }: { price: PriceType }) {
  const calculatedPrice = parseFloat(price.calculated_price.replace(/[^0-9.-]+/g, ""));
  const installmentPrice = (calculatedPrice / 3).toFixed(2);
  const discountedPrice = (calculatedPrice * 0.8).toFixed(2);

  return (
    <div className="flex flex-col md:flex-row">
      {price.price_type === "sale" && (
        <Text className="line-through font-bold text-ui-fg-base mr-2">
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
      {/* Información adicional */}
      <div className="mt-1 text-xs text-ui-fg-subtle">
        <p>3 x <span className="text-aca-strong-green">${installmentPrice}</span> sin interés o</p>
        <p><span className="text-aca-strong-green">${discountedPrice}</span> con Transferencia</p>
      </div>
    </div>
  );
}
