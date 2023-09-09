import Link from 'next/link';
import React from 'react';
import Styles from './header.module.css'
import SearchBox from './Search-box';
import Image from 'next/image';
import LOGO from './../../assets/images/pub/Group 213.svg'
import { motion } from 'framer-motion';
import Nav from '../nav/Nav';



const Header = () =>
{
    return (
        <div className={Styles.nav}>
            <Nav />
        </div>
    )
}

export default Header;