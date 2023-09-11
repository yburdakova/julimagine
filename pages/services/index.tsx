import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
import { ServiceSlider, Bulb, Circles } from '../../components';

function Services() {
  return (
    <div className='z-10 flex items-center h-full bg-primary/30 py-36'>
      <Circles/>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="flex text-center xl:w-[38vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 
              className="h2 xl:mt-8"
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur non id soluta nemo neque dolores, fuga quas tempora quis officia aliquam deserunt in et dolorum sed quisquam nostrum aperiam!</motion.p>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider/>
          </motion.div>
          
        </div>
      </div>
      <Bulb/>
      
    </div>
  )
}

export default Services
