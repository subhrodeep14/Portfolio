import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from "../assets/assets"
import Button from './Button';

function Navbar() {
  return (

    <div className="bg-zinc-900 p-4 text-white ">

      <div className="container mx-auto flex items-center ">
        <div className=''>
          <h1 className='text-4xl ml-10 font-bold'>SUBHRO<span className='text-blue-500'>DEEP.</span></h1>
        </div>
        <div className=' w-full flex justify-center items-center '>
          <ul className="flex space-x-12  p-4 mr-44 border-2 rounded-xl mt-3  items-center font-medium text-xl ">
            <li><Link href="/home" className="hover:underline hover:text-blue-500">Home</Link></li>
            <li><Link href="/about" className="hover:underline hover:text-blue-500">About</Link></li>
            <li><Link href="/projects" className="hover:underline hover:text-blue-500">Projects</Link></li>
            <li><Link href="/skills" className="hover:underline hover:text-blue-500">Skills</Link></li>
            <li><Link href="/contact" className="hover:underline hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>
   



      </div>
     
    </div>
  );
}

export default Navbar;
