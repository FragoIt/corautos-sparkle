import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AppleStyleSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const phases = [
    {
      title: "Descubre",
      subtitle: "Tu vehículo ideal",
      description: "Exploramos contigo cada opción, cada detalle, cada posibilidad. Tu visión es nuestro punto de partida.",
      image: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-light)))"
    },
    {
      title: "Experimenta", 
      subtitle: "La diferencia real",
      description: "Prueba de manejo personalizada. Siente la potencia, la comodidad y la tecnología que transformará tu día a día.",
      image: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-light)))"
    },
    {
      title: "Adquiere",
      subtitle: "Con confianza total",
      description: "Financiamiento flexible, garantía extendida y el respaldo de una marca que entiende tus necesidades.",
      image: "linear-gradient(135deg, hsl(var(--primary-dark)), hsl(var(--accent-dark)))"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    if (!container || !content || !image || !text) return;

    // Pin the section
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: content,
      pinSpacing: false,
    });

    // Create timeline for phase transitions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    phases.forEach((phase, index) => {
      const progress = index / (phases.length - 1);
      
      tl.to(image, {
        background: phase.image,
        scale: 1 + index * 0.1,
        rotation: index * 10,
        duration: 1,
        ease: "power2.inOut"
      }, progress)
      .to(text, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: "power2.out"
      }, progress)
      .set(text, {
        innerHTML: `
          <h3 class="text-6xl font-bold mb-4 text-white">${phase.title}</h3>
          <p class="text-2xl mb-6 text-white/90">${phase.subtitle}</p>
          <p class="text-lg text-white/80 max-w-2xl">${phase.description}</p>
        `
      }, progress + 0.3)
      .to(text, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }, progress + 0.3);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="h-[300vh] relative">
      <div ref={contentRef} className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div 
          ref={imageRef}
          className="absolute inset-0 bg-gradient-primary"
          style={{ 
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-light)))"
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div ref={textRef} className="relative z-10 text-center text-white px-6">
          <h3 className="text-6xl font-bold mb-4">Descubre</h3>
          <p className="text-2xl mb-6 text-white/90">Tu vehículo ideal</p>
          <p className="text-lg text-white/80 max-w-2xl">
            Exploramos contigo cada opción, cada detalle, cada posibilidad. 
            Tu visión es nuestro punto de partida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppleStyleSection;