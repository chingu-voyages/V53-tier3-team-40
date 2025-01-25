import React from "react";
import animals from "../assets/header/animals";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <header className="header w-full h-[70vh] bg-green-200 text-black flex flex-col md:flex-row items-center justify-center overflow-hidden">

      <div className="absolute top-0 left-0 h-[70vh] w-[50%] bg-green-100 z-0 md:-mr-4"></div>
      <div className="absolute top-0 right-0 h-[70vh] w-[46%] bg-green-300 z-0 md:-mr-4"></div>

      <div className="header-content w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6 md:pl-12 text-center md:text-left space-y-4 ml-52 z-10">
        <h1 className="text-7xl md:text-8xl font-bold text-center md:text-left lg:text-left mb-1">Find Your Favorite Friend</h1>
        <p className="text-sm md:text-xl">Explore thousands of furry friends from 10,000+ shelters and rescues waiting for a home.</p>
      </div>
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-full hidden md:flex items-center justify-center z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="h-full custom-swiper"
        >
          {animals.map((animal) => (
            <SwiperSlide key={animal._id}>
              <img src={animal.image} alt={animal.name} className="object-fill w-fit h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
};

export default Header;
