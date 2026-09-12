import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

