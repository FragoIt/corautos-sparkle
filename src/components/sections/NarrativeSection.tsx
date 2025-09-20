import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NarrativeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  const narrativeBlocks = [
    {
      title: "Más que un Concesionario",
      content: "Somos tu socio estratégico en movilidad. Cada vehículo que representamos ha sido cuidadosamente seleccionado para satisfacer las necesidades reales del mercado colombiano.",
      side: "left"
    },
    {
      title: "Experiencia que Transforma",
      content: "Con más de 15 años en el sector, hemos perfeccionado cada aspecto del proceso de compra. Desde la primera consulta hasta el mantenimiento a largo plazo.",
      side: "right"
    },
    {
      title: "Tecnología al Servicio",
      content: "Nuestros vehículos integran las últimas innovaciones en seguridad, eficiencia y conectividad. El futuro de la movilidad, disponible hoy.",
      side: "left"
    },
    {
      title: "Compromiso Duradero",
      content: "La relación no termina con la venta. Nuestro equipo de especialistas garantiza que tu inversión se mantenga en perfecto estado año tras año.",
      side: "right"
    }
  ];

  useEffect(() => {
    const blocks = blocksRef.current;
    
    blocks.forEach((block, index) => {
      if (!block) return;
      
      const isLeft = index % 2 === 0;
      
      gsap.set(block, { 
        opacity: 0, 
        x: isLeft ? -50 : 50 
      });
      
      ScrollTrigger.create({
        trigger: block,
        start: "top 80%",
        end: "bottom 20%",
        animation: gsap.to(block, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: index * 0.1
        }),
        toggleActions: "play none none reverse"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestra{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Historia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada paso en nuestro camino ha sido guiado por una visión clara: 
            transformar la experiencia de movilidad en Colombia.
          </p>
        </div>

        <div className="space-y-16">
          {narrativeBlocks.map((block, index) => (
            <div
              key={block.title}
              ref={el => {
                if (el) blocksRef.current[index] = el;
              }}
              className={`flex flex-col ${
                block.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12`}
            >
              <div className="flex-1">
                <div className={`max-w-lg ${
                  block.side === 'right' ? 'lg:ml-auto lg:text-right' : ''
                }`}>
                  <h3 className="text-3xl font-bold mb-6 text-foreground">
                    {block.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {block.content}
                  </p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className={`w-full max-w-md h-64 bg-gradient-primary rounded-2xl shadow-elegant ${
                  block.side === 'right' ? 'lg:mr-auto' : 'lg:ml-auto'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;