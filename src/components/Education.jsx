import React, { useEffect, useRef } from 'react';
import schoolImg from '../assets/schoolImg.png'
import xcceImg from '../assets/xcceImg.jpg'


const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const element = educationRef.current;
    const fadeInClass = 'fade-in-right';

    const handleScroll = () => {
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        element.classList.add(fadeInClass);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=""  ref={educationRef}>
       <div className="text-center">
          <h2 className='text-4xl font-bold leading-tight primary-color p-6'>Education</h2>
       </div><div className="flex">
  <div className="flex-shrink-0 p-10">
    <img src={schoolImg} alt='' className='w-30 h-30 rounded-lg' />
  </div>
  <div className="ml-4 space-y-3 m-auto text-left text-white">
    <p className='font-bold text-3xl text-cyan-400'>Bachelor of Science in Testing Science</p>
    <p className='text-xl'>The Open University of Hong Kong</p>
    <p className='text-lime-500 italic'>2019-2021 | Completed</p>
  </div>
  
</div>
<div className="flex">
  <div className="flex-shrink-0 p-10">
    <img src={xcceImg} alt='' className='w-30 h-30 rounded-lg' />
  </div>
  <div className="ml-4 space-y-3 m-auto text-left text-white">
    <p className='font-bold text-3xl text-cyan-400'>Stack Web Development Immersive Bootcamp</p>
    <p className='text-xl'>Xccelerate</p>
    <p className='text-lime-500 italic'>2023-2024 | Completed</p>
  </div>
  
</div>
</div>

  )
}

export default Education