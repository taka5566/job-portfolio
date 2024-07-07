import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'



const Work = () => {
  return (
    <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-md rounded-lg
    max-w-[1200px] mx-auto p-5" id='work'>
    
       <div className="pb-8">
          <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
          <p className='text-gray-400'>Check out some of my recent work</p>
       </div>

       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">

                          <img src={proj3} alt=''></img>
                          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                          justify-center items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">Twitter(X) clone</span>
                                <div className="pt-8 text-center">
                                   <a href='https://x-clone-6xtz.onrender.com'>
                                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                         Live (It might take some time to load)
                                      </button>
                                   </a>
                                </div>
                          </div>

                         </div>

          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">

                          <img src={proj2} alt=''></img>
                          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                          justify-center items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">Taiko Map Generator</span>
                                <div className="pt-8 text-center">
                                   <a href='https://taka5566.github.io/taiko-map-generator/'>
                                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                         For any Taiko emulator!
                                      </button>
                                   </a>
                                </div>
                          </div>

            </div>

            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">

                          <img src={proj4} alt=''></img>
                          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                          justify-center items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">2 Player Fighting Game</span>
                                <div className="pt-8 text-center">
                                   <a href='https://taka5566.github.io/fightingGame/'>
                                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                         Game for 2 players!
                                      </button>
                                   </a>
                                </div>
                          </div>

            </div>

            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">

                          <img src={proj5} alt=''></img>
                          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                          justify-center items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">Real time chat app</span>
                                <div className="pt-8 text-center">
                                   <a href='https://chat-app-v84f.onrender.com'>
                                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                         Live (It might take some time to load)
                                      </button>
                                   </a>
                                </div>
                          </div>

            </div>

            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                          shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                          h-[200px] bg-cover relative">

                          <img src={proj1} alt=''></img>
                          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                                          justify-center items-center">
                                <span className="text-2xl font-bold text-white tracking-wider">Canvas App</span>
                                <div className="pt-8 text-center">
                                   <a href='https://taka5566.github.io/taka5566github.io/'>
                                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                         Live
                                      </button>
                                   </a>
                                </div>
                          </div>

            </div>





                         
       </div>
    
    </div>
  )
}

export default Work