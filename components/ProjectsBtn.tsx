import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { HiArrowRight } from 'react-icons/hi2'

function ProjectsBtn() {
  return (
    <div>
      <Link 
        href={'/work'}
        className='relative w-[100px] h-[100px] md:w-[185px] md:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/rounded-text1.png'}
          alt='Rounded text'
          width={141}
          height={148}
          className='w-full h-full animate-spin-slow max-w-[80px] max-h-[80px] md:max-w-[141px] md:max-h-[148px] '
        />
        <HiArrowRight className='absolute text-2xl duration-300 md:text-4xl transiti on-all group-hover:translate-x-2'/>
      </Link>
    </div>
  )
}

export default ProjectsBtn