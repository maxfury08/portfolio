import React from 'react';
import backimg3 from './assets/back1.jpg';

const Contact = () => {
  return (
    <div id='4'>
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: `url(${backimg3})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
    <div className=' min-h-screen w-full py-5'>
        <div className=' text-center'>
            <h1 className=' text-5xl font-bold tracking-widest uppercase py-2'>Contact</h1>
            <p className=' w-[700px] mx-auto font-medium text-center py-4 '>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>
        <div className=' px-4 sm:w-2/3 lg:w-1/2 mx-auto'>


            <div className=' rounded-lg shadow-lg bg-black bg-opacity-30  flex flex-col '> 

                <form action='' className=' space-y-4 py-10 md:py-12 px-4 md:px-6'>
                    <div className=' flex flex-col'>
                        <label className=' text-lg py-2 '>Your Name</label>
                        <input type='text' placeholder='Your Name' className=' rounded-md py-2 pl-1'></input>
                    </div>
                   
                    <div className=' flex flex-col'>
                        <label className='text-lg py-2'>Email</label>
                        <input type='email' placeholder='Enter Your Email' className=' rounded-md py-2 pl-1 '></input>
                    </div>
                    
                    <div className=' flex flex-col'>
                        <label className='text-lg py-2'>Message</label>
                        <textarea placeholder="Enter your message" className="rounded-md py-2 pl-1 h-48"></textarea>
                    </div>
                    <div className=' flex justify-end py-3 '>
                        <button className=' text-xl font-bold py-2 bg-white bg-opacity-50 rounded-lg px-8 border-1 border-gray-800 hover:scale-110 duration-200 '>Submit</button>
                    </div>
                </form>
                

            </div>
        
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact;