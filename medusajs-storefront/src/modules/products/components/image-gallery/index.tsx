"use client"
import Image from "next/image"
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import * as Tabs from "@radix-ui/react-tabs"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex flex-row items-start relative w-full">
      {/* @ts-ignore */}
      <Tabs.Root
        defaultValue={images[0]?.id || ""}
        className="w-full xl:flex xl:flex-row-reverse"
      >
        <div className="flex flex-1 lg:mr-8 gap-y-4">
          {images.map((image, index) => (
            <Tabs.Content key={image.id} value={image.id} className="w-full">
              <Container
                className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
                id={image.id}
              >
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  className="absolute inset-0 rounded-rounded"
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  style={{ objectFit: "cover" }}
                />
              </Container>
            </Tabs.Content>
          ))}
        </div>
        <div className="block xl:hidden">
          <Tabs.List className="grid grid-cols-4 mt-6 gap-x-4">
            {images.map((image) => (
              <Tabs.Trigger key={image.id} value={image.id}>
                <Container className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle mb-2">
                  <Image
                    src={image.url}
                    alt={`Thumbnail ${image.id}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </Container>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>
        <div className="hidden xl:block">
          <Tabs.List
            className="scrollbar-thin flex flex-col mx-6 mt-0 overflow-y-auto"
            style={{ maxHeight: "calc(2 * 20vw)" }}
          >
            {images.map((image) => (
              <Tabs.Trigger key={image.id} value={image.id}>
                <Container className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle mb-2">
                  <Image
                    src={image.url}
                    alt={`Thumbnail ${image.id}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </Container>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>
      </Tabs.Root>
    </div>
  )
}

export default ImageGallery
