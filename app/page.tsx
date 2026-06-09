
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Lista from "@/components/Lista";


export default function Home() {
  return (
    <>
      <Hero />
      <Lista />
      <Services />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

