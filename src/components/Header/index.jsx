import Link from 'next/link';
import React from 'react';
import Styles from './header.module.css'
import SearchBox from './Search-box';
import Image from 'next/image';
import LOGO from './../../assets/images/pub/Group 213.svg'
import { motion } from 'framer-motion';
import Nav from '../nav/Nav';



const Header = () => {
  return (
        <div className={Styles.nav}>
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
                <Link  className={Styles.btn} href={"/register"} >ثبت نام</Link>
                <Link className={Styles.btn} href={"/login"} >ورود</Link>
                
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
            transition={{duration:1,delay:2}}
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
                {/* <ul className={Styles.menu}>
                    <li className={Styles.links} >تماس با ما</li>
                    <li className={Styles.links} >اخبار</li>
                    <Link href={'/courses'} >
                        <li className={Styles.links} >دوره ها</li>                    
                    </Link>
                    <Link href={'/landing'} >
                        <li className={Styles.links} >خانه</li>                    
                    </Link>
                </ul> */}
                
                <SearchBox/>
                <Nav />
            </motion.div>
        </motion.div>
        </div>
    )
}

export default Header ;