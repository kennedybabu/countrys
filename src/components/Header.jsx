import React from 'react'
import {MdDarkMode} from "react-icons/md"


const Header = () => {
  return (
    <div className='flex items-center justify-between px-2 w-full h-[60px] bg-[#043565] text-white'>
        <p>Countrys</p>
        <MdDarkMode />
    </div>
  )
}

export default Header