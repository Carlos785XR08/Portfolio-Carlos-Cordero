import ImagenAva2 from "@/app/Components/imagenAva2";
import CircleImage from "@/app/Components/circle-image";
import TransitionPage from "@/app/Components/transition-page";
import SliderServices from "@/app/Components/slider-services";
const servicesPage = () => {
  return (
    
    <>
    <TransitionPage/>
    <CircleImage/>
    <ImagenAva2/>
      
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">

        <div className="max-w-[450px] mt-30 md:mt-0">
              <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">

                Mis {''}

                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500" > 
                 servicios
                </span>
                 </h1>
                <p className="mb-3 text-xl text-blue-300">
                  Ofrezco servicios de desarrollo web, diseño gráfico y marketing digital para ayudarte a alcanzar tus objetivos en línea.
                </p>

                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold hover:from-blue-600 hover:to-blue-600 transition-colors duration-300">
                  Contacta conmigo
                </button>

              
        </div>
{/* SLIDER */}
        <div>
        <SliderServices/>
        </div>

      </div>

    </>
    );
}

export default servicesPage;