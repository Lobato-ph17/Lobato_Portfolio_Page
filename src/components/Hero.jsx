import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
        
        <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
            <img className='w-12' src={assets.group_profile} alt="" />
            <p className='text-xs font-medium'>Trusted by 10k+ people</p>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[75px] font-medium xl:leading-[90px] max-w-5xl'>Construindo Aplicações Escaláveis e de <span className='bg-gradient-to-r from-[#064E3B] to-[#10B981] bg-clip-text text-transparent'>Alta Performance</span></h1>

        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
          Focado em construir interfaces modernas e sistemas robustos. Procuro entregar experiências únicas para o usuário.
        </p>

        <div className='relative'>
            <img src={assets.hero_image} alt="" className='w-full max-w-6xl rounded-3xl'/>
            <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>
        </div>

    </div>
  )
}

export default Hero
