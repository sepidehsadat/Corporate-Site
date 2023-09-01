import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//import image
import slide1 from '../../../../assets/images/Landing/section 4/nodejs.jpg'
import slide2 from '../../../../assets/images/Landing/section 4/angular.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Slider from "./Slide";

export default function Slide() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Slider img={slide1} /></SwiperSlide>
        <SwiperSlide><Slider img={slide2}  /></SwiperSlide>
        <SwiperSlide><Slider img={slide1}/></SwiperSlide>
        <SwiperSlide><Slider img={slide2}/></SwiperSlide>
        <SwiperSlide><Slider img={slide1}/></SwiperSlide>
      </Swiper>
    </>
  );
}
