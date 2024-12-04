"use client"

import React from 'react';
import { Heading } from "@medusajs/ui"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Swiper
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Aca Indumentaria
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          ></Heading>
        </SwiperSlide>
        <SwiperSlide className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Banner 01
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          ></Heading>
        </SwiperSlide>
        <SwiperSlide className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Banner 02
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          ></Heading>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
