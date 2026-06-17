"use client";

import { useState, useEffect } from 'react'; // Agregamos useEffect
import Image from 'next/image';

const Carousel = () => {
  // Rutas a las imágenes en tu carpeta /public/images/
  const images = [
    '/img/caramelo1.png',
    '/img/camelo2.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // --- EFECTO PARA EL AUTOPLAY ---
  useEffect(() => {
    // Configura el intervalo para cambiar de imagen cada 3000ms (3 segundos)
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Función de limpieza: detiene el temporizador si el componente se desmonta
    // Esto es muy importante para evitar problemas de rendimiento en React
    return () => clearInterval(intervalId);
  }, [images.length]); // Se vuelve a crear si cambia la cantidad de imágenes

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-xl group">
      
      {/* Imagen actual */}
      <Image
        src={images[currentIndex]}
        alt={`Mesa Dulce ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-500 ease-in-out"
        priority={currentIndex === 0}
      />

      {/* Botón Anterior */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        aria-label="Imagen anterior"
      >
        &#10094;
      </button>

      {/* Botón Siguiente */}
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        aria-label="Siguiente imagen"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;