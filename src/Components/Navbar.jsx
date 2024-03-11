import React, { useState } from 'react';
import logo from './assets/new.png';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className=' bg-[#000300] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <img src={logo} alt='logo' className='max-w-[95px] m-4'/>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Resume</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={25}/>}
        </div>

        <div className={nav ? 'fixed left-0 top-0 md:w-[30%] w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%]'}>
            <img src={logo} alt='logo' className='max-w-[100px]  m-4'/>

            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Projects</li>
                <li className='p-4 border-b border-gray-600'>Resume</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
  )
}
export default Navbar