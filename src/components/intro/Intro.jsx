import React from 'react'
import Style from './intro.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
// image import
import image1 from './image/pexels-fauxels-3182751.jpg'
import image2 from './image/pexels-fauxels-3183172.jpg'
import image3 from './image/pexels-fauxels-3184644.jpg'
import image4 from './image/pexels-ketut-subiyanto-4623488.jpg'
import LOGOintro from './image/logointro.png'


const Intro = () => {



  return (
    <motion.div
    className={Style.container}
    initial={{
      opacity: 1,
    }}
    animate={{
      opacity: 1
    }}
    >

      <Link href={'./landing'} className={Style.link2} >
      
        <motion.div 
        className={Style.left}
        initial={{

        }}
        animate={{

        }}
        transition={{duration:1.5}}
        >
          <motion.div 
          className={Style.img1}
          initial={{
            y:150,
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{duration:2}}
          >
            <Image src={image2} width={170} height={250} />            
          </motion.div>
          <motion.div 
          className={Style.img1}
          initial={{
            y:150,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{duration:2.5}}
          >
            <Image src={image3} width={170} height={250} />            
          </motion.div>          
        </motion.div>
          <motion.div 
          className={Style.mainimg}
          initial={{
            y:180,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{duration:3}}         
          >  
              <Image src={LOGOintro}  className={Style.link}  width={550} height={450}/>
              <motion.div className={Style.click}>
                  <h3>کلیک کنید</h3>
                </motion.div>  
          </motion.div>
        <motion.div 
        className={Style.right}
        initial={{

        }}
        animate={{

        }}
        transition={{duration:1.5}}
        >
          <motion.div 
          className={Style.img1}
          initial={{
            y:150,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{duration:2}}
          >
            <Image src={image4} width={170} height={250} />            
          </motion.div>
          <motion.div 
          className={Style.img1}
          initial={{
            y:150,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{duration:4}}
          >
            <Image src={image2} width={170} height={250} />            
          </motion.div>        
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default Intro