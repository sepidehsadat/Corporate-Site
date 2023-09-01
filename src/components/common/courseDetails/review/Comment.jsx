import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


// import css module
import Style from './review.module.css'

// import image
import userImage from '../image/pexels-mikhail-nilov-8919024.jpg'
import like from '../image/7548790_user_interface_like_dislike_hand_icon.svg'
import dislike from '../image/7548915_user_interface_dislike_like_hand_icon.svg'




const Comment = ({username,section}) => {
  return (
    <div className={Style.card} >
        <div className={Style.username}>
            <div className={Style.user}>
            <h3>{username}</h3>
            <h5 style={{color:"#DADADA",float:"right"}} >{section}</h5>                 
            </div>
            <Image src={userImage} width={35} height={35} className={Style.img} />
        </div>
        <div className={Style.comment}>
            <p>دوره قبلی بودم داخلش دوره خوبیه حتما بهتون پیشنهاد میکنم</p>
        </div>
        <div className={Style.likeReplay}>
            <div className={Style.likedis}>
                <Image src={like} width={20} className={Style.scale} />
                <Image src={dislike} width={20} className={Style.scale}/>
            </div>
            <div className={Style.replay}>جواب دادن</div>
        </div>
    </div>
  )
}

export default Comment