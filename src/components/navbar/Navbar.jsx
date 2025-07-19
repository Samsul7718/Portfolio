import React from 'react'
import {logo} from '../../assets/index'
import { navLinksData } from '../../constant'

const Navbar = () => {
  return (
    <div className='w-full h-20 px-4 sm:px-6 lg:px-16 bg-bodyColor flex items-center justify-between
    shadow-md font-titleFont border-b-[1px] border-b-gray-600 fixed top-0 left-0 right-0 z-50'>
      
    <div className='flex-shrink-0'>
        <img className='w-15 h-15 rounded-full ' src={logo} alt="logo" />
    </div>
    {/* Desktop Menu */}
    <ul className='hidden md:flex items-center gap-8'>
      {navLinksData.map(({_id,title,link})=>(
        <li 
        key={_id}
        className='text-base text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
          {title}
        </li>
      ))}
    </ul>
    {/* Mobile Menu */}
    </div>
   
  )
}

export default Navbar