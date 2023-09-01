import React from 'react'
import Style from './Section.module.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Slide from './Slider';
import { motion } from 'framer-motion';
import Image from 'next/image';

//import image
import svg from '../../../../assets/images/Landing/section 4/12121212.svg'
import kore from '../../../../assets/images/Landing/section 2/undraw_lost_online_wqob11111111.svg'
import kore2 from '../../../../assets/images/Landing/section 2/undraw_lost_online_wqob-1.svg'





const Section4 = () => {
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
    transition={{duration:1,delay:0.5}}
    viewport={{once:true}}    
    >
        <h1 className={Style.title} > دوره ها <Image src={kore} width={30} height={30} /> </h1>
        <div className={Style.center}>
          <Image src={svg} width={350} height={200} />
          <div className={Style.slider}>
            <Slide/>          
          </div>          
        </div>
        <Image src={kore2} width={60} height={50} style={{marginLeft:"-700px"}} />
    </motion.div>
  )
}

export default Section4