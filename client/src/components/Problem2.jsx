import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


const Problem2 = () => {
  return (
    <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="w-full max-w-7xl h-96"
      >
        <SwiperSlide className='relative'>
          <p className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque sint eligendi iusto quidem ipsum officia? Optio omnis atque velit porro, distinctio autem, quasi commodi, facilis aperiam nostrum voluptate perspiciatis.</p>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide className='relative'>
        <p className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque sint eligendi iusto quidem ipsum officia? Optio omnis atque velit porro, distinctio autem, quasi commodi, facilis aperiam nostrum voluptate perspiciatis.</p>

          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-center bg-cover w-[300px] h-[300px]'>
        <p className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque sint eligendi iusto quidem ipsum officia? Optio omnis atque velit porro, distinctio autem, quasi commodi, facilis aperiam nostrum voluptate perspiciatis.</p>

          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-center bg-cover w-[300px] h-[300px]'>
        <p className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque sint eligendi iusto quidem ipsum officia? Optio omnis atque velit porro, distinctio autem, quasi commodi, facilis aperiam nostrum voluptate perspiciatis.</p>

          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-center bg-cover w-[300px] h-[300px]'>
        <p className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque sint eligendi iusto quidem ipsum officia? Optio omnis atque velit porro, distinctio autem, quasi commodi, facilis aperiam nostrum voluptate perspiciatis.</p>

          <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide bg-center bg-cover w-[300px] h-[300px]'>
        <p className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque sint eligendi iusto quidem ipsum officia? Optio omnis atque velit porro, distinctio autem, quasi commodi, facilis aperiam nostrum voluptate perspiciatis.</p>

          <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="w-full h-full object-cover"/>
          </SwiperSlide>
      </Swiper>
  )
}


export default Problem2