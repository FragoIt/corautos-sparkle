import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroStorySection from "@/components/sections/HeroStorySection";
import BrandsSection from "@/components/sections/BrandsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

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
        
        <section id="marcas">
          <BrandsSection />
        </section>
        
        <section id="servicios">
          <BenefitsSection />
        </section>
        
        <StatsSection />
        
        <section id="nosotros">
          <TestimonialsSection />
        </section>
        
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
