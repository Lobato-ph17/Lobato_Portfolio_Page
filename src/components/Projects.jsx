import React from 'react'
import { workData } from '../assets/assets'

const Projects = () => {
  return (
    <section id='our-work' className='py-20 px-4 sm:px-12 lg:px-24 xl:px-40 max-w-7xl mx-auto flex flex-col items-center text-center'>
      
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-medium mb-12 text-gray-800 dark:text-white'>
        Meus <span className='bg-gradient-to-r from-[#064E3B] to-[#10B981] bg-clip-text text-transparent'>Projetos</span>
      </h2>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl'>
        {workData.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='relative block h-[420px] rounded-3xl overflow-hidden group cursor-pointer border border-gray-200/50 dark:border-gray-800 shadow-lg'
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
            />

            <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300' />

            <div className='absolute inset-0 flex items-center justify-center p-4'>
              <div className='px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-300'>
                <h3 className='text-2xl sm:text-3xl font-bold text-white tracking-wider'>
                  {project.title}
                </h3>
              </div>
            </div>

            <div className='absolute bottom-6 left-6 right-6 flex justify-between items-center z-10'>
              <span className='px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-white uppercase tracking-wider'>
                {project.category}
              </span>
              <span className='text-sm font-semibold text-white/90 drop-shadow'>
                {project.year}
              </span>
            </div>

          </a>
        ))}
      </div>

    </section>
  )
}

export default Projects