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
    modules={[Pagination]} className="h-[300px] md:h-[320px] w-[270px] md:w-[550px]"
    >
        {serviceData.map((item, index) => (
            <SwiperSlide key={index} >
               <div className="flex flex-col px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer transition-all duration-300 group
    /* Fondo y Borde con tus colores de marca */
    bg-[#080808] border-2 border-[#00F2FF]/30 hover:border-[#61DAFB] 
    /* Efecto de resplandor sutil */
    hover:shadow-[0_0_20px_rgba(97,218,251,0.2)] ">

                <div className=" mb-4 text-4xl text-white transition-colors duration-300 group-hover:text-[#00F2FF]">{item.icon}</div>

                 

                <div>
                    <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E0E1DD] via-[#00F2FF] to-[#61DAFB] ">
                        {item.title}
                        
                    </h3>

                    <p className="text-sm " >
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