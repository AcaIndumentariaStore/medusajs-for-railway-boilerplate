import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"

import { BlurFade } from "../../magic-ui/Blur-fade"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import Filters from "@modules/store/components/filters"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      {/* <RefinementList sortBy={sortBy || "created_at"} /> */}
      <div className="w-full">
        <div className="hidden lg:flex flex-row items-center justify-between w-full border-b border-neutral-200 pb-6 mb-8 text-2xl-semi">
          <h1>{collection.title}</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <BlurFade delay={0.25}>
              <Filters />
            </BlurFade>
            <BlurFade delay={0.5} className="lg:col-span-3">
              <PaginatedProducts
                sortBy={sortBy || "created_at"}
                page={pageNumber}
                collectionId={collection.id}
                countryCode={countryCode}
              />
            </BlurFade>
          </div>
        </Suspense>
      </div>
    </div>
  )
}
