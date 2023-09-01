import React from 'react'
import Style from './footer.module.css'
import Image from 'next/image'
import LOGO from '../../assets/images/pub/Group 213.svg'
import insta from '../../assets/images/social/1161953_instagram_icon.svg'
import tel from '../../assets/images/social/7693324_telegram_social media_logo_messenger_icon.svg'
import youtube from '../../assets/images/social/5305164_play_video_youtube_youtube logo_icon.svg'
import etemad from '../../assets/images/pub/enamad.jpg'
import { motion } from 'framer-motion'



const Footer = () => {
  return (
    <div 
    className={Style.container}
    >
        <div className={Style.LOGO}>
            <Image src={LOGO} width={120} height={120} />
        </div>
        <div className={Style.socialMedia}>
                <h3>شبکه های اجتماعی</h3>            
            <div className={Style.social}>
                <Image src={tel} width={27} height={27} />
                <Image src={insta} width={30} height={30} />
                <Image src={youtube} width={30} height={30} />
            </div>
        </div>
        <div className={Style.tamas}>
            <h3>شماره تماس</h3>
            <h3>+98910034</h3>
            <h3>+98910034</h3>
        </div>
        <div className={Style.otherPage}>
            <ul className={Style.ul} >
                <li>بلاگ</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>همکاری با ما</li>
                <li>سوالات متداول</li>
            </ul>
        </div>
        <div className={Style.img}>
            <Image src={etemad} width={150} height={100} />
        </div>
    </div>
  )
}

export default Footer