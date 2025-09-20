import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/assets/hero-dealership.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const sun = sunRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!container || !image || !sun || !title || !subtitle) return;

    // Initial page load animations
    gsap.set([image, sun, title, subtitle], { opacity: 0 });
    gsap.set(title, { y: 30 });
    gsap.set(subtitle, { y: 30 });
    gsap.set(sun, { y: 20 });

    const tl = gsap.timeline();
    
    // Hero entrance
    tl.to(image, { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(sun, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(subtitle, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

    // Scroll-based animations
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Sun parallax (slower movement)
        gsap.set(sun, { y: progress * -100 * 0.6 });
        
        // Image scale down
        gsap.set(image, { scale: 1 - progress * 0.05 });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          ref={imageRef}
          src={heroImage} 
          alt="Corautos Andino - Experiencia Premium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Sun Element */}
      <div 
        ref={sunRef}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-accent rounded-full opacity-80 blur-sm"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--accent-light)), hsl(var(--accent)))",
          filter: "blur(8px)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 max-w-4xl"
        >
          Una Nueva Era en{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Movilidad
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/90 max-w-2xl"
        >
          Descubre cómo transformamos la experiencia de adquirir tu vehículo ideal
        </p>
      </div>
    </section>
  );
};

export default HeroStorySection;