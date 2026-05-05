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
    description?: string; // 🔥 NUEVO
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
  const { title, image, urlGithub, urlDemo, technologies, description } = data;

  return (
    <div className="p-5 rounded-2xl transition-all duration-300 bg-[#080808] border-2 border-[#00F2FF]/30 hover:border-[#61DAFB] hover:shadow-[0_0_20px_rgba(97,218,251,0.2)]">

      {/* TITLE */}
      <h3 className="mb-4 text-xl text-white font-semibold text-center">
        {title}
      </h3>

      {/* IMAGE */}
      <Image
        src={image}
        alt="image product"
        width={200}
        height={200}
        className="w-full max-w-[250px] max-h-[250px] mx-auto rounded-xl object-cover"
      />

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-slate-600 hover:bg-slate-500 text-white transition"
        >
          <FaGithub />
          Github
        </Link>

        <Link
          href={urlDemo}
          target="_blank"
          className="flex items-center gap-2 px-2 py-2 text-sm rounded-lg bg-[#61DAFB] text-black font-medium hover:bg-[#61DAFB]/80 transition"
        >
          🚀 Demo
        </Link>
      </div>

      {/* 🔥 DESCRIPCIÓN (NUEVO) */}
      {description && (
        <p className="mt-4 text-center text-[12px] sm:text-sm text-gray-300 leading-relaxed break-all px-2">
          {description}
        </p>
      )}

      {/* TECNOLOGÍAS */}
      {technologies?.length ? (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-2 px-4 py-1 text-xs font-medium text-white rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition"
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