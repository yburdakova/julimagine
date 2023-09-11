import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import {BsArrowRight} from 'react-icons/bs'

import { workSlides } from '../constants';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280ppx] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => {
              return <div key={index} className='relative flex items-center justify-center overflow-hidden rounded-lg group'>
                <div className="relative flex items-center justify-center overflow-hidden group">
                  <Image 
                    src={image.path} 
                    alt='Project Image'
                    width={500}
                    height={300}
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4A22DB] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 transition-all duration-300 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="uppercase delay-100">Live</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 uppercase">Project</div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight/>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            })}
          </div>
          
        </SwiperSlide>
      })}
    </Swiper>

)};

export default WorkSlider;


