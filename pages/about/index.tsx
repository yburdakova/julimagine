import React, { useState } from 'react'
import { Avatar, Circles } from '../../components';
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
import { aboutData } from '../../constants';
import { log } from 'console';

const About = () => {

  const [index, setIndex] = useState(0);
  console.log(index);
  

  return (
    <div className='h-full py-32 text-center bg-primary/30 xl:text-left'>
      <Circles/>
      <motion.div 
        className="absolute bottom-0 hidden xl:flex -left-[370px]"
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <Avatar/>
      </motion.div>
      <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6">
        <div className="flex flex-col justify-center flex-1">Text</div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex mx-auto mb-4 gap-x-4 xl:gap-x-8 xl:mx-0">
            {aboutData.map(( item, indexItem ) => {
              return (
                <div 
                  key={indexItem}
                  className={`${index === indexItem && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} relative capitalize cursor-pointer xl:text-lg after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={()=> setIndex(indexItem)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="flex flex-col items-center py-2 xl:py-6 gap-y-2 xl:gap-y-4 xl:items-start">
            {aboutData[index].info.map(( item, indexItem) => {
              return(
                <div key={indexItem} className='flex flex-col items-center flex-1 text-white/60 md:flex-row max-w-max gap-x-2'>
                  <div className='mb-2 font-light md:mb-0'>{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map(( icon, indexItem ) => {
                      return <div className="text-2xl text-white" key={indexItem}>{React.createElement(icon)}</div>
                    })}
                  </div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
