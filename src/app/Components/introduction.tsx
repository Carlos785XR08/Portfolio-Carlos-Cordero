"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="w-full bg-darkBg/60">
      <div className="grid items-center min-h-screen p-6 py-20 md:grid-cols-2 md:py-0">
        
        {/* 🖼️ Imagen */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0 md:pr-10 lg:pr-50">
          <div className="
            rounded-full 
            overflow-hidden 
            w-28 h-28 
            sm:w-36 sm:h-36 
            md:w-44 md:h-44 
            lg:w-52 lg:h-52
            shadow-xl
          ">
            <Image
              src="/images/Car.jpg"
              alt="profile pic"
              width={1024}
              height={1024}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* 🧠 Texto */}
        <div className="flex flex-col justify-center items-center md:items-start max-w-xl mx-auto md:mx-0 text-center md:text-left">
          
          <h1 className="mb-5 text-2xl leading-tight md:text-4xl md:mb-8">
            Todo empieza con una idea, <br />
            <TypeAnimation
              sequence={[
                "se transforma en código",
                1000,
                "evoluciona en producto",
                1000,
                "y genera impacto real",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold  text-blue-500 "
            />
          </h1>

          <p className="mb-6 text-base md:text-lg">
            Desarrollador Web con experiencia en la creación e implementación de soluciones digitales, desde el diseño hasta el despliegue en producción. Enfocado en el desarrollo de interfaces modernas y eficientes, con especialización en frontend y conocimientos en backend.
.
          </p>

          {/* 🔘 Botones */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            
            <Link
              href="/portfolio"
              className="px-4 py-2 border-2 rounded-xl hover:shadow-xl hover:shadow-white/50 transition-all"
            >
              Ver Proyectos
            </Link>

            

            <a
              href="/CV_Carlos_Arturo_Cordero_Núñez.pdf"
              download
              className="px-4 py-2 border-2 rounded-xl hover:shadow-xl hover:shadow-white/50 transition-all"
            >
              Descargar CV
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Introduction;