import { Briefcase, Layers, Code, Phone, Mail,  Github, BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { title } from "process";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const socialNetworks = [
    {
        id: 1,
        logo: <FaGithub size={30} strokeWidth={1} />,
        src: "https://github.com/Carlos785XR08",
    },
    {
        id: 2,
        logo: <FaLinkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/carlos-cordero-núñez-6541b5293",
    },
    {
        id: 3,
        logo: <FaEnvelope size={30} strokeWidth={1} />,
        src: "mailto:carloscordero4554@outlook.com",
    },
    {
        id: 4,
        logo: <FaWhatsapp size={30} strokeWidth={1} />,
        src: "https://wa.me/5215565315567",
    },
    
];




export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Code",
        icon: <Code size={25} color="#fff" strokeWidth={1} />,
        link: "/skills",
    },


    {
        id: 4,
        title: "Layers",
        icon: <Layers size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
   
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Web / Marketing",
        subtitle: "Cimbramex",
        description:  "Colaboración en diseño en Figma y desarrollo de sitio web  en WordPresss. con personalizaciones de HTML, CSS, JS y Apoyo en mantenimiento y mejoras de sitio Web existente. ",  
        date: "sep. 2025 - mar. 2026 " ,
    },
    {
        id: 2,
        title: "Analista Jr",
        subtitle: "Financiera. Broxel",
        description: "Colaboré en el análisis y manipulación de datos (CSV, Excel, bases de datos), creando scripts para filtrado, limpieza y unión, utilizando Google Colab, Python, SQL y Pandas y Apoyé en el desarrollo de un sistema en C# para el envío de información a la CNBV.",
        date: "Mar. 2025 - Jun. 2025",
    },
    {
        id: 3,
        title: "Desarrollo de Software",
        subtitle: "CFE Telecomunicaciones e internet para todos",
        description: " Participé en la creación de capas para coberturas con QGIS y Mapshaper, Colaboré en desarrollo web con HTML5, CSS3, JavaScript y React Js, Optimicé procesos y estandaricé diagramas de flujo en Bizagi Modeler ",
        date: "Ene. 2024 - Ene. 2025",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Data & Scripts",
        description: "Automatización y análisis de datos con Python.",
    },
    {
        icon: <Pencil />,
        title: "Diseño web UI/UX",
        description: " Diseño de interfaces claras, accesibles y centradas en el usuario.",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Software",
        description: "Soluciones con Java y Python.",
    },
    {
        icon: <Rocket />,
        title: "Desarrollo de Software",
        description: "Desarrollo de soluciones integrando análisis geoespacial, y optimización de procesos mediante modelado en Bizagi Modeler. ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Huerto Feliz",
        image: "/images/Huerto.jpg",
        urlGithub: "https://carlos785xr08.github.io/Huerto_Feliz.github.io/",
        urlDemo: "#!",
         description:
      "Sitio web para proyecto de huertos urbanos, diseñado para escalar e implementarse en México. ",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/images/Huerto.jpg",
        urlGithub: "https://www.figma.com/proto/bl8Yml34HzjLdERnlI72IX/Sin-t%C3%ADtulo?node-id=1-3719&t=9tPsasguMRUsqWPc-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        urlDemo: "",
        technologies: ["FIGMA", ]
    },
   /* {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },*/
   
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];