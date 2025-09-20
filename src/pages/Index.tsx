import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroStorySection from "@/components/sections/HeroStorySection";
import ImageTextSection from "@/components/sections/ImageTextSection";
import NarrativeSection from "@/components/sections/NarrativeSection";
import AppleStyleSection from "@/components/sections/AppleStyleSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import BrandsSection from "@/components/sections/BrandsSection";
import StatsSection from "@/components/sections/StatsSection";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section id="inicio">
          <HeroStorySection />
        </section>
        
        <section id="historia">
          <ImageTextSection />
        </section>
        
        <section id="narrativa">
          <NarrativeSection />
        </section>
        
        <section id="experiencia">
          <AppleStyleSection />
        </section>
        
        <section id="marcas">
          <BrandsSection />
        </section>
        
        <StatsSection />
        
        <section id="contacto">
          <FinalCTASection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
