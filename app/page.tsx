
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Lista from "@/components/Lista";
import RevieClient from "@/components/RevieClient";




export default function Home() {
  return (
    <>
      <Hero />
      <RevieClient/>
      <Lista />
      <Services />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

