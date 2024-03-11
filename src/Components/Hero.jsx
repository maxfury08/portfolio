import React from 'react';
import back from './assets/back.jpg';
import { ReactTyped } from 'react-typed';
import Projects from './Projects';
import ScrollIntoView from 'react-scroll-into-view'

const Hero = () => {
  return (
    <div className=' text-white  '>
        
            <div className='flex flex-col max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center bg-blend-overlay '>
                <div className=' flex px-6 uppercase font-bold text-5xl pt-5 text-center justify-center leading-[4.5rem] '>
                    <ReactTyped
                        strings={["Hey, I'm Ryan Jayawardana", "Hey, I'm a Web Developer"]}
                        typeSpeed={120}
                        backDelay={60}
                        backSpeed={150}
                        loop
                        smartBackspace={true}
                        showCursor={false}
                        />
                </div>
                <p className=' text-center font-normal text-xl px-3 mt-3 py-5'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
                <button className=' w-[200px] text-2xl font-medium bg-[#ff3131] rounded-md my-6 mx-auto py-3' >Projects</button>
            </div>
            
    </div>
  )
}

export default Hero;