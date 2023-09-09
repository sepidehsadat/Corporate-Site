import Link from 'next/link';
import React from 'react';
import Styles from './header.module.css'
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