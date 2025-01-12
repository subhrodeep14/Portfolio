import React, { useEffect, useState } from 'react';

import { icon } from '../icons/icon'

const handleClick = (link) => {
  
  window.open(link, '_blank');

};


function Navbar() {
  const[showMobileMenu,setShowMobileMenu] = useState(false)

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }else{
       document.body.style.overflow='auto'
    }
    return ()=>{
       document.body.style.overflow='hidden'
    }
  },[showMobileMenu])
  return (


    <div className="bg-zinc-900 text-gray-300 shadow-md top-0 z-50 w-full">
    <div className="container mx-auto  flex items-center justify-between px-6 py-6 md:px-20 lg:px-32">
      <div className="w-1/3 flex justify-start">
        <h1 className="text-4xl ml-10 font-bold">SUBHRO<span className="text-blue-500">.</span></h1>
      </div>
    <div className="w-2/3 flex justify-end md:hidden">
    <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-gray-300 focus:outline-none">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </div>
  <div className={`w-full  md:flex md:items-center md:w-auto ${showMobileMenu ? 'block' : 'hidden'}`}>
    <nav className="flex flex-col md:flex-row md:ml-auto md:mr-10">
      <a href="#home" className="p-2 lg:px-4 md:mx-2 text-blue-500 rounded hover:bg-slate-700 hover:text-blue-400 transition-colors duration-300">Home</a>
      <a href="#about" className="p-2 lg:px-4 md:mx-2 text-blue-500 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300">About</a>
      <a href="#services" className="p-2 lg:px-4 md:mx-2 text-blue-500 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300">Services</a>
      <a href="#contact" className="p-2 lg:px-4 md:mx-2 text-blue-500 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300">Contact</a>
    </nav>
  </div>
  <div className={`w-full   md:flex md:items-center md:w-auto ${showMobileMenu ? 'block' : 'hidden'}`}>
    <nav className="flex justify-center items-center gap-4 md:flex-row md:ml-auto md:mr-10">
          <img className='h-8  w-16 hover:cursor-pointer hover:h-10 transition-colors duration-300 rounded-full  ' onClick={()=>handleClick('https://github.com/subhrodeep14')}  src={icon.github} alt="" />
          <img className='h-8  w-16 hover:cursor-pointer hover:h-10 ' onClick={() => handleClick('https://twitter.com/subhrodeep14')} src={icon.twitter} />
          <img className='h-8 w-16 hover:cursor-pointer hover:h-10'  onClick={() => handleClick('https://www.linkedin.com/in/subhrodeep-acharya-ba2590266/')} src={icon.linkdin} alt="" />
    </nav>
          
        </div>
  </div>
  </div>
  

  );
}

export default Navbar;
