import React from 'react'
import Style from './Section6.module.css'
import Image from 'next/image'

const Items = ({img, title, p }) => {
  return (
    <div className={Style.item}>
      <div className={Style.main}>
        <div className={Style.image}>
        <Image style={{borderRadius:"10px"}} src={img} fill />            
        </div>
        <div className={Style.p}>
          <h3 className={Style.title}>{title}</h3>
          <p className={Style.ph}>{p}</p>
          <button className={Style.btn} >بیشتر</button>
        </div>
            
      </div>
    </div>
  )
}

export default Items