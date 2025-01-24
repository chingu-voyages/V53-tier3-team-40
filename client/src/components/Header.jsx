import React from "react";
import dog from "../assets/header/dog.png";
import cat from "../assets/header/cat.png";
import hamster from "../assets/header/hamster.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <header className="header w-full h-[70vh] bg-green-200 text-black flex items-center justify-center">
      <div className="header-content w-1/2 flex flex-col justify-center pl-12 space-y-4 ml-52">
        <h1 className="text-8xl font-bold text-left mb-1">Find Your Favorite Friend</h1>
        <p className="text-xl">Explore thousands of furry friends from 10,000+ shelters and rescues waiting for a home.</p>
      </div>
      <div className="w-1/2 h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="h-full custom-swiper"
        >
          <SwiperSlide>
            <img src={cat} alt="cat" className="object-fill w-fit h-full"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={dog} alt="dog" className="object-fill w-fit h-full"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={hamster} alt="dog" className="object-fill w-fit h-full"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
};

export default Header;
