import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Technologies from './components/Technologies';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  
  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Technologies />
    </div>
  )
}

export default App

