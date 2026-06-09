"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const phoneNumber = "543412167147"; // 👈 tu número con código país


const handleWhatsApp = (productName: string) => {
  const message = `Hola! 👋\nQuiero hacer un pedido de: ${productName}\n¿Me pasas disponibilidad?`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

const products = [

  {
    title: "Medialunas rellenas con dulce de leche",
    description: "Horneadas diariamente, textura suave y sabor tradicional 1/2 docena: $3500 | 1 docena: $6500",
    image: "/dulceDeLeche.jpeg",
  },
  {
    title: "Medialunas Rellenas con Jamón & Queso",
    description: "Horneadas diariamente, textura suave y sabor tradicional 1/2 docena: $3500 | 1 docena: $6500",
    image: "/jamonYqueso.jpeg",
  },
  {
    title: "Medialunas Saladas",
    description: "Horneadas diariamente, textura suave y sabor tradicional. 1/2 docena: $2500 | 1 docena: $5000",
    image: "/comunes.jpeg",
  },
  
  {
    title: "Biscochos",
    description: "Crujientes ojaldrados, livianos y perfectos para el mate. 1/2 docena: $2500 | 1 docena: $5000",
    image: "/biscochos.jpeg",
  },
  
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Products() {
  return (
    <SectionWrapper>
      <section className="py-24 px-6  text-[#f3e7d3]">

        {/* TITLE */}
        <h2 className="text-4xl bg-black/10 rounded-lg text-gray-800 font-semibold text-center mb-14  ">
          Tambien contamos estas delicias para acompañar tu desayuno o merienda ☕
        </h2>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="
                bg-[#141414]
                border border-white/10
                rounded-2xl
                overflow-hidden
                shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                transition duration-300
                hover:-translate-y-2
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.75)]
              "
            >
              {/* IMAGE */}
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    w-full h-full object-cover
                    transition duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2 text-[#f3e7d3]">
                  {product.title}
                </h3>

                <p className="text-[#f3e7d3]/60 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <button
  onClick={() => handleWhatsApp(product.title)}
  className="
    inline-block px-5 py-2 text-sm
    border border-[#25D366]/50
    text-[#white]
    rounded-full
    hover:bg-[#25D366]
    hover:text-black
    transition
  "
>
  Hablar por WhatsApp →
</button>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </SectionWrapper>
  );
}