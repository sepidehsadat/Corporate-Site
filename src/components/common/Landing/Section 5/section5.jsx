import React from 'react'
import Style from './Section5.module.css'
import OSTAD from '../../../../assets/images/pub/ostad.jpg'
import Card from './card'

import { motion } from 'framer-motion'

const Section5 = () => {
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
      <h3 style={{fontFamily:"byekan", fontSize:"25px"}} >اساتید برتر</h3>
      <div className={Style.main}>
        <Card img={OSTAD} ostad={"دکتر بحرالعلوم"} tahsilat={"دکترای هوش مصنوعی"} rate={"5/5"} />
        <Card img={OSTAD} ostad={"دکتر بحرالعلوم"} tahsilat={"دکترای هوش مصنوعی"} rate={"5/5"}  />
        <Card img={OSTAD} ostad={"دکتر بحرالعلوم"} tahsilat={"دکترای هوش مصنوعی"} rate={"5/5"}  />
      </div>

    </motion.div>
  )
}

export default Section5