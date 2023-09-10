import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
import { serviceData } from '../../constants';
import { ServiceSlider, Bulb, Circles } from '../../components';

function Services() {
  return (
    <div className='flex items-center h-full bg-primary/30 py-36'>
      <Circles/>
      <div className="container mx-auto"></div>
      <Bulb/>
    </div>
  )
}

export default Services
