import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination } from 'swiper';


import 'swiper/css';
import 'swiper/css/pagination';

import {FaQuoteLeft} from 'react-icons/fa'

import { testimonialData } from '../constants';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
        
      }}
      modules={[ Pagination]}
      className='h-[400px] '
    >
      {testimonialData.map((person, index) => {
        return <SwiperSlide key={index}>
          <div className="flex flex-col items-center h-full md:flex-row gap-x-8">
            {/* personal data: avatar, name */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mx-auto mb-2">
                  <Image 
                    src={person.image} 
                    alt='Customer avatar'
                    width={100}
                    height={100}
                    className='rounded-full'
                  />
                </div>
                <div className="text-lg">{person.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                
              </div>
            </div>
            <div className="flex flex-col justify-center flex-1 before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 xl:rounded-r-xl">
              <div className="mb-4 ">
                <FaQuoteLeft className='mx-auto text-4xl md:mx-0 xl:text-6xl text-white/20'/>
              </div>
              <div className="text-center xl:text-lg md:text-left">{person.message}</div>
            </div>
            </div>
          
        </SwiperSlide>
      })}
    </Swiper>

)};

export default TestimonialSlider;


