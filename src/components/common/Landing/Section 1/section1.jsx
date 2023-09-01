import React from 'react'
import Style from "./Section1.module.css"
import Image from 'next/image'
import S1 from './../../../../assets/images/Landing/Group 214.svg'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Section1 = () => {
  return (
    <>
    <motion.div 
    className={Style.container}
    initial={{
      width:0
      }}
      whileInView={{
        width:1300
      }}
      transition={{duration:2,delay:1}}
      viewport={{once:true}}
    >

      <motion.h3 
      className={Style.title}
      initial={{
        opacity:0
        }}
        whileInView={{
          opacity:1
        }}
        transition={{duration:2,delay:2.7}}
        viewport={{once:true}}      
      >پژوهشگاه سپهر</motion.h3>
      <motion.div
      className={Style.p}
      initial={{
        opacity:0,
        y:30
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{duration:2,delay:3}}
        viewport={{once:true}}      
      >
        <p >پژوهشگاه سپهر با هدف تولید و انتشار  محتوای با کیفیت اموزشی و همچنین آشنایی </p>
            <p >جامعه با فضای کسب و کار در فضای مجازی ایجاد  شده و امید داریم  بتوانیم با راه </p>
            <p >کار های  نوین و  استفاده از پتانسیل فضای مجازی  ایجاد فرصت کنیم  برای افرادی که </p>
            <p >خواهان  پیشرفت خود و کشورشان هستند</p>        
      </motion.div>

      <motion.div 
      className={Style.image}
      initial={{
        opacity:0,
        y:30
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{duration:1,delay:3}}
        viewport={{once:true}} 
      > <Image src={S1} className={Style.img} /> 
      </motion.div>
      <motion.div 
      className={Style.count}
      initial={{
        opacity:0,
        y:30
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{duration:2,delay:3.8}}
        viewport={{once:true}} 
      >
        <motion.div 
        className={Style.scroll}
        initial={{
          opacity:0,
          y:30
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{duration:2,delay:8}}
          viewport={{once:true}}         
        >
        به پایین<br/>
        اسکرول کنید
      </motion.div>
        
         <h3 className={Style.daneshjoo} >دانشجو</h3> <h3 className={Style.tedad} >1420</h3>

      </motion.div>
      
    
    </motion.div>
    <motion.div
        initial={{
          opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          transition={{duration:1,delay:5}}
          viewport={{once:true}}   
    >
    <div className={Style.khat}></div>
    <Link className={Style.dore} href={"/courses"} >
        دوره ها
    </Link>      
    </motion.div>

    </>
  )
}

export default Section1