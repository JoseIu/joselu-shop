'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import React from 'react';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import './slidesshow.css';
type Props = {
  images: string[];
  title: string;
  className?: string;
};

export const PorductMobileSlideShow = ({ images, title, className }: Props) => {
  return (
    <div className={`${className}`}>
      <Swiper
        style={
          {
            width: '100%',
            height: '600px',
            '--swiper-navigation-color': '#000000',
            '--swiper-pagination-color': '#050505',
          } as React.CSSProperties
        }
        pagination
        autoplay={{ delay: 2500 }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image width={600} height={500} src={`/imgs/products/${image}`} alt={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
