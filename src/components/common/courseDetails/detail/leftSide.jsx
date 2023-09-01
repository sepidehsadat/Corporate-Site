import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

//import components
import DetailL from './DetailL'

// import image
import rate from '../image/5402427_bookmark_favorite_rate_star_award_icon.svg'
import kharid from '../image/2849824_store_shopping_market_buy_shop_icon.svg'

// import css module
import Style from './Detail.module.css'


const LeftSide = ({name,rates}) => {
  return (
    <div className={Style.Side}>
        <div className={Style.rate}>
          <div className={Style.Rate}><Image src={rate} width={18} height={18} /><div style={{marginTop:"4px",marginLeft:"2px"}} >{rates}</div></div>
          <div className={Style.title}>{name}</div>
          <div className={Style.khali}></div>
        </div>
        
        <div className={Style.details}>
        <DetailL detail={"شروع دوره"} e={"1402/2/2"}/>
        <path className={Style.khat} ></path>
        <DetailL detail={"پایان دوره"} e={"1402/2/2"}/>        
        <div className={Style.khat} ></div>
        <DetailL detail={"ظرفیت دوره"} e={"50"}/>        
        <div className={Style.khat} ></div>
        <DetailL detail={"تعداد دانشجوی دوره"} e={"30"}/>        
        <div className={Style.khat} ></div>
        <DetailL detail={"مدرس"} e={"استاد بحرالعلوم"}/>        
        <div className={Style.khat} ></div>
        <DetailL detail={"قیمت دوره"} e={"250,000"}/>            
        </div>
        <motion.button whileHover={{scale:1.05}} className={Style.btn}> <Image src={kharid} width={20} style={{marginRight:"5px",marginTop:"2px"}} /> اضافه به سبد خرید</motion.button>
      
    </div>
  )
}

export default LeftSide