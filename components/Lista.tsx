"use client";
import { GiDonut } from "react-icons/gi";
import {
  Candy,
  PartyPopper,
  Truck,
  Clock3,
  MapPin,
  CreditCard,
  Gift,
} from "lucide-react";


export default function Lista() {
  return (
    <section  className=" relative  max-w-4xl mx-auto py-10 px-4  ] bg-no-repeat bg-center bg-cover">
          <h2 className="text-3xl font-semibold text-center text-violet-800 mb-4 underline underline-offset-8 decoration-[#d4af37]">
            Un rincon lleno de magia y sabor ✨
          </h2>

     
      {/* 📱 PRICE CARD MOBILE */}
      <div className=" bg-black/60 backdrop-blur-xl text-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(212,175,55,0.15)]">

      <h3 className="text-[#f5e6c8] text-xl font-semibold text-center mb-6">
        ✨ ¿Qué incluye nuestro stand?
      </h3>
<hr className="border-1 border-white/10 my-4" />
      <div className="space-y-4 text-[#e8cfae]">
      <h3 className="text-[#d4af37] font-bold"> Stand 1: Gomitas Premium</h3>
        <div className="flex gap-3 items-start">
          
          <Candy className="text-[#d4af37] mt-1" size={20} />
          
          <p>Amplia variedad de gomitas  premium para elegir y disfrutar.</p>
        </div>

        <h3 className="text-[#d4af37] font-bold"> Stand 2: Mini Donas</h3>
        <div className="flex gap-3 items-start">
        <div className="text-[#d4af37] mt-1">
          <GiDonut size={20} />
        </div>
        <p>Mini donas glaseadas y deliciosas para todos los gustos.</p>
      </div>
      <hr className="border-1 border-white/10 my-4" />
        <div className="flex gap-3 items-start">
          <PartyPopper className="text-[#d4af37] mt-1" size={20} />
          <p> <strong> IDEAL </strong> para cumpleaños, fiestas infantiles, 15 años y eventos especiales.</p>
        </div>

        <div className="flex gap-3 items-start">
          <Gift className="text-[#d4af37] mt-1" size={20} />
          <p>Armado y atención personalizada durante todo el servicio.</p>
        </div>

        <div className="flex gap-3 items-start">
          <Truck className="text-[#d4af37] mt-1" size={20} />
          <p>Carrito desmontable y adaptable a cualquier espacio.</p>
        </div>

        <div className="flex gap-3 items-start">
          <Clock3 className="text-[#d4af37] mt-1" size={20} />
          <p>Duración estimada: 45 minutos o hasta agotar el stock contratado.</p>
        </div>

        <div className="flex gap-3 items-start">
          <MapPin className="text-[#d4af37] mt-1" size={20} />
          <p>
            El valor final puede variar según la cantidad de invitados,
            distancia del evento y requerimientos especiales.
          </p>
        </div>

        <div className="flex gap-3 items-start">
          <CreditCard className="text-[#d4af37] mt-1" size={20} />
          <p>
            Reserva de fecha con una seña del 50%.
            Aceptamos efectivo y transferencia.
          </p>
        </div>

      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="text-center text-[#f5e6c8] italic">
          🍬 Las gomitas sobrantes se entregan al cliente al finalizar el evento.
        </p>
      </div>

    </div>
    </section>
  );
}