"use client";

import Image from "next/image";
import MotionTransition from "./transition-component"; 
const ImagenAva = () => {
  return (
    <MotionTransition position="bottom" className=" bottom-0 right-0 hidden md:inline-block md:absolute" > 
      <div className="relative w-50 h-50 overflow-hidden rounded-full">
        <Image
          src="/images/code.jpg"
          fill
          className="object-cover"
          alt="avatar"
        />
      </div>
    </MotionTransition>
  );
};

export default ImagenAva;