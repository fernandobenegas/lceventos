"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [
    "/img/caramelo1.png",
    "/img/camelo2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="
        relative
        w-full
        max-w-4xl
        mx-auto
        overflow-hidden
        rounded-xl
        md:rounded-2xl
        shadow-xl
        group
        aspect-[4/5]
        sm:aspect-[4/3]
        md:aspect-[16/9]
      "
    >
      <Image
        src={images[currentIndex]}
        alt={`Mesa Dulce ${currentIndex + 1}`}
        fill
        priority={currentIndex === 0}
        className="object-cover transition-opacity duration-500"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
      />

      {/* Botón anterior */}
      <button
        onClick={prevSlide}
        aria-label="Imagen anterior"
        className="
          absolute
          left-2 md:left-4
          top-1/2
          -translate-y-1/2
          bg-black/40
          hover:bg-black/60
          text-white
          w-9 h-9
          md:w-12 md:h-12
          rounded-full
          flex items-center justify-center
          z-10
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
          transition-all duration-300
        "
      >
        &#10094;
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        aria-label="Siguiente imagen"
        className="
          absolute
          right-2 md:right-4
          top-1/2
          -translate-y-1/2
          bg-black/40
          hover:bg-black/60
          text-white
          w-9 h-9
          md:w-12 md:h-12
          rounded-full
          flex items-center justify-center
          z-10
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
          transition-all duration-300
        "
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 md:bottom-4 left-0 right-0 flex justify-center gap-2 md:gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125 h-3 w-3"
                : "bg-white/50 hover:bg-white/80 h-3 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;