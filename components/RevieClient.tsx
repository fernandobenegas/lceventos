"use client";

import React, { useEffect, useState } from "react";
import {
  Donut,
  Cake,
  CandyCane,
} from "lucide-react";

const icons = {
  Donut,
  Cake,
  CandyCane,
};

type Product = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  icon?: keyof typeof icons;
};

export default function ProductosClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await fetch("/api/revie?type=products").then((r) =>
        r.json()
      );

      setProducts(data);
    } catch (error) {
      console.error("Error cargando productos:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-violet-700">
          Nuestros Productos
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-medium">
          Descubrí nuestra selección de productos cuidadosamente preparados
          para eventos, cumpleaños y celebraciones especiales.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">
          Cargando productos...
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon
              ? icons[product.icon]
              : null;

            return (
              <article
                key={product.id}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover"
                  />
                ) : (
                  <div className="w-full h-72 bg-gray-100 flex items-center justify-center text-gray-400">
                    Imagen no disponible
                  </div>
                )}

                <div className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    {Icon && (
                      <Icon
                        size={34}
                        className="text-violet-600 mb-3"
                      />
                    )}

                    <h2 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h2>
                  </div>

                  <div className="w-16 h-1 bg-violet-600 rounded-full mx-auto mb-4" />

                  <p className="text-gray-700 leading-relaxed text-center">
                    {product.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}