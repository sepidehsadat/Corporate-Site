import React from 'react'
import Style from './Section6.module.css'
import Items from './Items';
import { motion } from 'framer-motion';

//swiper
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


//import image
import Img from '../../../../assets/images/pub/pexels-olia-danilevich-4974920.jpg'
import gol from '../../../../assets/images/Landing/section 3/undraw_podcast_q6p7000000000.svg'
import Image from 'next/image';




const Section6 = () => {
return (
    <motion.div 
    className={Style.container}
    initial={{
        opacity:0,
        y:50
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{duration:0.5,delay:0.5}}
      viewport={{once:true}}    
    >
        <div className={Style.akhbar}>
        <h3 className={Style.akhbar}>اخبار و مقالات <Image src={gol} width={50} height={50}
        style={{float:"right",marginTop:"-50px",marginRight:"-15px"}}
        />  </h3>
        
        </div>
        <div className={Style.items}>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
        <SwiperSlide className={Style.slide}><Items img={Img} title={"اغاز برنامه نویسی کودکان بزودی"} p={"اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی"} /></SwiperSlide>
        <SwiperSlide className={Style.slide}><Items img={Img} title={"اغاز برنامه نویسی کودکان بزودی"} p={"اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی"} /></SwiperSlide>
        <SwiperSlide className={Style.slide}><Items img={Img} title={"اغاز برنامه نویسی کودکان بزودی"} p={"اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی"} /></SwiperSlide>
        <SwiperSlide className={Style.slide}><Items img={Img} title={"اغاز برنامه نویسی کودکان بزودی"} p={"اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی"} /></SwiperSlide>
        <SwiperSlide className={Style.slide}><Items img={Img} title={"اغاز برنامه نویسی کودکان بزودی"} p={"اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی"} /></SwiperSlide>
        <SwiperSlide className={Style.slide}><Items img={Img} title={"اغاز برنامه نویسی کودکان بزودی"} p={"اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی"} /></SwiperSlide>
        <SwiperSlide className={Style.slide}><Items img={Img} title={"اغاز برنامه نویسی کودکان بزودی"} p={"اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی اغاز برنامه نویسی کودکان بزودی"} /></SwiperSlide>
        </Swiper>
        </div>
    </motion.div>
)
}

export default Section6