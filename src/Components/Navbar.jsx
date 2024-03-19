import React, { useEffect, useState } from 'react';
import logo from './assets/new.png';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <BrowserRouter>
    <div className=' absolute bg-transparent flex justify-between items-center h-24 w-full mx-auto px-4 text-white z-50 '>
        <img src={logo} alt='logo' className='max-w-[95px] m-4'/>
        <div className=' items-end fixed top-4 right-16'>
        <ul className='hidden md:flex'>
            <li className='py-3 px-4 mx-1 my-2 bg-black bg-opacity-50 rounded-full hover:scale-110 '><Link to= '#1' smooth> Home </Link></li>
            <li className='py-3 px-4 mx-1 my-2 bg-black bg-opacity-50 rounded-full hover:scale-110 '><Link to= '#2' smooth> About </Link></li>
            <li className='py-3 px-4 mx-1 my-2 bg-black bg-opacity-50 rounded-full hover:scale-110 '><Link to= '#3' smooth> Projects </Link></li>
            <li className='py-3 px-4 mx-1 my-2 bg-black bg-opacity-50 rounded-full hover:scale-110 '><Link to= '#1' smooth> Resume </Link></li>
            <li className='py-3 px-4 mx-1 my-2 bg-black bg-opacity-50 rounded-full hover:scale-110 '><Link to= '#4' smooth> Contact </Link></li>
        </ul>
        </div>
        <div className=' fixed right-8 bg-black bg-opacity-55 p-1 rounded-lg'>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={25}/>}
        </div>

        <div className={nav ? 'fixed left-0 top-0  md:w-[30%] w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%] ease-in-out duration-300'}>
            
            <img src={logo} alt='logo' className='max-w-[100px]  m-4'/>
            <div>
                
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600' onClick={handleNav}><Link to= '#1' smooth> Home </Link></li>
                <li className='p-4 border-b border-gray-600' onClick={handleNav}><Link to= '#2' smooth> About </Link></li>
                <li className='p-4 border-b border-gray-600' onClick={handleNav}><Link to= '#3' smooth> Projects </Link></li>
                <li className='p-4 border-b border-gray-600' onClick={handleNav}><Link to= '#1' smooth> Resume </Link></li>
                <li className='p-4 border-b border-gray-600' onClick={handleNav}><Link to= '#4' smooth> Contact </Link></li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    </BrowserRouter>
  )
}
export default Navbar