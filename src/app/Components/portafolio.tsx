"use client";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";
import { ReactNode } from "react";

interface PortafolioProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    technologies?: string[];
  };
}

const iconMap: Record<string, ReactNode> = {
  react: <FaReact />,
  next: <SiNextdotjs />,
  typescript: <SiTypescript />,
  tailwind: <SiTailwindcss />,
  node: <FaNodeJs />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  javascript: <SiJavascript />,
};

const Portafolio = ({ data }: PortafolioProps) => {
  const { title, image, urlGithub, urlDemo, technologies } = data;

  return (
    <div className="p-5 border border-teal-50/20 rounded-2xl bg-[#020617]/60 backdrop-blur-md hover:scale-[1.02] transition-all duration-300">
      
      {/* TITLE */}
      <h3 className="mb-4 text-xl text-white font-semibold">
        {title}
      </h3>

      {/* IMAGE */}
      <Image
        src={image}
        alt="image product"
        width={200}
        height={200}
        className="w-full max-w-[150px] mx-auto rounded-xl object-cover "
      />

      

      {/* BUTTONS */}
      <div className="flex gap-4 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 text-sm transition rounded-lg bg-slate-600 hover:bg-slate-600/80"
        >
          <FaGithub />
          Github
        </Link>

        <Link
          href={urlDemo}
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 text-sm transition rounded-lg bg-[#61DAFB] text-black font-medium hover:bg-[#61DAFB]/80"
        >
          🚀 Demo
        </Link>
        
      </div>
      {/* 🔥 BADGES DE TECNOLOGÍAS (texto + icono) */}
      {technologies?.length ? (
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-white rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition"
            >
              {iconMap[tech.toLowerCase()] ?? "⚡"}
              {tech}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Portafolio;