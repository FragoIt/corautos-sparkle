import { useEffect, useRef, useCallback, useMemo, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fotonImage from "@/assets/foton-adventure.jpg";
import dongfengImage from "@/assets/dongfeng-commercial.jpg";

gsap.registerPlugin(ScrollTrigger);

// Datos estáticos fuera del componente para evitar re-creación
const BRANDS_DATA = [
  {
    name: "FOTON",
    description: "La mejor opción para tu negocio",
    subtitle: "Vehículos robustos y confiables para trabajo y familia",
    image: fotonImage,
    phone: "01 800 51-88-22",
    phoneSecondary: "(317) 437-5399",
    link: "https://www.foton.com.co/",
    features: ["Garantía extendida", "Repuestos originales", "Servicio técnico"],
    badge: "NUEVO",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "FOTON TUNLAND",
    description: "Tu llave para la aventura", 
    subtitle: "Pickup robusta diseñada para aventura y trabajo pesado",
    image: fotonImage,
    phone: "01 800 51-88-22",
    phoneSecondary: "(317) 437-5399",
    link: "https://www.foton.com.co/vehiculos-nuevos-0km-anda-y-seguro-para-comprar-en-colombia-co.html",
    features: ["4x4 disponible", "Mayor torque", "Diseño aventurero"],
    badge: "POPULAR",
    color: "from-green-600 to-green-800"
  },
  {
    name: "DONGFENG", 
    description: "Resistencia para tu negocio",
    subtitle: "Camiones comerciales de alta durabilidad y tecnología avanzada",
    image: dongfengImage,
    phone: "(333) 640-5436",
    link: "https://www.dongfengcorautosandino.com/",
    features: ["Mayor capacidad", "Tecnología avanzada", "Soporte 24/7"],
    badge: "COMERCIAL",
    color: "from-red-600 to-red-800"
  },
  {
    name: "USADOS",
    description: "Compra o vende tu usado",
    subtitle: "Vehículos usados certificados con garantía y financiación",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "(318) 456-6280",
    phoneSecondary: "(316) 741-3911",
    link: "https://usados.corautosandino.com/",
    features: ["Aprobación ágil", "Crédito inmediato", "Garantía incluida"],
    badge: "CERTIFICADO",
    color: "from-orange-600 to-orange-800"
  },
  {
    name: "RENTING",
    description: "Renta ya con todo incluido",
    subtitle: "Soluciones de renting empresarial con mantenimiento incluido",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    phone: "(318) 456-6280",
    phoneSecondary: "(318) 450-5124",
    link: "https://renting.corautosandino.com/",
    features: ["Todo incluido", "Sin enganche", "Flexibilidad total"],
    badge: "EMPRESARIAL",
    color: "from-purple-600 to-purple-800"
  }
] as const;

// Componente Card memoizado para mejor performance
const BrandCard = memo(({ brand, index, onCardRef }: {
  brand: typeof BRANDS_DATA[0];
  index: number;
  onCardRef: (el: HTMLDivElement | null, index: number) => void;
}) => {
  // Handlers memoizados para evitar re-renders
  const handleLinkClick = useCallback(() => {
    window.open(brand.link, '_blank', 'noopener,noreferrer');
  }, [brand.link]);

  const handlePhoneClick = useCallback(() => {
    window.open(`tel:${brand.phone}`, '_self');
  }, [brand.phone]);

  const handleSecondaryPhoneClick = useCallback(() => {
    if (brand.phoneSecondary) {
      window.open(`tel:${brand.phoneSecondary}`, '_self');
    }
  }, [brand.phoneSecondary]);

  const setCardRef = useCallback((el: HTMLDivElement | null) => {
    onCardRef(el, index);
  }, [onCardRef, index]);

  return (
    <div
      ref={setCardRef}
      className="group cursor-pointer"
    >
      <Card className="card-container overflow-hidden shadow-card transition-all duration-500 will-change-transform">
        <div className="relative h-80 overflow-hidden">
          <img
            src={brand.image}
            alt={`${brand.name} vehículos`}
            className="w-full h-full object-cover transition-transform duration-300 will-change-transform"
            loading="lazy"
            decoding="async"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${brand.color || 'from-black/70'} via-transparent to-transparent opacity-80`} />
          
          {/* Badge */}
          {brand.badge && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
              {brand.badge}
            </div>
          )}
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              {brand.name}
            </h3>
            <p className="text-base lg:text-lg font-medium text-white/90">{brand.description}</p>
          </div>
        </div>
        
        <CardContent className="p-6 card-content">
          <p className="text-muted-foreground mb-4">{brand.subtitle}</p>
          
          <ul className="space-y-2 mb-6">
            {brand.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <Button 
              variant="premium" 
              className="w-full group transition-transform duration-200 hover:scale-[1.02]"
              onClick={handleLinkClick}
            >
              Ingresar
              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </div>
            </Button>
            
            <div className="grid grid-cols-1 gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="text-xs transition-transform duration-200 hover:scale-[1.02]"
                onClick={handlePhoneClick}
              >
                📞 {brand.phone}
              </Button>
              {brand.phoneSecondary && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-xs transition-transform duration-200 hover:scale-[1.02]"
                  onClick={handleSecondaryPhoneClick}
                >
                  📱 {brand.phoneSecondary}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

const BrandsSection = memo(() => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  
  // Memoizar datos para evitar re-cálculos
  const brands = useMemo(() => BRANDS_DATA, []);

  // Callback memoizado para refs
  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  }, []);

  // Función optimizada para animaciones GSAP
  const setupAnimations = useCallback(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (!section || !title) return;

    // Crear contexto GSAP para mejor performance
    const ctx = gsap.context(() => {
      // Title animation optimizada
      gsap.set(title, { opacity: 0, y: 50, will-change: 'transform, opacity' });
      
      ScrollTrigger.create({
        trigger: title,
        start: "top 80%",
        animation: gsap.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "will-change"
        }),
        toggleActions: "play none none reverse"
      });

      // Cards animaciones con Intersection Observer optimizado
      cards.forEach((card, index) => {
        if (!card) return;
        
        // Set inicial optimizado
        gsap.set(card, { 
          opacity: 0, 
          y: 80,
          scale: 0.95,
          will-change: 'transform, opacity'
        });
        
        // Entrada con stagger optimizado
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          animation: gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.15, // Reducido para mejor fluidez
            clearProps: "will-change"
          }),
          toggleActions: "play none none reverse"
        });

        // Hover optimizado con requestAnimationFrame
        const cardElement = card.querySelector('.card-container');
        const cardImage = card.querySelector('img');
        const cardContent = card.querySelector('.card-content');
        
        if (cardElement && cardImage && cardContent) {
          let hoverTween: gsap.core.Tween | null = null;
          
          card.addEventListener('mouseenter', () => {
            // Cancelar animación previa
            if (hoverTween) hoverTween.kill();
            
            hoverTween = gsap.timeline()
              .to(cardElement, { 
                scale: 1.03, 
                duration: 0.3, 
                ease: "power2.out",
                will-change: 'transform'
              })
              .to(cardImage, { 
                y: -8,
                scale: 1.05, 
                duration: 0.3, 
                ease: "power2.out",
                will-change: 'transform'
              }, 0)
              .to(cardElement, {
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                duration: 0.3,
                ease: "power2.out"
              }, 0)
              .to(cardContent, { 
                y: -3, 
                duration: 0.2, 
                ease: "power2.out",
                will-change: 'transform'
              }, 0);
          }, { passive: true });
          
          card.addEventListener('mouseleave', () => {
            if (hoverTween) hoverTween.kill();
            
            hoverTween = gsap.timeline()
              .to([cardElement, cardImage, cardContent], { 
                scale: 1,
                y: 0,
                duration: 0.3, 
                ease: "power2.out",
                clearProps: "will-change"
              })
              .to(cardElement, {
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                duration: 0.3,
                ease: "power2.out"
              }, 0);
          }, { passive: true });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Delay para asegurar que DOM esté listo
    const timer = setTimeout(setupAnimations, 100);
    return () => clearTimeout(timer);
  }, [setupAnimations]);

  return (
    <section ref={sectionRef} className="py-20 bg-background" id="marcas">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestras{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Marcas y Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Representantes oficiales de las mejores marcas en vehículos comerciales, 
            con servicios completos de usados y renting empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <BrandCard 
              key={brand.name}
              brand={brand}
              index={index}
              onCardRef={setCardRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

BrandsSection.displayName = 'BrandsSection';

export default BrandsSection;  useEffect(() => {
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

    // Cards entrance animations with fade-in, slide-up, and stagger
    cards.forEach((card, index) => {
      if (!card) return;
      
      // Set initial state: hidden, slightly below viewport
      gsap.set(card, { 
        opacity: 0, 
        y: 80,
        scale: 0.95
      });
      
      // Staggered entrance animation
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        animation: gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.3 // Stagger delay: each card appears 0.3s after the previous
        }),
        toggleActions: "play none none reverse"
      });

      // Enhanced hover animations
      const cardElement = card.querySelector('.card-container');
      const cardImage = card.querySelector('img');
      const cardContent = card.querySelector('.card-content');
      
      if (cardElement && cardImage && cardContent) {
        // Mouse enter animation
        card.addEventListener('mouseenter', () => {
          // Scale entire card to 1.03
          gsap.to(cardElement, { 
            scale: 1.03, 
            duration: 0.4, 
            ease: "power2.out" 
          });
          
          // Move image slightly upwards
          gsap.to(cardImage, { 
            y: -10,
            scale: 1.05, 
            duration: 0.4, 
            ease: "power2.out" 
          });
          
          // Add subtle shadow
          gsap.to(cardElement, {
            boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "power2.out"
          });
          
          // Subtle content lift
          gsap.to(cardContent, { 
            y: -5, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
        
        // Mouse leave animation
        card.addEventListener('mouseleave', () => {
          // Reset card scale
          gsap.to(cardElement, { 
            scale: 1, 
            duration: 0.4, 
            ease: "power2.out" 
          });
          
          // Reset image position and scale
          gsap.to(cardImage, { 
            y: 0,
            scale: 1, 
            duration: 0.4, 
            ease: "power2.out" 
          });
          
          // Reset shadow
          gsap.to(cardElement, {
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            duration: 0.4,
            ease: "power2.out"
          });
          
          // Reset content position
          gsap.to(cardContent, { 
            y: 0, 
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
            Nuestras{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Marcas y Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Representantes oficiales de las mejores marcas en vehículos comerciales, 
            con servicios completos de usados y renting empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <Card className="card-container overflow-hidden shadow-card transition-all duration-500">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={`${brand.name} vehículos`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${brand.color || 'from-black/70'} via-transparent to-transparent opacity-80`} />
                  
                  {/* Badge */}
                  {brand.badge && (
                    <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                      {brand.badge}
                    </div>
                  )}
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-base lg:text-lg font-medium text-white/90">{brand.description}</p>
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

                  <div className="space-y-3">
                    <Button 
                      variant="premium" 
                      className="w-full group"
                      onClick={() => window.open(brand.link, '_blank')}
                    >
                      Ingresar
                      <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </div>
                    </Button>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                        onClick={() => window.open(`tel:${brand.phone}`, '_self')}
                      >
                        📞 {brand.phone}
                      </Button>
                      {brand.phoneSecondary && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-xs"
                          onClick={() => window.open(`tel:${brand.phoneSecondary}`, '_self')}
                        >
                          📱 {brand.phoneSecondary}
                        </Button>
                      )}
                    </div>
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