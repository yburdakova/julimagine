import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {RxCrop, RxDesktop, RxPencil2, RxRocket, RxArrowTopRight} from 'react-icons/rx'

import { serviceData } from '../constants';

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView:1,
          spaceBetween:15,
        },

        640: {
          slidesPerView:3,
          spaceBetween:15,
        },
        
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240ppx] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="mb-4 text-4xl text-accent">
              {React.createElement(item.icon)}
            </div>
            {/* text */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className='transition-all duration-300 group-hover:rotate-45 group-hover:text-accent'
              />
            </div>
          </div>
        </SwiperSlide>
      })}
    </Swiper>

)};

export default ServiceSlider;

