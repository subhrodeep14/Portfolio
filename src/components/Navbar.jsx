import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {assets} from "../assets/assets"
import Button from './Button';

function Navbar() {
  return (
    
    <nav className="bg-zinc-800 p-4 text-white flex ">
       
      <div className="container mx-auto flex  items-center  ">
        <div className=''>
          <h1 className='text-3xl ml-10 font-bold'>SUBHRO<span className='text-blue-500'>DEEP.</span></h1>
        </div>
        <div className=' w-full flex justify-center '>
          <ul className="flex space-x-12  items-center font-medium text-xl ">
          <li><Link href="/home" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/projects" className="hover:underline">Projects</Link></li>
          <li><Link href="/skills" className="hover:underline">Skills</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className='flex justify-center p-2 gap-3 mr-10 text-xl'>
        <button className='py-2 px-10 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-blue-500 border-blue-600 text-white hover:bg-zinc-800 hover:text-blue-500 '><span className=''>RESUME</span></button>
          <button className='py-2 px-10 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-500 hover:text-white '>SHARE</button>
        </div> 
        
        
        
      </div>
    </nav>
  );
}

export default Navbar;
