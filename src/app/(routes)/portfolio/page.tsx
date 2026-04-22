import ImageAva3 from "@/app/Components/ImageAva3";
import CircleImage from "@/app/Components/circle-image";
import ContainerPage from "@/app/Components/container";
import Portafolio from "@/app/Components/portafolio";
import TransitionPage from "@/app/Components/transition-page";
import { dataPortfolio } from "@/app/data";
const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage/>
      {/*<ImageAva3/>*/}
     {/* <CircleImage/>*/}

          <div className=" flex flex-col justify-center h-full">

            <h1 className="text-2xl  leading-tight text-center md:text-4xl md:mb-5"> Ultimos <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E0E1DD] via-[#00F2FF] to-[#61DAFB]">trabajos realizados </span></h1>

            <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">

                {dataPortfolio.map((data) => (
                  <Portafolio key={data.id} data={data} />
                ))}

            </div>

          </div>

    </ContainerPage>
  );
}   

export default PortfolioPage;