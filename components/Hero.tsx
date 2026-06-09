"use client";
import SectionWrapper from "@/components/SectionWrapper";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Instagram } from "lucide-react";



export default function Hero() {

  const [time, setTime] = useState("");

useEffect(() => {
  const updateTime = () => {
    const now = new Date();

    const formatted = now.toLocaleString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });

    setTime(formatted);
  };

  updateTime();
  const interval = setInterval(updateTime, 60000);

  return () => clearInterval(interval);
}, []);
  return (
    <SectionWrapper>
      <section className="relative h-screen   text-white flex flex-col justify-center items-center text-center px-6 overflow-hidden">


        {/* 🔥 LOGO */}
       <div className="relative z-20 flex flex-col items-center mb-6">

  <div className="relative w-52 h-52 md:w-62 md:h-62 rounded-full overflow-hidden border border-white/10 shadow-lg">

    <Image
      src="/LOGO.jpeg"
      alt="Logo"
      fill
      className="object-cover"
    />

  </div>

</div>

{/* INSTAGRAM */}
<div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">

  {/* Fecha y hora */}
  <div className="text-sm text-[#f3e7d3]/70 font-bold">
    {time}
  </div>

</div>

  
      <div className="absolute top-6 right-6 z-20 text-right text-sm text-black/70">
        {time}
      </div>

        {/* Contenido */}
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-italict text-white flex items-center justify-center gap-3 mt-4 ">
            <span className="text-pink-500">🍩</span>
            <span className="text-[#c9b6a] font-serif italic underline drop-shadow-[0_0_10px_#ff00ff]">
            L&C
          </span>
            <span>🍭</span>
          </h2>
           <h2 className="text-4xl text-gray-800 font-weight mt-10 underline underline-offset-4  decoration-yellow-500">
              Bienvenidos
            </h2>
            <div className="mx-auto mt-10 text-yellow-500 animate-bounce">
            <FaArrowDown size={50} />
          </div>
           
        </div>

      </section>
    </SectionWrapper>
  );
}