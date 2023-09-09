import React, { useState } from 'react'
import { Avatar, Circles } from '../../components';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

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
        className="w-full h-full max-w-[637px] max-h-[578px] absolute bottom-0 hidden xl:flex -left-[320px]"
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <Avatar/>
      </motion.div>
      <div className="container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex flex-col justify-center flex-1 my-6 sm:my-0 ">
          <motion.h2 
            className="h2"
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Captiavating <span className="text-accent">stories</span> birth magnificent design
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden sm:block max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
          Behind every magnificent design or illustration, there is a captivating story of inspiration and creativity, crafted in collaboration between the artist and the client.
          </motion.p>
          {/* Counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden mx-auto my-4 md:flex md:max-w-xl xl:max-w-none xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp
                    start={0}
                    end={3}   
                    duration={5}                 
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp
                    start={0}
                    end={18}   
                    duration={5}                 
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp
                    start={0}
                    end={35}   
                    duration={5}                 
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
              </div>
              {/* Awards */}
              <div className="relative flex-1 ">
                <div className="mb-2 text-2xl font-extrabold xl:text-4xl text-accent">
                  <CountUp
                    start={0}
                    end={2}   
                    duration={5}                 
                  /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info from variables */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] text-sm sm:text-lg"
        >
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
          <div 
            className="flex flex-col items-center py-2 xl:py-6 gap-y-2 xl:gap-y-4 xl:items-start"
          >
            {aboutData[index].info.map(( item, indexItem) => {
              return(
                <div key={indexItem} className='flex flex-col items-center flex-1 text-xs text-white/60 md:flex-row max-w-max gap-x-2 sm:text-lg'>
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
        </motion.div>
      </div>
    </div>
  )
};

export default About;
