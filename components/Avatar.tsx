import React from 'react'
import Image from 'next/image'

function Avatar() {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
        src={'/avatar.png'}
        alt='Avatar'
        width={737}
        height={678}
        className='w-full h-full translate-z-0'
      />
    </div>
  )
}

export default Avatar