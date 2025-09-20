import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fotonImage from "@/assets/foton-adventure.jpg";
import dongfengImage from "@/assets/dongfeng-commercial.jpg";

gsap.registerPlugin(ScrollTrigger);

const BrandsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const brands = [
    {
      name: "FOTON",
      description: "Tu llave para la aventura",
      subtitle: "Vehículos robustos y confiables para trabajo y familia",
      image: fotonImage,
      phone: "(317) 437-5399",
      link: "https://www.foton.com.co/",
      features: ["Garantía extendida", "Repuestos originales", "Servicio técnico"]
    },
    {
      name: "DONGFENG", 
      description: "Resistencia para tu negocio",
      subtitle: "Camiones comerciales de alta durabilidad",
      image: dongfengImage,
      phone: "(333) 640-5436",
      link: "https://www.dongfengcorautosandino.com/",
      features: ["Mayor capacidad", "Tecnología avanzada", "Soporte 24/7"]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (!section || !title) return;

    // Title animation
    gsap.set(title, { opacity: 0, y: 50 });
    
    ScrollTrigger.create({
      trigger: title,
      start: "top 80%",
      animation: gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }),
      toggleActions: "play none none reverse"
    });

    // Cards animations
    cards.forEach((card, index) => {
      if (!card) return;
      
      const isLeft = index % 2 === 0;
      
      gsap.set(card, { 
        opacity: 0, 
        x: isLeft ? -80 : 80,
        y: 30
      });
      
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        animation: gsap.to(card, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.2
        }),
        toggleActions: "play none none reverse"
      });

      // Enhanced hover animations for cards
      const cardImage = card.querySelector('img');
      const cardContent = card.querySelector('.card-content');
      const brandName = card.querySelector('.brand-name');
      
      if (cardImage && cardContent && brandName) {
        card.addEventListener('mouseenter', () => {
          gsap.to(cardImage, { 
            scale: 1.15, 
            duration: 0.8, 
            ease: "power3.out" 
          });
          gsap.to(cardContent, { 
            y: -8, 
            duration: 0.4, 
            ease: "power2.out" 
          });
          gsap.to(brandName, { 
            scale: 1.08, 
            color: "hsl(var(--accent-light))",
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(cardImage, { 
            scale: 1, 
            duration: 0.8, 
            ease: "power3.out" 
          });
          gsap.to(cardContent, { 
            y: 0, 
            duration: 0.4, 
            ease: "power2.out" 
          });
          gsap.to(brandName, { 
            scale: 1, 
            color: "inherit",
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Marcas de{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Confianza
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Representantes oficiales de las marcas más reconocidas en vehículos comerciales y de aventura
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02]">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={`${brand.name} vehículos`}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-3xl font-bold mb-2 brand-name transition-all duration-300">
                      {brand.name}
                    </h3>
                    <p className="text-lg font-medium text-accent-light drop-shadow-md">{brand.description}</p>
                  </div>
                </div>
                
                <CardContent className="p-6 card-content">
                  <p className="text-muted-foreground mb-4">{brand.subtitle}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {brand.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="premium" 
                      className="flex-1 hover:scale-105 transition-all duration-300 group"
                    >
                      Ver Modelos
                      <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </div>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 hover:scale-105 transition-all duration-300"
                    >
                      {brand.phone}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;