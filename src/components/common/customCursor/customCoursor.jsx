import React, { useEffect, useState } from 'react'
import Style from './cursor.module.css'
import { motion } from 'framer-motion'

const CustomCoursor = () => {
    const [mousePosition,setMousePosition] = useState({
        x:400,
        y:400,
    })

    const onMouseMove = event => {
        const { pageX: x, pageY: y } = event
        setMousePosition({x , y})
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    },[])


  return (
    <>
    <motion.div
    className={Style.cursor} style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
    <motion.div
    whileTap={{scale:1.2}}
    className={Style.cursor2} style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
    </>
  )
}

export default CustomCoursor