"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import BannerM1 from "../../../../images/BannerM1.png";
import BannerM2 from "../../../../images/BannerM2.png";
import BannerM3 from "../../../../images/BannerM3.png";

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
        <SwiperSlide className="relative w-full h-full">
          <Image
            src={BannerM1}
            alt="BannerM1"
            width={430}
            objectFit="cover"
            className="select-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image
            src={BannerM2}
            alt="BannerM2"
            width={430}
            objectFit="cover"
            className="select-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image
            src={BannerM3}
            alt="BannerM3"
            width={430}
            objectFit="cover"
            className="select-none"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
