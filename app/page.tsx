
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Lista from "@/components/Lista";
import RevieClient from "@/components/RevieClient";
import Carousel from "../components/Carousel";



export default function Home() {
  return (
    <>
      <Hero />
      <Carousel/>
      <RevieClient/>
      <Lista />
      <Services />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

