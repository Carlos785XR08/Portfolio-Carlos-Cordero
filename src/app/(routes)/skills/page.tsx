import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaEnvelope,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiFigma,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";

import { MdEmail } from "react-icons/md"; // Outlook alternativa

import ImagenAva2 from "@/app/Components/imagenAva2";
import CircleImage from "@/app/Components/circle-image";
import TransitionPage from "@/app/Components/transition-page";
import SliderServices from "@/app/Components/slider-services";

const skillsPage = () => {

  // 🔥 ARRAY DE TECNOLOGÍAS
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },

    // 🔥 EXTRA
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-500" /> },
   
  ];

  return (
    <>
      <TransitionPage />

      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">

        <div className="max-w-[450px] mt-30 md:mt-0">
          {/*<h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            {" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              
            </span>
          </h1>

          <p className="mb-3 text-xl text-blue-300">
           </p>*/}

          {/*<button className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold hover:from-blue-600 hover:to-blue-600 transition-colors duration-300">
            
          </button>*/}

          {/* 🔥 TECNOLOGÍAS */}
          <div className="mt-6">
            <h3 className=" mb-6  text-2xl text-center font-semibold text-white">
              Tecnologías
            </h3>

            <div className="flex flex-wrap gap-6 justify-center ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* ICONO */}
                  <div className="text-3xl transition-all duration-300 group-hover:scale-125">
                    {skill.icon}
                  </div>

                  {/* TEXTO SIEMPRE VISIBLE */}
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default skillsPage;