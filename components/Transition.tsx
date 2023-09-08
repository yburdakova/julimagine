import React from 'react'
import { motion } from 'framer-motion';

import { transirionVariants } from '../constants';

function Transition() {
  return (
    <>
      <motion.div
        className='fixed bottom-0 z-30 w-screen h-screen topp-0 right-full bg-[#2e2257]'
        variants={transirionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay:0.1, duration:0.6, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div
        className='fixed bottom-0 z-20 w-screen h-screen topp-0 right-full bg-[#3b2d71]'
        variants={transirionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay:0.2, duration:0.6, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div
        className='fixed bottom-0 z-10 w-screen h-screen topp-0 right-full bg-[#4b3792]'
        variants={transirionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{delay:0.3, duration:0.6, ease: 'easeInOut'}}
      ></motion.div>
    </>
    
  )
}

export default Transition