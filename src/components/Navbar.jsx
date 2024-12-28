import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { icon } from '../icons/icon'
import Button from './Button';

function Navbar() {
  return (

    <div className="bg-zinc-900  text-gray-300 flex justify-between items-center h-20">

      <div className="container mx-auto flex items-center ">
        <div className='w-1/3 flex justify-start'>
          <h1 className='text-4xl ml-10 font-bold'>SUBHRO<span className='text-blue-500'>DEEP.</span></h1>
        </div>
        <div className=' w-full ml-40 flex justify-center items-center '>
          <ul className="flex space-x-12  p-4 mr-44 border-2 rounded-xl mt-3  items-center font-medium text-xl ">
            <li><Link href="/home" className="hover:underline hover:text-blue-500">Home</Link></li>
            <li><Link href="/skills" className="hover:underline hover:text-blue-500">Skills</Link></li>
            <li><Link href="/projects" className="hover:underline hover:text-blue-500">Projects</Link></li>

            <li><Link href="/contact" className="hover:underline hover:text-blue-500">Contact</Link></li>
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
