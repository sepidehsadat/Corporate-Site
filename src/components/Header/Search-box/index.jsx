import React from 'react'
import Style from './searchBox.module.css'
import Image from 'next/image'
import Search from '../../../assets/images/pub/172546_search_icon.svg'

const SearchBox = () => {
  return (
    <div className={Style.box}>
        <input type="text" placeholder="جست و جو" />
        <a href="#">
          <Image src={Search} width={20} height={20} />
        </a>
    </div>
  )
}

export default SearchBox