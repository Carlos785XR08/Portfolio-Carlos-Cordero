"use client"
import Image from "next/image";
const CircleImage = () => { 

return (

    <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
       <Image src="/images/" width={300} height={300} alt="circle" className="w-full h-full"/> 

    </div>

);
}

export default CircleImage;