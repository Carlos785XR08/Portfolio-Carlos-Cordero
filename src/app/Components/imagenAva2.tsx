import Image from "next/image";
import MotionTransition from "./transition-component";

const ImagenAva2 = () => {
  return (
    <MotionTransition position="right" className="bottom-0 left-0 hidden md:inline-block md:absolute">
        <Image src="/images/" width={300} height={300}  className="w-[350px] h-full" alt="circle"/>
    </MotionTransition>
  );
};

export default ImagenAva2;