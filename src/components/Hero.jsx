import React from 'react'
import heroimage from '../assets/profilepic7.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
        <div className="my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
              <img src={heroimage} alt="hero image"></img>
        
        </div>

        <div className="col-span-2 px-5 my-auto">

           <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
              <span className='primary-color'>
                Hi! I'm a
              </span> <br/>
                 <TypeAnimation
                 sequence={[
                "Full Stack",
                 1000,
                 'Website',
                 1000,
                'Developer',
                 1000,
                 ]}
                 wrapper='span'
                 speed={50}
                 repeat={Infinity}>
                 
                 </TypeAnimation>
              </h1>

              <p className='text-white sm:text-lg my-6 lg:text-xl'>
                 My name is Abe Takayoshi, you can call me Jackson. I have completed the Xecelerate 
                 Full Stack Web devloper course since 2024.
              </p>

              <div className="my-8">
                 <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 border text-white hover:border-none'>
                    Download CV
                 </a>
                 <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4 border text-white hover:border-none'>
                    Contact
                 </a>
              </div>
        
        </div>
    
    </div>
  )
}

export default Hero