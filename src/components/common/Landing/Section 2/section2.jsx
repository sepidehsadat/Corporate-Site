import React from 'react'
import Style from "./Section2.module.css"
import CardLanding from './CardLanding'

// import image

import emtehan from '../../../../assets/images/Landing/Group 156.svg'
import moshavere from '../../../../assets/images/Landing/Group 157.svg'
import job from '../../../../assets/images/Landing/یبلفغغعتهع.svg'
import madrak from '../../../../assets/images/Landing/مدرککک.svg'
import kore from '../../../../assets/images/Landing/section 2/undraw_lost_online_wqob11111111.svg'
import kore2 from '../../../../assets/images/Landing/section 2/undraw_lost_online_wqob-1.svg'


import { motion } from 'framer-motion'
import Image from 'next/image'


const Section2 = () => {
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

      <div className={Style.khadamat}><h3>خدمات ما</h3><Image src={kore} style={{marginRight:""}} width={30} height={30} /></div>
      <div className={Style.items}>
        <CardLanding img={emtehan} name={"امتحان"} />
        <CardLanding img={moshavere} name={"مشاوره"} />       
        <CardLanding img={job} name={"فرصت های شغلی"} />       
        <CardLanding img={madrak} name={"مدرک معتبر"} />       
      </div>
      <Image src={kore2} width={50} height={50} style={{marginTop:"-500px",marginLeft:"100px",float:"right"}} />
      <Image src={kore2} width={50} height={50} style={{marginTop:"-500px",marginLeft:"100px"}} />
    </motion.div>
  )
}

export default Section2