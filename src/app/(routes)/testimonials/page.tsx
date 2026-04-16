"use client";
import Image from "next/image";
import CircleImage from "@/app/Components/circle-image";
import TransitionPage from "@/app/Components/transition-page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import { dataTestimonials } from "@/app/data";

const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />

       <div className="flex flex-col justify-center h-lvh">
           <CircleImage/>

           <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
            Algunos comentarios de 
            <span className="block font-bold text-secondary">
            nuestros clientes
            </span>
           </h1>

            <div className="flex items-center justify-center">

                 <div>
                    <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                    }}

                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, FreeMode]}
                    className="h-[280px] md:h-[300px] w-[270px] md:w-[550px]  "
                    >

                        {dataTestimonials.map(({ id,name, description,imageUrl}) => (
                            <SwiperSlide key={id}>
                                <Image src={imageUrl} alt={name} width={100} height={100} className="mx-auto rounded-full" />

                                <h4 className="text-center text-">
                                    {name}
                                </h4>

                                <p className="mt-5 text-center  " >
                                    {description}
                                </p>
                            
                            </SwiperSlide>
                        ))}

                    </Swiper>

                 </div>


            </div>


       </div>

    </>
  );
};

export default TestimonialsPage;