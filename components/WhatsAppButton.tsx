"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const phone = "5493412167147"; // ← PONÉ TU NÚMERO REAL
  const message = "Hola L&C -Eventos, me interesa tu servicio de eventos. ¿Podemos hablar?"; // ← MENSAJE PREDEFINIDO

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-[0_0_25px_#22c55e] hover:scale-110 transition z-50"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width={28}
        height={28}
      />
    </a>
  );
}