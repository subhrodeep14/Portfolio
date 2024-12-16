import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="font-sans">

        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />

        <Footer />


      </div></>

  );
}

export default App;
