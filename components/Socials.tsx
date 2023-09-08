import Link from 'next/link'
import React from 'react'
import { RiDiscordLine, RiInstagramLine, RiRedditLine, RiPinterestLine, RiTwitterXLine, RiSnapchatLine } from "react-icons/ri";

function Socials() {
  return (
    <div className='flex items-center text-xl gap-x-5'>
      <Link href={''} className='transition-all duration-300 hover:text-accent'>
        <RiDiscordLine/>
      </Link>
      <Link href={''} className='transition-all duration-300 hover:text-accent'>
        <RiInstagramLine/>
      </Link>
      <Link href={''} className='transition-all duration-300 hover:text-accent'>
        <RiRedditLine/>
      </Link>
      <Link href={''} className='transition-all duration-300 hover:text-accent'>
        <RiPinterestLine/>
      </Link>
      <Link href={''} className='transition-all duration-300 hover:text-accent'>
        <RiTwitterXLine/>
      </Link>
      <Link href={''} className='transition-all duration-300 hover:text-accent'>
        <RiSnapchatLine/>
      </Link>
    </div>
  )
}

export default Socials