import React from 'react';
import Image from 'next/image';

function Bulb() {
  return (
    <div className='absolute duration-75 -left-32 -bottom-10 rotate-12 animate-pulse w-[200px] xl:w-[260px] '>
      <Image
        src={'/bulb.png'}
        alt='Bulb image'
        width={260}
        height={200}
        className='z-0 w-full h-full'
      />
    </div>
  )
}

export default Bulb