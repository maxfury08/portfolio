import React from 'react';
import backimg from './assets/back1.jpg';

const About = () => {
  return (
    <div id='2'>
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: `url(${backimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
    <div className='w-full py-16 px-4'>
      
        <div className=' max-w-[1240px] mx-auto'>

            <div>
              <h2 className=' font-black text-5xl text-center py-2'>ABOUT ME</h2>
              <div>
              </div>
              <p className=' text-center max-w-[700px] mx-auto'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>


            <div className='  flex flex-wrap md:justify-between sm:justify-center justify-center '>

              <div className=' max-w-[500px]'>
                <h1 className=' font-bold text-2xl py-5 text-center md:text-start'>Get to Know Me</h1>
                <p className=' py-2 text-left font-serif font-normal text-gray-600'>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                <p className=' py-2 text-left font-serif font-normal text-gray-600'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming</p>
                <p className=' py-2 text-left font-serif font-normal text-gray-600'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming</p>
              </div>  

              <div className='max-w-[600px] w-auto text-center md:text-start'>
                <h1 className=' font-bold text-2xl py-5'>My Skills</h1>
                <ul className=' flex flex-wrap md:flex-wrap '>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>HTML</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>CSS</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>JavaScript</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>C++</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>java</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>MySQL</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>ReactJS</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>Tailwind CSS</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>Canva</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>Linux</li>
                  <li className=' font-semibold text-2xl px-4 py-1 m-4 bg-slate-400 rounded-lg'>Python</li>
                </ul>
              </div>

            </div>


        </div>
      </div>
    </div>
    </div>
  )
}

export default About;