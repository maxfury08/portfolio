import React from 'react';
import {FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaXRay } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' h-[200px] text-white flex flex-col justify-between'>
        <div className='flex flex-row w-full justify-between'>


            <div className=' w-[700px] py-2 mx-16'>
                <h1 className=' font-bold text-2xl py-3'>Ryan Jayawardana</h1>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>


            <div className='w-[200px] mx-8 text-2xl font-bold py-3 '>
                <h1 className='py-2'> Socials </h1>
                <div className=' flex flex-row w-[80%] justify-between '>
                    <a href='https://www.linkedin.com/in/ryan-jayawardana-149465222/'><FaLinkedin/></a>
                    <a href='https://github.com/maxfury08'><FaGithub/></a>
                    <a href=''><FaTwitter/></a>
                    <a href='https://web.facebook.com/ryan.jayawardana'><FaFacebook/></a>
                </div>
            </div>

        </div>

        <div className=' mx-auto justify-center' >
            <p className=' text-xs pb-2'>® Copyright 2024 . Made by Ryan Jayawardana </p>
        </div>
    </div>
  )
}

export default Footer