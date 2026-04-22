import Image from "next/image";
import Link from "next/link";
interface PortafolioProps {
    data: {
        id: number,
        title: string,
        image: string, 
        urlGithub: string,
        urlDemo: string
}
}

const Portafolio = (props: PortafolioProps) => {
  const { data } = props;
  const {id, title, image, urlGithub, urlDemo } = data;
    return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl">
        {title}</h3>

        <Image src={image} alt="image product" width={200} height={200} className="w-full md:w-[125px] rounded-2xl h-auto" />

        <div className="flex gap-5 mt-5">
              <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 ">
              Github</Link>
              <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-[#61DAFB] hover:bg-[#61DAFB]/80">
              Demo</Link>
        </div>
        

    </div>
  );
};

export default Portafolio;