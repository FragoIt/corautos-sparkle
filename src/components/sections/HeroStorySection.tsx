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
  const floatingRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const sun = sunRef.current;
    const floating = floatingRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    const contact = contactRef.current;
    const scroll = scrollRef.current;

    if (!container || !image || !sun || !floating || !title || !subtitle || !buttons || !contact || !scroll) return;

    // Initial setup - all elements hidden
    gsap.set([image, sun, floating, title, subtitle, buttons, contact, scroll], { opacity: 0 });
    gsap.set([title, subtitle], { y: 60, scale: 0.95 });
    gsap.set(buttons, { y: 40, scale: 0.9 });
    gsap.set([sun, floating], { y: 30, scale: 0.8 });
    gsap.set(contact, { y: 20 });

    // Enhanced hero entrance timeline with staggered animations
    const tl = gsap.timeline({ delay: 0.8 });
    
    tl.to(image, { 
        opacity: 1, 
        duration: 1.5, 
        ease: "power3.out" 
      })
      .to(sun, { 
        opacity: 0.8, 
        y: 0, 
        scale: 1, 
        duration: 1.2, 
        ease: "back.out(1.4)" 
      }, "-=1.2")
      .to(floating, { 
        opacity: 0.6, 
        y: 0, 
        scale: 1, 
        duration: 1.4, 
        ease: "elastic.out(1, 0.8)" 
      }, "-=1.0")
      .to(title, { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1, 
        ease: "power3.out" 
      }, "-=0.8")
      .to(subtitle, { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        ease: "power2.out" 
      }, "-=0.6")
      .to(buttons, { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        ease: "back.out(1.4)" 
      }, "-=0.4")
      .to(contact, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "power2.out" 
      }, "-=0.2")
      .to(scroll, { 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out" 
      }, "-=0.1");

    // Enhanced parallax and depth effects on scroll
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Intensified background parallax with scale
        gsap.set(image, { 
          scale: 1 - progress * 0.15,
          y: progress * -120,
          filter: `brightness(${1 - progress * 0.3})`
        });
        
        // Sun with independent movement
        gsap.set(sun, { 
          y: progress * -200 * 0.4,
          x: progress * 150 * 0.3,
          scale: 1 + progress * 0.2,
          opacity: 0.8 - progress * 0.5
        });
        
        // Floating element with different trajectory
        gsap.set(floating, { 
          y: progress * -250 * 0.7,
          x: progress * -100 * 0.5,
          rotation: progress * 45,
          scale: 1 - progress * 0.3,
          opacity: 0.6 - progress * 0.4
        });
        
        // Content elements with depth
        gsap.set([title, subtitle], {
          opacity: 1 - progress * 1.2,
          y: progress * -80,
          scale: 1 - progress * 0.1
        });
        
        gsap.set(buttons, {
          opacity: 1 - progress * 1.5,
          y: progress * -60,
          scale: 1 - progress * 0.15
        });
        
        gsap.set(contact, {
          opacity: 1 - progress * 1.8,
          y: progress * -40
        });
      }
    });

    // Floating animations for decorative elements
    gsap.to(sun, {
      y: "+=15",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(floating, {
      rotation: "+=10",
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src={heroImage} 
          alt="Corautos Andino - Concesionario Premium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div 
        ref={sunRef}
        className="absolute top-20 right-20 w-48 h-48 rounded-full opacity-70"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--accent-light)) 0%, hsl(var(--accent)) 40%, transparent 70%)",
          filter: "blur(12px)"
        }}
      />
      
      <div 
        ref={floatingRef}
        className="absolute top-32 left-16 w-32 h-32 rounded-full opacity-50"
        style={{ 
          background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
          filter: "blur(16px)"
        }}
      />

      {/* Additional depth elements */}
      <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-accent/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent-light/50 rounded-full animate-pulse delay-2000"></div>

      {/* Enhanced Hero Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Tu Vehículo{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent drop-shadow-lg">
            Perfecto
          </span>
          <br />
          Te Está Esperando
        </h1>

        <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-md">
          Concesionario oficial FOTON y DONGFENG en Colombia. 
          La mejor opción para tu negocio y aventura.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="xl" 
            className="min-w-[200px] group hover:scale-110 hover:shadow-2xl transition-all duration-500 transform-gpu"
          >
            Ver Catálogo
            <div className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
              →
            </div>
          </Button>
          <Button 
            variant="metallic" 
            size="xl" 
            className="min-w-[200px] hover:scale-110 hover:shadow-2xl transition-all duration-500 transform-gpu"
          >
            <Phone className="mr-2 h-5 w-5" />
            Llamar Ahora
          </Button>
        </div>

        <div ref={contactRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm mb-16">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <Phone className="h-4 w-4" />
            <span>01 800 51-88-22</span>
          </div>
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <MessageCircle className="h-4 w-4" />
            <span>(317) 437-5399</span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center gap-2 animate-[bounce_2s_infinite] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <span className="text-sm drop-shadow-md">Descubre más</span>
          <ChevronDown className="h-6 w-6 drop-shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default HeroStorySection;