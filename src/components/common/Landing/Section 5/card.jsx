import React from 'react'
import Style from './Section5.module.css'
import Image from 'next/image'

const Card = ({img , ostad , tahsilat, rate}) => {
return (
    <>
        <div className={Style.item}>
        <div className={Style.img}>
            <Image src={img} fill className={Style.image} />
        </div>
        <div className={Style.p}>
            <div className={Style.esm}>
            <h3>{ostad}</h3>
            <h5 style={{color:"#8D8D8D",fontSize:"13px"}} >{tahsilat}</h5>              
            </div>
            <div className={Style.emtiaz}>
            <h3>{rate} امتیاز </h3>
            </div>
            <button className={Style.btn} >صفحه استاد</button>
        </div>
        </div>
    </>
)
}

export default Card