import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'

const Hero = () => {
  // 1. Estado para controlar qual texto está sendo exibido
  const roles = ["Full-Stack Developer", "Desenvolvedor Java & Node", "Criador de Interfaces"]
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  // 2. Lógica do efeito de digitação (Typewriter)
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000) // Espera 1s antes de apagar
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % roles.length) // Vai para o próximo papel
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center pt-24">
      
      {/* Badge com Status Pulsante */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 mb-8 shadow-sm">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
          Disponível para novos projetos
        </span>
      </div>

      {/* Título Principal com Digitação */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white max-w-4xl leading-tight">
        Construindo aplicações <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-[#064E3B] via-[#10B981] to-emerald-400 bg-clip-text text-transparent">
          {roles[index].substring(0, subIndex)}
        </span>
        <span className="animate-pulse text-emerald-500">|</span>
      </h1>

      {/* Subtítulo */}
      <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
        Especializado em transformar ideias complexas em sistemas web escaláveis, eficientes e de alta performance.
      </p>

      {/* Ações / Chamadas para Ação (CTAs) */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
        <a 
          href="#projects" 
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#064E3B] to-[#10B981] text-white font-medium text-sm hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Ver Meus Projetos
          <img src={assets.arrow_icon} alt="" className="w-4 h-4 invert" />
        </a>

        <a 
          href="#contact" 
          className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300 flex items-center justify-center"
        >
          Entre em Contato
        </a>
      </div>

    </section>
  )
}

export default Hero