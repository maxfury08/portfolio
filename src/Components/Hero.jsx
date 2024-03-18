import React from 'react';
import { ReactTyped } from 'react-typed';
import backimg from './assets/wallpaper.jpg'



const Hero = () => {
  return (
      
    <div className=' text-white min-h-screen bg-transparent' id='1'>
      <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: `url(${backimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <div className='flex flex-col max-w-[800px] w-full h-screen mx-auto text-center justify-center bg-transparent '>
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
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Hero;