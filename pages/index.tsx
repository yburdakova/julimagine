import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

import { ParticlesContainer, ProjectsBtn, Avatar } from '../components';

function Home() {
  return (
    <div className='h-full bg-primary/60'>
      <ParticlesContainer/>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        {/* Hero text block */}
        <div className='container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left'>
          {/* Title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className="mb-4 md:mb-8 h1"
          >
            Transforming Ideas <br /> Into {' '}
            <span className="text-accent">Reality</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p 
            variants={fadeIn('down', 0.3)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm mx-auto mb-2 md:mb-10 xl:max-w-xl xl:mx-0 xl:mb-16'
          >
            Imagination is the first step towards changing reality, as it is where ideas are born, and with the help of creativity, they transform into living projects. This process promotes development and innovation, altering the face of reality and infusing it with new energy and values.
          </motion.p>
          {/* My Projects button */}
          <div className='relative z-50 flex justify-center xl:hidden'>
            <ProjectsBtn/>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden z-8 xl:flex'
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/*Background image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0"></div>
        
        {/* Avatar */}
        <motion.div 
          variants={fadeIn('up', 0.4)} 
          transition={{ duration: 1, ease:'easeInOut' }}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="w-full h-full max-w-[637px] max-h-[578px] absolute bottom-10 lg:right-[8%]"
        >
          <Avatar/>
        </motion.div>
      </div>
      
    </div>
  )
}

export default Home