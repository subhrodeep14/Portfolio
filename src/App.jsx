import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

import { ToastContainer } from 'react-toastify';

function App() {
  const getDefaultTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [theme, setTheme] = useState(getDefaultTheme());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className='bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'>
      <button onClick={toggleTheme}>
        Switch to mode
      </button>
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
