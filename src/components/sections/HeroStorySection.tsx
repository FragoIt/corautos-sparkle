import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-dealership.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    // You can add your animation logic here if needed
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="w-full h-full">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            ref={imageRef}
            src={heroImage}
            alt="Corautos Andino - Concesionario Premium" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>

        {/* Sun Element */}
        <div 
          ref={sunRef}
          className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-60"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--accent-light)), hsl(var(--accent)))",
            filter: "blur(8px)"
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tu Vehículo{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Perfecto
            </span>
            <br />
            Te Está Esperando
          </h1>

          <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Concesionario oficial FOTON y DONGFENG en Colombia. 
            La mejor opción para tu negocio y aventura.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="min-w-[200px] group hover:scale-105 transition-all duration-300"
            >
              Ver Catálogo
              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </div>
            </Button>
            <Button 
              variant="metallic" 
              size="xl" 
              className="min-w-[200px] hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
          </div>

          <div ref={contactRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm mb-16">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>01 800 51-88-22</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>(317) 437-5399</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="flex flex-col items-center gap-2 animate-[bounce_2s_infinite]">
            <span className="text-sm">Descubre más</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStorySection;