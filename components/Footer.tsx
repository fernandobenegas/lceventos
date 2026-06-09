"use client";
import SectionWrapper from "@/components/SectionWrapper";
export default function Footer() {
<div className="h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_20px_#ff00ff]"></div>
  return (
    <SectionWrapper>
    <footer className="bg-[#141414] text-gray-400 py-16 px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Marca */}
        <div>
          <span className="text-[#c9b6a] font-serif italic underline drop-shadow-[0_0_10px_#ff00ff]">
  L&C -Eventos
        </span>
          <p>
            servicio de eventos premium.
            
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-400">Servicios</a></li>
            <li><a href="#" className="hover:text-cyan-400">Lista de precios</a></li>
            <li><a href="#contacto" className="hover:text-green-400">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <p>Rosario, Santa Fe</p>
          <p>WhatsApp: +54 9 341 2167147</p>
          <p>Email:rociovellejos579@gmail.com</p>
        </div>

      </div>

      <div className="text-center mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} Desarrollado por FB. Todos los derechos reservados.
      </div>
    </footer>
    </SectionWrapper>
  );
  
}
