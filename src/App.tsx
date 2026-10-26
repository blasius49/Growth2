import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Reviews from "./components/Reviews";
import FinalCta from "./components/FinalCta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { useScrollReveal } from "./hooks/useSiteInteractions";

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Reviews />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
