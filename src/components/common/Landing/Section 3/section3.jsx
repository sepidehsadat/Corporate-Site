import React from 'react'
import Style from './Section3.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'


// import image

import riazi from '../../../../assets/images/Landing/rizaiimg.jpg'
import shimi from '../../../../assets/images/Landing/shimiimg.jpg'
import saham from '../../../../assets/images/Landing/sahamimg.jpg'
import computer from '../../../../assets/images/Landing/pexels-christina-morillo-1181677.jpg'
import gol from '../../../../assets/images/Landing/section 3/undraw_podcast_q6p7000000000.svg'
import kore2 from '../../../../assets/images/Landing/section 2/undraw_lost_online_wqob-1.svg'
import kore from '../../../../assets/images/Landing/section 2/undraw_lost_online_wqob11111111.svg'







const Section3 = () => {
return (
    <motion.div 
    className={Style.container}
    initial={{
        opacity:0,
        y:50
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{duration:1,delay:0.5}}
      viewport={{once:true}}    
    >
        <div className={Style.dasteBandi} >
            <h3>دسته بندی</h3>
            <Image src={gol} width={70} height={70} style={{marginLeft:"-13px",marginTop:"-32px"}} />
        </div>
        <div className={Style.items} >
            <div className={Style.item}>
                <div className={Style.itemWrapper}>
                    <Image className={Style.img} src={computer} fill />
                    <div className={Style.imgOverlay}></div>
                    <div className={Style.itemCopy}>
                        <div className={Style.itemName}>
                            کامپیوتر <span className={Style.span} >با بهترین اساتید کشور</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.item}>
                <div className={Style.itemWrapper}>
                <Image className={Style.img} src={shimi} fill />
                    <div className={Style.imgOverlay}></div>
                    <div className={Style.itemCopy}>
                        <div className={Style.itemName}>
                            شیمی <span className={Style.span} >با بهترین اساتید کشور</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.item}>
                <div className={Style.itemWrapper}>
                <Image className={Style.img} src={saham} fill />
                    <div className={Style.imgOverlay}></div>
                    <div className={Style.itemCopy}>
                        <div className={Style.itemName}>
                            سهام <span className={Style.span} >با بهترین اساتید کشور</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.item}>
                <div className={Style.itemWrapper}>
                <Image className={Style.img} src={riazi} fill />
                    <div className={Style.imgOverlay}></div>
                    <div className={Style.itemCopy}>
                        <div className={Style.itemName}>
                            ریاضی <span className={Style.span}>با بهترین اساتید کشور</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Image src={kore2} width={30} height={30} />
        <Image src={kore} width={30} height={20} style={{float:"right", marginTop:"-100px"}} />
    </motion.div>
)
}

export default Section3;