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
    <div className="h-[75vh] w-full relative bg-ui-bg-subtle">
      <Swiper
        slidesPerView={1}
        loop
        centeredSlides
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="relative w-full h-full">
          <Image
            src={BannerM1}
            alt="BannerM1"
            width={430}
            height={932}
            className="object-cover select-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image
            src={BannerM2}
            alt="BannerM2"
            width={430}
            height={932}
            className="object-cover select-none"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image
            src={BannerM3}
            alt="BannerM3"
            width={430}
            height={932}
            className="object-cover select-none"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
