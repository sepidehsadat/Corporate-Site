import React from 'react'
import Style from "./Section2.module.css"
import Image from 'next/image'


const CardLanding = ({name , img} ) => {
return (
    <>
        <div className={Style.item} >
            <Image className={Style.img} src={img}  height={130} />
            <div className={Style.name}>
            <h3>{name}</h3>  
            </div>
        </div>
        <div className={Style.overlay} ></div>
    </>
)
}

export default CardLanding