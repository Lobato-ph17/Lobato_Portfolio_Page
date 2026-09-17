import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className='bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 relative min-h-screen'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}

export default App