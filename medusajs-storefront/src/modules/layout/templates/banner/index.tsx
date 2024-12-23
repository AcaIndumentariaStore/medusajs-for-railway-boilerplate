"use client"
import React, { useState } from "react"
import { RxCross1 } from "react-icons/rx"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay } from "swiper/modules"

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-aca-green px-2 py-1.5 sm:px-3.5 sm:before:flex-1">
      <div className="block lg:hidden">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="flex flex-wrap text-white max-w-xs"
        >
          <SwiperSlide>
            <p className="text-center text-xs md:text-sm/6">
              🚚 ¡Aprovechá nuestros envíos! 🚚
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <p className="text-center text-xs md:text-sm/6">
              📍 Envío Gratuito dentro del AMBA 📍
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <p className="text-center text-xs md:text-sm/6">
              🌎 Al interior del país por solo $2800🌎
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <p className="text-center text-xs md:text-sm/6">
              ✨ ¡Comprá ahora y recibí donde estés! ✨
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:flex items-center justify-center w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="flex-wrap text-white max-w-5xl"
        >
          <SwiperSlide>
            <p className="text-xs md:text-sm/6">
              🚚 ¡Aprovechá nuestros envíos! 🚚
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <p className="text-xs md:text-sm/6">
              📍 Envío Gratuito dentro del AMBA 📍
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <p className="text-xs md:text-sm/6">
              🌎 Al interior del país por solo $2800 🌎
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <p className="text-xs md:text-sm/6">
              ✨ ¡Comprá ahora y recibí donde estés! ✨
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={handleDismiss}
        >
          <span className="sr-only">Dismiss</span>
          <RxCross1 aria-hidden="true" className="size-5 text-white" />
        </button>
      </div> */}
    </div>
  )
}
