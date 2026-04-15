"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { serviceData } from "../data";

const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]} className="h-[300px] md:h-[340px] w-[270px] md:w-[550px]"
    >
        {serviceData.map((item, index) => (
            <SwiperSlide key={index} >
               <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer  bg-gradient-to-r  sm:flex-col gap-x-6 sm:gap-x-0 group transition-all hover:from-blue-600  duration-300 border-2  hover:border-blue-500  border-cyan-500 ">

                <div className=" mb-4 text-4xl text-white">{item.icon}</div>

                 

                <div>
                    <h3 className="mb-4 text-lg ">
                        {item.title}
                        
                    </h3>

                    <p className="text-sm" >
                            {item.description}
                        </p>
                </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default SliderServices; 