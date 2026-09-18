import React, { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi'

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY

      if (totalHeight > 0) {
        const progress = (currentScroll / totalHeight) * 100
        setScrollProgress(progress)
      }

      if (currentScroll > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const radius = 22
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 cursor-pointer transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      title="Voltar ao topo"
    >
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r={radius}
          className="text-gray-200 dark:text-zinc-800"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
        />

        <circle
          cx="25"
          cy="25"
          r={radius}
          className="text-[#10B981] transition-all duration-150 ease-out"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>

      <button className="cursor-pointer absolute w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-700 dark:text-gray-200 shadow-lg hover:border-[#10B981] hover:text-[#10B981] dark:hover:text-[#10B981] hover:scale-110 active:scale-95 transition-all duration-300 group">
        <HiArrowUp className="text-lg group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>
    </div>
  )
}

export default ScrollToTop