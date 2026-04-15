"use client"

import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
  return ( 
     <div className="z-20 w-full bg-darkBg/60">
      <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'  >
         {/*<Image src="/home-4.png" priority width="800" height="800" alt="profile pic" />*/}
      <div className="flex flex-col justify-center items-center max-w-md mx-auto md:col-span-2">
        <h1 className="  mb-5 text-2xl leading-tight text-center md:text-center md:text-4xl md:mb-10">
            Si puedes pensarlo, <br/>
            <TypeAnimation
            sequence={[
              "puedes programarlo",
              1000,
               "puedes optimizarlo",
              1000,
              "puedes implementarlo",
              1000,
              "puedes desarrollarlo",
              1000,

            ]} 
            
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className=" font-bold text-blue-500"
            />
        </h1>

          <p className='mx-auto mb-2 text-xl  md:mx-0 md:mb-8 text-center justify-center '> 
            Como desarrollador frontend y creador de contenido, me apasiona compartir mis conocimientos y ayudar a otros a crecer en el mundo del desarrollo web. En este espacio encontrarás tutoriales, consejos y recursos para mejorar tus habilidades en frontend y más allá.  
          </p> 

          <div className ='flex intem-center justify-center gap-3 md:justify-start md:gap-10'>
           <Link href="/portfolio" className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
             Ver Proyectos
           </Link>

          
             <a
              href="/CV_Carlos_Arturo_Cordero_Núñez.pdf"
              download
               className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
               >
                 Descargar CV
               </a>
          </div>

      </div>

      </div>
        
     </div>

  );
}

export default Introduction;