import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { ToastContainer } from 'react-toastify';

function App() {
 

  return (
    <div className='bg-zinc-900'>
      <ToastContainer/>
        <Navbar/>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

  );
}

export default App;
