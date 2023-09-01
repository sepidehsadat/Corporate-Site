import React from 'react'

// import css module
import Style from './Detail.module.css'

const DetailL = ({detail, e}) => {
  return (
    <div className={Style.detail}><h3 style={{marginRight:"6px"}}>{e}</h3>:<h3 style={{color:"#767676"}} >{detail}</h3></div>  
)
}

export default DetailL