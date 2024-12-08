import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[40vh] w-full border-y border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Marketing
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
