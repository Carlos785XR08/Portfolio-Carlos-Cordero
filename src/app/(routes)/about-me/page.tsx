import Avatar from "@/app/Components/imagenAva";
import ContainerPage from "@/app/Components/container";
import TransitionPage from "@/app/Components/transition-page";
import CounterServices from "@/app/Components/counter-services";
import TimeLine from "@/app/Components/time-line";

const PageAboutMe = () => {
  return (
    <>
     <TransitionPage/>
     
    <ContainerPage>
        {/*<Avatar/>*/}
        <h1 className="text-2xl leadingg-tight text-center md:text-left md:text-5xl md:mt-10">
            toda mi {''}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                trayectoria profesional
            </span>
        </h1>
        <CounterServices/>
        <TimeLine/>
        </ContainerPage>  
    </>
  );
};

export default PageAboutMe;