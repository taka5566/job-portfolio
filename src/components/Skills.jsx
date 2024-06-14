import React from 'react'
import { useInView } from 'react-intersection-observer'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const spotStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'rotate(0deg)' : 'rotate(-180deg)',
    transition: 'opacity 1s, transform 1s',
  };

  return (
    <div
      ref={ref}
      className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-md rounded-lg
      border border-gray-600 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
      place-items-center md:flex md:justify-between md:items-center"
    >
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>

      <div
        className="spot flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]"
        style={spotStyle}
      >
        <img src={html} alt="" />
        <p className="mt-2">HTML</p>
      </div>

      <div
        className="spot flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]"
        style={spotStyle}
      >
        <img src={css} alt="" width={100} height={100} />
        <p className="mt-2">CSS</p>
      </div>

      <div
        className="spot flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]"
        style={spotStyle}
      >
        <img src={javascript} alt="" width={100} height={100} />
        <p className="mt-2">JavaScript</p>
      </div>

      <div
        className="spot flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]"
        style={spotStyle}
      >
        <img src={tailwind} alt="" width={100} height={100} />
        <p className="mt-2">Tailwind</p>
      </div>

      <div
        className="spot flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]"
        style={spotStyle}
      >
        <img src={react} alt="" width={100} height={100} />
        <p className="mt-2">React</p>
      </div>
    </div>
  );
};

export default Skills;