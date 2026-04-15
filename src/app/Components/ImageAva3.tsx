"use client";
import React from "react";
import Image from "next/image";
import MotionTransition from "./transition-component";
const ImageAva3 = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 left-0 hidden md:inline-block md:absolute">    
        
       <Image src="/assets/ava3.png" width={300} height={300} className="w-full h-full" alt="ava3" />
    </MotionTransition>
  );
}   
export default ImageAva3; 
        