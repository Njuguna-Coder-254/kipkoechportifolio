import React from 'react'
import { Link } from "react-scroll";


import Typewriter from "typewriter-effect";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
    Alex Kipkoech Towett
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className='mr-2'>I am a</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
        Full-Stack Web Developer with ability to learn and collaborate in rapidly changing environments and compositions.
        </p>
        <div className="mt-4 mx">
        <button  className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
          >
          <Link to='contact' smooth={true} duration={500}>Hire Me</Link>
        </button>
         
        </div>
        <div className="mt-4">
              <button
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
              >
                 <a href='https://eu.docworkspace.com/d/sIJe5iq_dAfC75a8G' >Resume</a>
                
              </button>
            </div>
        
      </div>
    </div>
  );
}

export default Home;