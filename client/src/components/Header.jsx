import React from "react";
import animals from "../assets/header/animals";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="">
      <div className="top-0 left-0 h-[10vh]">
        <Menu className="absolute top-4 right-4 z-40" />
      </div>

      <header className="header w-full h-[600px] bg-green-200 text-black flex flex-col md:flex-row items-center justify-center overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-[50%] bg-green-100 z-0 md:-mr-4"></div>
        <div className="absolute top-0 right-0 h-full w-[46%] bg-[#86e0a0] z-0 md:-mr-4"></div>

        <div className="header-content w-full h-full flex flex-col justify-center items-center md:text-left text-center space-y-4 z-10 ps-[10%] pt-[6%]">
          <h1 className="text-[min(8vw,6rem)] font-bold text-center md:text-left lg:text-left mb-1 ">
            Find Your Favorite
            <br />
            Friend
          </h1>
          <p className="text-lg md:text-xl pr-4">
            Explore thousands of furry friends from 10,000+ shelters and rescues
            waiting for a home.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-full hidden md:flex items-center justify-center z-10 m-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            className="h-full w-full"
          >
            {animals.map((animal) => (
              <SwiperSlide key={animal._id}>
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="  sm:h-[75%] sm:w-[80%] md:w-full md:h-full p-4 object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>
    </div>
  );
};

export default Header;
