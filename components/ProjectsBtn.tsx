import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { HiArrowRight } from 'react-icons/hi2'

function ProjectsBtn() {
  return (
    <div>
      <Link 
        href={'/work'}
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/rounded-text.png'}
          alt='Rounded text'
          width={141}
          height={148}
          className='w-full h-full animate-spin-slow max-w-[141px] max-h-[148px]'
        />
        <HiArrowRight className='absolute text-4xl transition-all duration-300 group-hover:translate-x-2'/>
      </Link>
    </div>
  )
}

export default ProjectsBtn