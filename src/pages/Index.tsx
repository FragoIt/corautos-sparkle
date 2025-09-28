import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ThumbnailGallery from "@/components/gallery/ThumbnailGallery";
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
          <HeroSection />
        </section>
        
        <section id="marcas">
          <BrandsSection />
        </section>
        
        <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                FOTON Tunland 2024
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                Descubre el poder y la versatilidad del FOTON Tunland 2024, 
                el vehículo comercial ideal para trabajo y aventura.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                  Motor Turbo Diesel 2.8L
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                  4x4 Todo Terreno
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
                  Cabina Doble - 5 Pasajeros
                </span>
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-medium">
                  Desde $89,900,000
                </span>
              </div>
            </div>
            <ThumbnailGallery />
          </div>
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
