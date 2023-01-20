import React from 'react'
import {MdDarkMode} from "react-icons/md"


const Header = () => {
  return (
    <div className='flex items-center justify-between px-4 w-full h-[100px] bg-[#043565] text-white'>
        <p>Where in the world?</p>
        <div className='h-full flex items-center'>
          <MdDarkMode className='mr-2'/>
          Dark Mode
        </div>
    </div>
  )
}

export default Header