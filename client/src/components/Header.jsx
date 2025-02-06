import React from "react";
import animals from "../assets/header/animals";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Menu from "./Menu";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="">
      <div className="top-0 left-0 h-[10vh]">
        <img src={logo} alt="logo" className="absolute w-56 h-26 top-[-17px] left-8 z-40" />
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
          <Menu className="absolute top-4 right-20 z-40" />
          <div className="absolute top-4 right-8 z-40 text-emerald-400 ">
            <label className="swap swap-rotate">
              <input type="checkbox" />
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
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
