'use client';

import { Swiper as SwiperObject } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import React, { useState } from 'react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './slidesshow.css';
type Props = {
  images: string[];
  title: string;
  className?: string;
};

export const PorductSlideShow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={`${className}`}>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#000000',
            '--swiper-pagination-color': '#050505',
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 2500 }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={900}
              height={900}
              src={`/imgs/products/${image}`}
              alt={title}
              className="rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image} className="mySwiper-slide">
            <Image
              width={400}
              height={400}
              src={`/imgs/products/${image}`}
              alt={title}
              className="rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
