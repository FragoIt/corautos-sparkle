import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-dealership.jpg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const buttons = buttonsRef.current;
    const contactInfo = contactInfoRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    if (!section || !background || !title || !subtitle || !buttons || !contactInfo || !scrollIndicator) return;

    // Create GSAP timeline for initial animations
    const tl = gsap.timeline();

    // 1. Title fade-up animation with smooth easing
    tl.fromTo(title, 
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // 2. Subtitle with delay
    tl.fromTo(subtitle,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.6" // Start 0.6s before previous animation ends
    );

    // 3. Buttons with scale and shadow effect
    tl.fromTo(buttons.children,
      {
        opacity: 0,
        y: 30,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2
      },
      "-=0.4"
    );

    // Add hover effects for buttons
    Array.from(buttons.children).forEach((button) => {
      const buttonElement = button as HTMLElement;
      
      buttonElement.addEventListener('mouseenter', () => {
        gsap.to(buttonElement, {
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      buttonElement.addEventListener('mouseleave', () => {
        gsap.to(buttonElement, {
          scale: 1,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // 4. Contact info with stagger effect
    tl.fromTo(contactInfo.children,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15
      },
      "-=0.3"
    );

    // 5. Scroll indicator
    tl.fromTo(scrollIndicator,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.2"
    );

    // Scroll indicator bouncing animation
    gsap.to(scrollIndicator.querySelector('.bounce-element'), {
      y: 10,
      duration: 1.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });

    // 6. Background parallax effect with ScrollTrigger
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(background, {
          y: progress * 100,
          scale: 1 + progress * 0.1,
          duration: 0.3,
          ease: "none"
        });
      }
    });

    // Additional ScrollTrigger for fade out effect
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(section.querySelector('.hero-content'), {
          opacity: 1 - progress * 0.5,
          duration: 0.3,
          ease: "none"
        });
      }
    });

    // Transition ScrollTrigger: Fade out hero while next section appears
    ScrollTrigger.create({
      trigger: section,
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Fade out hero content completely during transition
        gsap.to(section.querySelector('.hero-content'), {
          opacity: Math.max(0, 1 - progress * 2),
          y: progress * -50,
          duration: 0.3,
          ease: "none"
        });

        // Zoom out background effect
        gsap.to(background, {
          scale: 1 + progress * 0.2,
          duration: 0.3,
          ease: "none"
        });

        // Fade out overlay for smoother transition
        gsap.to(background.querySelector('.bg-gradient-hero'), {
          opacity: 0.8 - progress * 0.3,
          duration: 0.3,
          ease: "none"
        });

        // Fade in next section (BrandsSection)
        const nextSection = document.querySelector('#marcas');
        if (nextSection) {
          gsap.to(nextSection, {
            opacity: progress,
            y: (1 - progress) * 100,
            duration: 0.3,
            ease: "none"
          });
        }
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Corautos Andino - Concesionario Premium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        <div>
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tu Vehículo{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Perfecto
            </span>
            <br />
            Te Está Esperando
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
        >
          Concesionario oficial FOTON y DONGFENG en Colombia. 
          La mejor opción para tu negocio y aventura.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" className="min-w-[200px] transition-all duration-300">
            Ver Catálogo
          </Button>
          <Button variant="metallic" size="xl" className="min-w-[200px] transition-all duration-300">
            <Phone className="mr-2 h-5 w-5" />
            Llamar Ahora
          </Button>
        </div>

        <div
          ref={contactInfoRef}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm"
        >
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
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Descubre más</span>
          <div className="bounce-element">
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;