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
    const image = imageRef.current;
    const sun = sunRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    const contact = contactRef.current;
    const scroll = scrollRef.current;

    if (!container || !image || !sun || !title || !subtitle || !buttons || !contact || !scroll) return;

    // Initial setup - all elements hidden
    gsap.set([image, sun, title, subtitle, buttons, contact, scroll], { opacity: 0 });
    gsap.set([title, subtitle], { y: 50 });
    gsap.set(buttons, { y: 30 });
    gsap.set(sun, { y: 20, scale: 0.8 });

    // Hero entrance timeline
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.to(image, { opacity: 1, duration: 1.2, ease: "power2.out" })
      .to(sun, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }, "-=0.8")
      .to(title, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .to(subtitle, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .to(buttons, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .to(contact, { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(scroll, { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.2");

    // Parallax and scale effects on scroll
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Sun parallax (slower movement)
        gsap.set(sun, { 
          y: progress * -150 * 0.6,
          x: progress * 100 * 0.3
        });
        
        // Image scale down and parallax
        gsap.set(image, { 
          scale: 1 - progress * 0.1,
          y: progress * -80
        });
        
        // Content fade out
        gsap.set([title, subtitle, buttons, contact], {
          opacity: 1 - progress * 0.8,
          y: progress * -50
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      />

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
    </section>
  );
};

export default HeroStorySection;