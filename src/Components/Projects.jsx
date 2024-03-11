import React from 'react';
import p1img from './assets/portimg.png'

const Projects = () => {
  return (
      <div className=' text-white min-h-screen mt-5'>
      <div className=' mb-3'>
        <h1 className=' font-black text-5xl text-center py-2'><span className=' tracking-widest'>PROJECTS</span></h1>
        <p className=' w-[700px] mx-auto font-medium text-center py-4 '>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      </div>


      <div className='max-w-[1240px] mx-auto grid   lg:grid-cols-3 gap-9'>

        <div className='w-[400px] m-4 mt-2 mx-auto flex flex-col justify-center border-2 border-gray-600 rounded-lg hover:scale-105 duration-300'>
          <img src={p1img} alt='/' className=' w-[500px]'/>
          <h1 className=' font-bold text-center text-2xl py-4 tracking-wider'>Project Name</h1>
          <button className='w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg '>GitHub Link</button>
        </div>

        <div className='w-[400px] m-4 mt-2 mx-auto flex flex-col justify-center border-2 border-gray-600 rounded-lg hover:scale-105 duration-300'>
          <img src={p1img} alt='/' className=' w-[500px]'/>
          <h1 className=' font-bold text-center text-2xl py-4 tracking-wider'>Project Name</h1>
          <button className='w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg '>GitHub Link</button>
        </div>

        <div className='w-[400px] m-4 mt-2 mx-auto flex flex-col justify-center border-2 border-gray-600 rounded-lg hover:scale-105 duration-300'>
          <img src={p1img} alt='/' className=' w-[500px]'/>
          <h1 className=' font-bold text-center text-2xl py-4 tracking-wider'>Project Name</h1>
          <button className='w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg '>GitHub Link</button>
        </div>

        <div className='w-[400px] m-4 mt-2 mx-auto flex flex-col justify-center border-2 border-gray-600 rounded-lg hover:scale-105 duration-300'>
          <img src={p1img} alt='/' className=' w-[500px]'/>
          <h1 className=' font-bold text-center text-2xl py-4 tracking-wider'>Project Name</h1>
          <button className='w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg '>GitHub Link</button>
        </div>

        <div className='w-[400px] m-4 mt-2 mx-auto flex flex-col justify-center border-2 border-gray-600 rounded-lg hover:scale-105 duration-300'>
          <img src={p1img} alt='/' className=' w-[500px]'/>
          <h1 className=' font-bold text-center text-2xl py-4 tracking-wider'>Project Name</h1>
          <button className='w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg '>GitHub Link</button>
        </div>

        <div className='w-[400px] m-4 mt-2 mx-auto flex flex-col justify-center border-2 border-gray-600 rounded-lg hover:scale-105 duration-300'>
          <img src={p1img} alt='/' className=' w-[500px]'/>
          <h1 className=' font-bold text-center text-2xl py-4 tracking-wider'>Project Name</h1>
          <button className='w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg '>GitHub Link</button>
        </div>

      </div>
      </div>
  )
}

export default Projects;