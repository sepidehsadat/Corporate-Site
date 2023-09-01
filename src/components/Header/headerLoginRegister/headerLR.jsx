import Link from 'next/link';
import React from 'react';
import Styles from '../header.module.css'
import SearchBox from '../Search-box/index';
import Image from 'next/image';
import LOGO from '../../../assets/images/pub/Group 213.svg'
import { motion } from 'framer-motion';



const HeaderLogin = () => {
  return (
        <>
        <motion.div 
        className={Styles.container}
        >
            <motion.div 
            className={Styles.left}
            initial={{
                y:50,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{duration:2}}
            viewport={{once:true}}            
            >
                <SearchBox/>
            </motion.div>
            <motion.div 
            className={Styles.mid}
            initial={{
                y:50,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{duration:1,delay:1}}
            viewport={{once:true}}            
            ><Image src={LOGO} width={50} height={50} /></motion.div>
            <motion.div className={Styles.right}
                initial={{
                    y:50,
                    opacity:0
                }}
                whileInView={{
                    y:0,
                    opacity:1
                }}
                transition={{duration:2}}
                viewport={{once:true}}            
            >
                <ul className={Styles.menu}>
                    <li className={Styles.links} >تماس با ما</li>
                    <li className={Styles.links} >اخبار</li>
                    <Link href={'/courses'} >
                        <li className={Styles.links} >دوره ها</li>                    
                    </Link>
                    <Link href={'/landing'} >
                        <li className={Styles.links} >خانه</li>                    
                    </Link>
                </ul>
            </motion.div>
        </motion.div>
        </>
    )
}

export default HeaderLogin ;