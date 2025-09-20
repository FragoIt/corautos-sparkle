import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, CreditCard, Wrench, Users, Clock, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const benefits = [
    {
      icon: Shield,
      title: "Garantía Extendida",
      description: "Protección completa para tu inversión con garantía de fábrica y servicio postventa especializado.",
      color: "text-primary"
    },
    {
      icon: CreditCard,
      title: "Financiación Flexible",
      description: "Planes de financiamiento adaptados a tu capacidad de pago con las mejores tasas del mercado.",
      color: "text-accent"
    },
    {
      icon: Wrench,
      title: "Servicio Técnico Certificado",
      description: "Talleres especializados con técnicos certificados y repuestos originales garantizados.",
      color: "text-primary-light"
    },
    {
      icon: Users,
      title: "Asesoría Personalizada",
      description: "Equipo de expertos que te acompañan en todo el proceso de compra y postventa.",
      color: "text-accent-dark"
    },
    {
      icon: Clock,
      title: "Entrega Inmediata",
      description: "Stock permanente de los modelos más solicitados para entrega inmediata.",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Vehículos certificados que cumplen con los más altos estándares de calidad internacional.",
      color: "text-accent"
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

    // Enhanced cards staggered animation with alternating sides
    cards.forEach((card, index) => {
      if (!card) return;
      
      const isLeft = index % 2 === 0;
      const isTop = index < 3; // First row
      
      gsap.set(card, { 
        opacity: 0, 
        x: isLeft ? -100 : 100,
        y: isTop ? -40 : 40,
        scale: 0.9,
        rotation: isLeft ? -3 : 3
      });
      
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        animation: gsap.to(card, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
          delay: index * 0.12
        }),
        toggleActions: "play none none reverse"
      });

      // Enhanced icon hover animations
      const icon = card.querySelector('.benefit-icon');
      const cardContainer = card.querySelector('.benefit-card');
      const title = card.querySelector('.benefit-title');
      
      if (icon && cardContainer && title) {
        cardContainer.addEventListener('mouseenter', () => {
          gsap.to(icon, { 
            scale: 1.15, 
            rotation: 12,
            duration: 0.4, 
            ease: "back.out(1.7)" 
          });
          gsap.to(cardContainer, { 
            y: -12, 
            scale: 1.02,
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
            duration: 0.4, 
            ease: "power2.out" 
          });
          gsap.to(title, { 
            color: "hsl(var(--primary))",
            scale: 1.03,
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
        
        cardContainer.addEventListener('mouseleave', () => {
          gsap.to(icon, { 
            scale: 1, 
            rotation: 0,
            duration: 0.4, 
            ease: "power2.out" 
          });
          gsap.to(cardContainer, { 
            y: 0, 
            scale: 1,
            boxShadow: "0 0px 0px 0px rgba(0,0,0,0)",
            duration: 0.4, 
            ease: "power2.out" 
          });
          gsap.to(title, { 
            color: "inherit",
            scale: 1,
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por Qué Elegir{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Corautos Andino?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de una década de experiencia respaldando a nuestros clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 transform border border-border/50 benefit-card">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-background to-muted ${benefit.color} shadow-md benefit-icon`}>
                    <benefit.icon className="h-8 w-8" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 benefit-title transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;