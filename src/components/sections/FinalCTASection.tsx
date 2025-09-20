import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FinalCTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const decorativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const decorative = decorativeRef.current;

    if (!section || !content || !decorative) return;

    // Initial setup
    gsap.set(content, { opacity: 0, y: 50 });
    gsap.set(decorative, { scale: 0, rotation: -180 });

    // Entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(content, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(decorative, {
      scale: 1,
      rotation: 0,
      duration: 1,
      ease: "back.out(1.7)"
    }, "-=0.4");

    // Continuous decorative movement
    gsap.to(decorative, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleCTAClick = (action: string) => {
    console.log(`CTA clicked: ${action}`);
    // Add analytics or specific action handling
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div 
        ref={decorativeRef}
        className="absolute top-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full"
      />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/40 rounded-full"></div>
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-white/30 rounded-full"></div>

      <div ref={contentRef} className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Tu Nuevo{" "}
          <span className="text-accent-light">
            Viaje
          </span>{" "}
          Comienza Aquí
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Más de 15 años de experiencia nos respaldan. 
          Más de 2,500 clientes satisfechos nos inspiran. 
          Tu confianza nos motiva.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="xl" 
            className="min-w-[200px] group"
            onClick={() => handleCTAClick('catalog')}
          >
            Ver Catálogo Completo
            <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </div>
          </Button>
          
          <Button 
            variant="metallic" 
            size="xl" 
            className="min-w-[200px]"
            onClick={() => handleCTAClick('contact')}
          >
            <Phone className="mr-2 h-5 w-5" />
            Contactar Ahora
          </Button>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 text-white/80">
          <div className="flex flex-col items-center space-y-3">
            <Phone className="h-8 w-8 text-accent-light" />
            <div className="text-center">
              <p className="font-semibold text-white">Línea Nacional</p>
              <p>01 800 51-88-22</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <MessageCircle className="h-8 w-8 text-accent-light" />
            <div className="text-center">
              <p className="font-semibold text-white">WhatsApp</p>
              <p>(317) 437-5399</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <MapPin className="h-8 w-8 text-accent-light" />
            <div className="text-center">
              <p className="font-semibold text-white">Ubicación</p>
              <p>Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;