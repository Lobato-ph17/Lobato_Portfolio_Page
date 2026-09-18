import React from 'react'
import { techList } from '../assets/assets'

const Technologies = () => {
  // Mapeamento de cores oficiais por tecnologia para criar destaques vibrantes no hover
  const brandColors = {
    'Java': 'hover:border-amber-600 hover:shadow-amber-500/15',
    'JavaScript': 'hover:border-yellow-400 hover:shadow-yellow-400/15',
    'React': 'hover:border-sky-400 hover:shadow-sky-400/15',
    'Node.js': 'hover:border-emerald-500 hover:shadow-emerald-500/15',
    'MySQL': 'hover:border-blue-500 hover:shadow-blue-500/15',
    'Docker': 'hover:border-cyan-500 hover:shadow-cyan-500/15',
    'Git': 'hover:border-orange-500 hover:shadow-orange-500/15',
    'Spring Boot': 'hover:border-green-500 hover:shadow-green-500/15',
  }

  return (
    <section id="technologies" className="py-20 px-4 sm:px-12 lg:px-24 max-w-7xl mx-auto text-gray-800 dark:text-white">
      
      {/* 1. CABEÇALHO COM DESTAQUE VISUAL (LINHAS EM GRADIENTE) */}
      <div className="flex flex-col items-center text-center mb-12">
        
        {/* Linha decorativa + Badge */}
        <div className="flex items-center gap-3 mb-4 w-full max-w-md justify-center">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#10B981]"></div>
          <span className="text-xs font-mono tracking-widest text-[#10B981] font-semibold uppercase">
            [ 02 / 05 ] · SKILLS
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#10B981]"></div>
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Ferramentas <span className="bg-gradient-to-r from-[#064E3B] to-[#10B981] bg-clip-text text-transparent">de Trabalho</span>
        </h2>

        {/* Subtítulo */}
        <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl">
          As linguagens, frameworks e tecnologias que utilizo no meu dia a dia de desenvolvimento.
        </p>
      </div>

      {/* 2. BARRA DE DISTRIBUIÇÃO PREENCHENDO 100% DA LARGURA */}
      <div className="bg-white dark:bg-zinc-900/60 p-6 rounded-2xl border border-gray-200/80 dark:border-zinc-800/80 mb-8 shadow-sm">
        <div className="flex justify-between items-center text-xs font-mono uppercase text-gray-400 mb-3">
          <span className="font-semibold tracking-wider text-gray-500 dark:text-gray-400">Distribuição do Ecossistema</span>
          <span className="text-emerald-500">by repo share</span>
        </div>

        {/* Barra Proporcional com Gradientes Distintos */}
        <div className="w-full h-3 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden flex gap-1 p-0.5">
          <div className="h-full bg-gradient-to-r from-amber-600 to-emerald-700 rounded-l-full w-[40%]" title="Java & Backend"></div>
          <div className="h-full bg-gradient-to-r from-[#10B981] to-teal-400 w-[30%]" title="JavaScript & React"></div>
          <div className="h-full bg-sky-500 w-[20%]" title="MySQL & Databases"></div>
          <div className="h-full bg-orange-500 rounded-r-full w-[10%]" title="Docker & Git"></div>
        </div>

        {/* Legenda com Marcadores Coloridos */}
        <div className="flex flex-wrap gap-6 mt-4 text-xs font-mono text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span> Java / Spring 40%</span>
          <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span> JS / React 30%</span>
          <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> MySQL 20%</span>
          <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Docker / Git 10%</span>
        </div>
      </div>

      {/* 3. GRID HORIZONTAL DE 4 COLUNAS (PREENCHE A TELA TODA) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {techList.map((tech, index) => {
          const IconComponent = tech.icon;
          const isReactIcon = typeof IconComponent === 'function' || typeof IconComponent === 'object';
          const hoverClass = brandColors[tech.name] || 'hover:border-[#10B981] hover:shadow-emerald-500/15';

          return (
            <div 
              key={index}
              className={`flex items-center gap-3.5 p-4 bg-white dark:bg-zinc-900/50 rounded-xl border border-gray-200/80 dark:border-zinc-800/80 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-pointer ${hoverClass}`}
            >
              {/* Container do Ícone com Fundo Suave */}
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-zinc-800/80 border border-gray-100 dark:border-zinc-700/50 group-hover:scale-110 transition-transform duration-300">
                {isReactIcon ? (
                  <IconComponent style={{ color: tech.color || '#10B981' }} className="text-xl" />
                ) : (
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                )}
              </div>

              {/* Nome da Tecnologia */}
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
                  {tech.category || 'Stack'}
                </span>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Technologies