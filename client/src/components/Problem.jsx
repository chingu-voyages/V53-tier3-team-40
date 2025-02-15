import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import sad from '../assets/problem/sad.png'
import happy from '../assets/problem/happy.png'
import help from '../assets/problem/help.png'


const Problem = () => {
  return (
    <Swiper
      // style={{
      //   '--swiper-navigation-color': '#000033',
      //   '--swiper-pagination-color': '#000033',
      // }}
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="w-full max-w-6xl h-96 relative"
    >
    <SwiperSlide className="relative h-full flex items-center bg-white dark:bg-gray-900 md:px-12">
      <div className="w-full h-full flex items-center justify-end flex-shrink-0">
        <img src={sad} className="h-full w-auto object-contain max-h-full" />
      </div>
      <div className="absolute md:left-12 left-0 top-1/2 -translate-y-1/2 w-1/3 
          bg-gray-900 md:dark:bg-gray-400 
          md:dark:text-gray-800 text-white
          bg-opacity-50 p-6">
        <h2 className="md:text-2xl text-lg font-bold">Problem</h2>
        <p className="md:text-lg text-s text-gray-300 md:dark:text-gray-800 mt-2">Every year, countless lovable pets are abandoned and left to roam the streets. Life on the streets is tough, and these animals often endure hardship. Just look at those sad faces. </p>
      </div>
    </SwiperSlide>
    <SwiperSlide className="relative h-full flex items-center bg-white dark:bg-gray-900 md:px-12">
      <div className="w-full h-full flex items-center justify-start flex-shrink-0">
        <img src={help} className="h-full w-auto object-contain max-h-full" />
      </div>
      <div className="absolute md:right-12 right-0 top-1/2 -translate-y-1/2 w-1/3 
          bg-gray-900 md:dark:bg-gray-400 
          md:dark:text-gray-800 text-white
          bg-opacity-50 p-6">
        <h2 className="md:text-2xl text-lg font-bold">Helping Hands</h2>
        <p className="md:text-lg text-s text-gray-300 md:dark:text-gray-800 mt-2">Animal shelter provide a safe haven for these vulnerable creatures, offering them a chance to find a loving and responsible home.</p>
      </div>
    </SwiperSlide>
    <SwiperSlide className="relative h-full flex items-center bg-white dark:bg-gray-900 md:px-12">
      <div className="w-full h-full flex items-center justify-end flex-shrink-0">
        <img src={happy} className="h-full w-auto object-contain max-h-full" />
      </div>
      <div className="absolute md:left-12 left-0 top-1/2 -translate-y-1/2 w-1/3 
          bg-gray-900 md:dark:bg-gray-400 
          md:dark:text-gray-800 text-white
          bg-opacity-50 p-6">
        <h2 className="md:text-2xl text-m font-bold">Finally home</h2>
        <p className="md:text-lg text-s text-gray-300 md:dark:text-gray-800 mt-2">Thanks to caring individuals, these animals are given a new lease on life, thriving in their forever homes with kind and dedicated owners.</p>
      </div>
    </SwiperSlide>


  </Swiper>

    )
}

export default Problem

// → Problem: many home animals are being left on the streets each year 

// → It’s difficult for animals to leave on the streets. Animals are sad because of it.

// → Animal Shelters help poor animals to find their new owners

// → Animals are happy with their new owners 

// Swiper js