"use client"

import React from "react"
import { BlurFade } from "@modules/magic-ui/Blur-fade"
import Marketing from "../../../../images/Marketing.png"

const Hero = () => {
  return (
    <div className="lg:h-[50vh] w-full border-y border-ui-border-base relative bg-ui-bg-subtle">
      <div className="lg:h-[50vh]">
        <div className="relative w-full lg:h-[50vh]">
          <img
            src={Marketing.src}
            alt="Marketing"
            className="object-cover w-full lg:h-[50vh] select-none"
          />
        </div>
      </div>
      {/* <BlurFade
        delay={0.5}
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-white text-center pb-6 md:pb-8 w-full "
      >
        <div className="flex flex-col lg:flex-row items-center justify-center leading-none border-b lg:border-b-0 pb-2 lg:pb-3 mb-2 lg:mb-0 w-[90%] lg:w-[80%]">
          <h3 className="text-[48px] md:text-5xl font-extrabold uppercase">
            <span className="text-aca-green">Vení</span> a mirar
          </h3>
          <p className="text-[22px] md:text-5xl md:ml-2 font-bold uppercase">
            Y probate <span className="text-aca-green">sin compromiso</span>
          </p>
        </div>
        <div className="border-b lg:border-b-0 pb-2 mb-2 lg:mb-0 w-[90%] lg:w-[80%]">
          <p className="text-lg md:text-2xl uppercase font-medium">
            Entre Ríos 2969 - San Justo
          </p>
        </div>
        <p className="text-sm md:text-lg uppercase font-semibold">
          <span className="text-aca-green">Descuentos</span> y{" "}
          <span className="text-aca-green">beneficios</span> exclusivos{" "}
          <br className="block lg:hidden" />
          <span className="text-aca-green">presencialmente</span>
        </p>
      </BlurFade> */}
    </div>
  )
}

export default Hero
