import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import SizeGuideModal from "../components/size-guide-modal"
import ClothesGuideModal from "../components/clothes-guide-modal"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="content-container flex flex-col sm:flex-row sm:items-start py-6 lg:py-12 relative border-b-1 border-neutral-200">
        <div className="block sm:hidden pb-6">
          <ProductInfo product={product} />
        </div>
        <div className="block w-full lg:w-1/2 relative">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col sm:top-48 sm:py-0 sm:px-8 lg:px-0 w-full lg:w-1/2 py-8 gap-y-6">
          <div className="hidden sm:block">
            <ProductInfo product={product} />
          </div>
          <div className="flex flex-row items-center justify-start space-x-3 md:space-x-2">
            <SizeGuideModal />
            <ClothesGuideModal />
          </div>
          <ProductTabs product={product} />
          <Suspense
            fallback={<ProductActions product={product} region={region} />}
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div className="content-container my-16 sm:my-32">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
