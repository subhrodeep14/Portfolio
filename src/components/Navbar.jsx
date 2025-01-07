import React, { useEffect, useState } from 'react';

import { icon } from '../icons/icon'

const handleClick = (link) => {
  
  window.open(link, '_blank');

};


function Navbar() {
  return (

    <div className="bg-zinc-900  text-gray-300 flex justify-between items-center  h-20 shadow-md top-0 z-50 ">

      <div className="container mx-auto flex items-center "> 
        <div className='w-1/3 flex justify-start '>
          <h1 className='text-4xl ml-10 font-bold'>SUBHRO<span className='text-blue-500'>DEEP.</span></h1>
        </div>
        <div className=' w-full ml-40 flex justify-center items-center '>
          <ul className="flex space-x-12  p-4 mr-44 border-2 rounded-xl mt-3  items-center font-medium text-xl ">
            <li><a href="#hero" className="hover:underline hover:text-blue-500">Home</a></li>
            <li><a href="#skills" className="hover:underline hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="hover:underline hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:underline hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        <div className=' mr-10 ml-10 p-4  flex justify-between items-center gap-5 w-1/4'>
          <img className='h-10 hover:cursor-pointer hover:h-12 ' onClick={()=>handleClick('https://github.com/subhrodeep14')}  src={icon.github} alt="" />
          <img className='h-10 hover:cursor-pointer hover:h-12' onClick={() => handleClick('https://twitter.com/subhrodeep14')} src={icon.twitter} />
          <img className='h-10 hover:cursor-pointer hover:h-12'  onClick={() => handleClick('https://www.linkedin.com/in/subhrodeep-acharya-ba2590266/')} src={icon.linkdin} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
