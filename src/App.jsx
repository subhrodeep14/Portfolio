import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-zinc-900'>
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
