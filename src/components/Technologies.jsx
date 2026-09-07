import React from 'react'
import { techList } from '../assets/assets'

const Technologies = () => {
  return (
    <section id='Tecnologias' className='py-16 px-4 sm:px-12 lg:px-24 xl:px-40 max-w-7xl mx-auto flex flex-col items-center text-center'>

      <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium mb-12 text-gray-800 dark:text-white'>
        Minhas <span className='bg-gradient-to-r from-[#064E3B] to-[#10B981] bg-clip-text text-transparent'>Ferramentas</span>
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-5xl justify-center'>
        {techList.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div 
              key={index} 
              className='flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200/60 dark:border-gray-700/60 rounded-2xl hover:scale-105 hover:border-[#10B981] transition-all duration-300 shadow-sm cursor-pointer'
            >
              <IconComponent className='text-4xl mb-3' style={{ color: tech.color }} />
              <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>{tech.name}</span>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Technologies;