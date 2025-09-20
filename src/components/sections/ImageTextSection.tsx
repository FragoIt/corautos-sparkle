import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fotonImage from "@/assets/foton-adventure.jpg";
import dongfengImage from "@/assets/dongfeng-commercial.jpg";

gsap.registerPlugin(ScrollTrigger);

const ImageTextSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;

    if (!container || !text || !image1 || !image2) return;

    // Pin text while images change
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      pin: text,
      pinSpacing: false,
    });

    // Image crossfade transition
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        
        if (progress < 0.5) {
          gsap.set(image1, { opacity: 1 - progress * 2 });
          gsap.set(image2, { opacity: progress * 2 });
        }
        
        // Parallax movement
        gsap.set(image1, { y: progress * -200 });
        gsap.set(image2, { y: progress * -300 });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Images Container */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          ref={image1Ref}
          src={fotonImage}
          alt="FOTON Adventure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img 
          ref={image2Ref}
          src={dongfengImage}
          alt="DONGFENG Commercial"
          className="absolute inset-0 w-full h-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
      </div>

      {/* Pinned Text */}
      <div ref={textRef} className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <div className="bg-card/90 backdrop-blur-sm p-12 rounded-2xl shadow-elegant border border-border/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Dos Marcas,{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Una Pasión
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                FOTON representa la aventura y la versatilidad. Vehículos diseñados 
                para quienes buscan explorar sin límites, con la confiabilidad que 
                solo una marca líder puede ofrecer.
              </p>
              
              <p>
                DONGFENG simboliza la potencia comercial. Soluciones robustas 
                para empresas que requieren eficiencia, durabilidad y el mejor 
                retorno de inversión.
              </p>
              
              <p className="text-primary font-medium">
                Ambas marcas, una sola promesa: excelencia en cada kilómetro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;