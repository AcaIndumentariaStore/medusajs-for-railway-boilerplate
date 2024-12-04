import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Benefits from "@modules/home/components/benefits"
import MarketingSpace from "@modules/home/components/marketing-space"
import SocialNetworks from "@modules/home/components/social-networks"
import Collections from "@modules/home/components/collections"

export const metadata: Metadata = {
  title: "Aca Indumentaria | ¡Encontrá tu estilo con nosotros!",
  description:
    "Descubrí en Aca Indumentaria una amplia variedad de calzado infantil, zapatillas, sandalias, botas, texanas y borcegos de cuero. Además, ofrecemos prendas de vestir como buzos, sacos de lana y ropa de dormir para toda la familia.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  const bestSellingCollection = collections.find(
    (collection) => collection.handle === "mas-vendidos"
  )

  const OffersCollection = collections.find(
    (collection) => collection.handle === "ofertas"
  )

  return (
    <>
      <Hero />
      <div className="flex items-center justify-center shadow-2xl shadow-neutral-100">
        <Benefits />
      </div>
      <div className="pb-12">
        {/* <ul className="flex flex-col gap-x-6">
          {bestSellingCollection && (
            <FeaturedProducts
              collections={[bestSellingCollection]}
              region={region}
            />
          )}
        </ul>
        <ul className="flex flex-col gap-x-6">
          {OffersCollection && (
            <FeaturedProducts
              collections={[OffersCollection]}
              region={region}
            />
          )}
        </ul> */}
        <MarketingSpace />
        <SocialNetworks />
        <Collections />
      </div>
    </>
  )
}
