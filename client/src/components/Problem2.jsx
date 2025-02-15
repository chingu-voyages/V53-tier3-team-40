import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

const Problem2 = () => {
  return (
    <>
    <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="swiper w-full max-w-7xl h-96"
      >
        <SwiperSlide className="swiper-slide relative w-full h-full px-[150px]">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
          Dog Slide
        </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative w-full h-full px-[150px]">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
          Cat Slide
        </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative w-full h-full px-[150px]">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
          Bird Slide
        </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide relative w-full h-full px-[150px]">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="w-full h-full object-cover"/>
        </SwiperSlide>
      </Swiper>
      </>
  )
}


export default Problem2