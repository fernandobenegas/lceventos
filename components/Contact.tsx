"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Mensaje enviado correctamente ✔");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("Error al enviar el mensaje");
      }
    } catch {
      setSuccess("Error de conexión");
    }

    setLoading(false);
  };

  return (
    <section
      id="contacto"
      className="text-[#f3e7d3] py-24 px-6"
    >
      {/* TITLE */}
      <h2 className="text-4xl italic text-center mb-10 tracking-wide text-gray-800 font-semibold">
        Dejanos tu consulta
      </h2>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-5"
      >
        <input
          type="text"
          placeholder="Nombre"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
          className="
            p-4 rounded-lg
            bg-[#141414]
            border border-white/10
            text-[#f3e7d3]
            placeholder:text-[#f3e7d3]/40
            focus:outline-none
            focus:ring-2 focus:ring-[#c89b6a]
          "
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
          className="
            p-4 rounded-lg
            bg-[#141414]
            border border-white/10
            text-[#f3e7d3]
            placeholder:text-[#f3e7d3]/40
            focus:outline-none
            focus:ring-2 focus:ring-[#c89b6a]
          "
        />

        <textarea
          placeholder="Tu mensaje"
          rows={4}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          required
          className="
            p-4 rounded-lg
            bg-[#141414]
            border border-white/10
            text-[#f3e7d3]
            placeholder:text-[#f3e7d3]/40
            focus:outline-none
            focus:ring-2 focus:ring-[#c89b6a]
          "
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            py-4 rounded-full
            border border-[#25D366]
            text-[#25D366]
            transition
            hover:bg-[#25D366]
            hover:text-black
            disabled:opacity-50
          "
        >
          {loading ? "Enviando..." : "Enviar Opinion"}
        </button>

        {/* MESSAGE */}
        <AnimatePresence>
          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center text-sm text-[#c89b6a]"
            >
              {success}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </section>
  );
}