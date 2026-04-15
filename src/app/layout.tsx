import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import 'swiper/css';  
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "./Components/navbar";
import Header from "./Components/header";

const urbanist = Urbanist({subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Portafolio",
  description: "Mi portafolio personal, donde muestro mis proyectos y habilidades en desarrollo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"bg-white text-dark"}>
          <Navbar />
          <Header />
          {children}
        </body>
    </html>
  );
}
