import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { icon } from '../icons/icon'
import Hero from './Hero';
import Skills from './Skills';

function Navbar() {
  return (

    <div className="bg-zinc-900  text-gray-300 flex justify-between items-center ">

      <div className="container mx-auto flex items-center ">
        <div className='w-1/3 flex justify-start'>
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
        <div className=' mr-10 flex justify-center items-center gap-5 w-1/3'>
          <img className='h-10 hover:cursor-pointer hover:h-14' src={icon.github} alt="" />
          <img className='h-10 hover:cursor-pointer hover:h-14' src={icon.twitter} />
          <img className='h-10 hover:cursor-pointer hover:h-14' src={icon.linkdin} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
