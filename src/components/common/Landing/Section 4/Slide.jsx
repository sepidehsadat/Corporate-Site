import Image from 'next/image'
import React from 'react'
import Style from './Section.module.css'


const Slider = ({img}) => {
  return (
    <>
            <div className={Style.slider}>
                <Image src={img} fill style={{borderRadius:'17px'}} />
                <div className={Style.shodow}></div>
                    <div className={Style.element}>
                        <h3 style={{marginRight:"-42px"}} >نام دوره: نود جی اس</h3>
                        <h3>قیمت دوره : 50000 تومان</h3>
                        <h3>ظرفیت باقی مانده : 30 نفر</h3>
                        <button className={Style.button} >جزییات دوره</button>
                    </div>                
                </div>
    </>
  )
}

export default Slider