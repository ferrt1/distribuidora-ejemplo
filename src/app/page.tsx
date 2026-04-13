import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalogo from "@/components/Catalogo";
import Nosotros from "@/components/Nosotros";
import Ventajas from "@/components/Ventajas";
import CTA from "@/components/CTA";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Catalogo />
        <Nosotros />
        <Ventajas />
        <CTA />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
