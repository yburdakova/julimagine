import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

import { ParticlesContainer, ProjectsBtn, Avatar } from '../components';

function Home() {
  return (
    <div className='h-full bg-primary/60'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left'>
          <h1 className="h1">
            Transforming Ideas <br /> Intro {' '}
            <span className="text-accent">Digital Reality</span>
          </h1>
          <p className='max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eligendi at asperiores corrupti, dolore aut quos magnam, quas similique natus ipsum aliquam neque obcaecati placeat nisi veniam quae sed quibusdam.
          </p>
          <div className='relative flex justify-center xl:hidden'>
            <ProjectsBtn/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home