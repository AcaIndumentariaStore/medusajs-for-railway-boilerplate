"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import { BlurFade } from "@modules/magic-ui/Blur-fade"

import BannerM1 from "../../../../images/BannerM1.png"
import BannerM2 from "../../../../images/BannerM2.png"
import BannerM3 from "../../../../images/BannerM3.png"

import Banner1 from "../../../../images/Banner.png"
import Banner2 from "../../../../images/Banner2.png"
import Banner3 from "../../../../images/Banner3.png"

const Hero = () => {
  return (
    <div className="relative w-full h-[75vh]">
      <Swiper
        slidesPerView={1}
        loop
        centeredSlides
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="relative w-full h-[75vh]">
          <div className="h-[75vh]">
            <div className="block lg:hidden relative w-full h-[75vh]">
              <img
                src={BannerM1.src}
                alt="Banner móvil"
                className="object-cover w-full h-[75vh] select-none"
              />
            </div>
            <div className="hidden lg:block relative w-full h-[75vh]">
              <img
                src={Banner1.src}
                alt="Banner escritorio"
                className="object-cover w-full h-[75vh] select-none"
              />
            </div>
          </div>
          <BlurFade
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
              <br className="block lg:hidden"/>
              <span className="text-aca-green">presencialmente</span>
            </p>
          </BlurFade>
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-[75vh]">
          <div className="h-[75vh]">
            <div className="block lg:hidden relative w-full h-[75vh]">
              <img
                src={BannerM2.src}
                alt="Banner móvil"
                className="object-cover w-full h-[75vh] select-none"
              />
            </div>
            <div className="hidden lg:block relative w-full h-[75vh]">
              <img
                src={Banner2.src}
                alt="Banner escritorio"
                className="object-cover w-full h-[75vh] select-none"
              />
            </div>
          </div>
          <BlurFade
            delay={0.5}
            className="absolute top-0 lg:inset-0 lg:right-0 w-full flex flex-col items-center lg:items-end justify-center text-white text-center pt-16 lg:pt-0 lg:pr-28"
          >
            <div className="text-center">
              <div className="flex flex-col lg:flex-row items-center justify-center leading-none border-b lg:border-b-0 pb-2 lg:pb-0 mb-2 lg:mb-0 w-[370px] lg:w-[450px]">
                <h3 className="text-[72px] lg:text-[80px] font-extrabold uppercase">
                  <span className="text-aca-green">3 cuotas</span>
                </h3>
              </div>
              <div className="w-[370px] lg:w-[450px]">
                <p className="text-[30px] lg:text-[36px] uppercase font-medium">
                  <span className="block lg:hidden">SIN INTERÉS EN LA WEB</span>
                  <span className="hidden lg:block">
                    SIN INTERÉS <br /> COMPRANDO EN LA WEB
                  </span>{" "}
                </p>
              </div>
              <p className="border-b lg:border-b-0 pb-4 lg:pb-0 mb-4 text-[17px] uppercase font-semibold">
                Hasta <span className="text-aca-green">X</span> cuotas en{" "}
                <span className="text-aca-green">Showroom</span>
              </p>
            </div>
            <div>
              <div className="leading-none w-[370px] lg:w-[450px]">
                <h3 className="text-[40px] lg:text-[50px] font-extrabold uppercase">
                  <span className="text-aca-green">20% Descuento</span>
                </h3>
              </div>
              <div className="w-[370px] lg:w-[450px]">
                <p className="text-[26px] uppercase font-medium">
                  <span className="block lg:hidden">
                    Efectivo - Transferencia
                  </span>
                  <span className="hidden lg:block">
                    Abonando <br /> Efectivo - Transferencia
                  </span>{" "}
                </p>
              </div>
              <p className="text-[17px] uppercase font-semibold">
                <span className="text-aca-green">10%</span> Adicional en{" "}
                <span className="text-aca-green">Showroom</span>
              </p>
            </div>
          </BlurFade>
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-[75vh]">
          <div className="h-[75vh]">
            <div className="block lg:hidden relative w-full h-[75vh]">
              <img
                src={BannerM3.src}
                alt="Banner móvil"
                className="object-cover w-full h-[75vh] select-none"
              />
            </div>
            <div className="hidden lg:block relative w-full h-[75vh]">
              <img
                src={Banner3.src}
                alt="Banner escritorio"
                className="object-cover w-full h-[75vh] select-none"
              />
            </div>
          </div>
          <BlurFade
            delay={0.5}
            className="absolute top-0 lg:inset-0 lg:left-0 w-full flex flex-col items-center lg:items-start justify-center text-white text-center pt-16 lg:pt-0"
          >
            <div>
              <div className="leading-none w-[370px] lg:w-[900px]">
                <h3 className="font-extrabold uppercase">
                  <span className="block lg:hidden">
                    <p className="text-[46px]">
                      Envíos <span className="text-aca-green">Gratis</span>
                    </p>
                    <span className="text-[52px]">Amba - Caba</span>
                  </span>
                  <span className="hidden lg:block">
                    <p className="text-[96px]">
                      Envíos <span className="text-aca-green">Gratis</span>
                    </p>
                  </span>
                </h3>
              </div>
              <p className="text-[18px] uppercase font-semibold lg:font-light pt-2">
                <span className="block lg:hidden">
                  {" "}
                  <span className="text-aca-green">50% Bonificados</span> al
                  interior del País
                </span>
                <span className="hidden lg:block text-[42px]">
                  A amba - caba y 50% bonificados <br /> al interior del País
                </span>
              </p>
            </div>
          </BlurFade>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
