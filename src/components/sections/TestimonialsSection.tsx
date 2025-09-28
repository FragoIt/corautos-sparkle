import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import teamImage from "@/assets/team-dealership.jpg";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const teamImageRef = useRef<HTMLImageElement>(null);
  const teamTextRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentTestimonialRef = useRef<HTMLDivElement>(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Carlos Mendoza",
      company: "Transportes del Valle",
      testimonial: "Excelente servicio y atención. Mi FOTON ya lleva 3 años funcionando sin problemas, ideal para mi negocio de transporte.",
      rating: 5,
      role: "Empresario de Transporte"
    },
    {
      name: "María González",
      company: "Constructora Andina",
      testimonial: "Los vehículos DONGFENG han sido fundamentales para nuestras obras. Resistentes, confiables y con un excelente servicio postventa.",
      rating: 5,
      role: "Gerente de Operaciones"
    },
    {
      name: "Andrés Rodríguez",
      company: "Familia Rodríguez",
      testimonial: "Compramos nuestra FOTON para aventuras familiares. El equipo de Corautos nos asesoró perfectamente y el financiamiento fue muy accesible.",
      rating: 5,
      role: "Cliente Particular"
    }
  ];

  // Navegación del carrusel
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const nextIndex = (currentIndex + 1) % testimonials.length;
    animateTestimonialTransition(nextIndex, 'next');
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    animateTestimonialTransition(prevIndex, 'prev');
  };

  const animateTestimonialTransition = (newIndex: number, direction: 'next' | 'prev') => {
    const currentCard = currentTestimonialRef.current;
    if (!currentCard) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      }
    });

    // Slide out current testimonial
    tl.to(currentCard, {
      opacity: 0,
      x: direction === 'next' ? -100 : 100,
      duration: 0.4,
      ease: "power2.inOut"
    })
    // Slide in new testimonial
    .set(currentCard, {
      x: direction === 'next' ? 100 : -100
    })
    .to(currentCard, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const story = storyRef.current;
    const testimonialsContainer = testimonialsRef.current;
    const teamImg = teamImageRef.current;
    const teamText = teamTextRef.current;
    const currentCard = currentTestimonialRef.current;

    if (!section || !story || !testimonialsContainer) return;

    // Animaciones de entrada separadas para foto y texto
    if (teamImg && teamText) {
      gsap.set(story, { opacity: 0 });
      gsap.set(teamImg, { opacity: 0, scale: 0.8, x: -50 });
      gsap.set(teamText, { opacity: 0, y: 30 });
      
      ScrollTrigger.create({
        trigger: story,
        start: "top 80%",
        animation: gsap.timeline()
          .to(story, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          })
          .to(teamImg, {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.8,
            ease: "back.out(1.2)"
          }, "-=0.1")
          .to(teamText, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.4"),
        toggleActions: "play none none reverse"
      });

      // Hover en foto: scale leve y sombra
      const imageContainer = teamImg.parentElement;
      if (imageContainer) {
        imageContainer.addEventListener('mouseenter', () => {
          gsap.to(teamImg, {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(imageContainer, {
            boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            duration: 0.4,
            ease: "power2.out"
          });
        });
        
        imageContainer.addEventListener('mouseleave', () => {
          gsap.to(teamImg, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(imageContainer, {
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "power2.out"
          });
        });
      }
    }

    // Testimonials container animation
    gsap.set(testimonialsContainer, { opacity: 0, x: 80 });
    
    ScrollTrigger.create({
      trigger: testimonialsContainer,
      start: "top 80%",
      animation: gsap.to(testimonialsContainer, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3
      }),
      toggleActions: "play none none reverse"
    });

    // Initial testimonial card animation
    if (currentCard) {
      gsap.set(currentCard, { opacity: 0, y: 50, scale: 0.9 });
      
      ScrollTrigger.create({
        trigger: currentCard,
        start: "top 85%",
        animation: gsap.to(currentCard, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.5
        }),
        toggleActions: "play none none reverse"
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Auto-advance carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <div ref={storyRef}>
            <div className="space-y-6">
              <div ref={teamTextRef}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Historias de{" "}
                  <span className="bg-gradient-accent bg-clip-text text-transparent">
                    Éxito
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                  Más de 15 años acompañando el crecimiento de empresas y familias colombianas. 
                  Cada vehículo que entregamos representa una historia de confianza y satisfacción.
                </p>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-elegant group cursor-pointer">
                <img
                  ref={teamImageRef}
                  src={teamImage}
                  alt="Equipo profesional de Corautos Andino"
                  className="w-full h-80 object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Nuestro Equipo</h3>
                  <p className="text-white/90">
                    Profesionales comprometidos con tu satisfacción
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div ref={testimonialsRef} className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Lo Que Dicen Nuestros Clientes
              </h3>
              <p className="text-muted-foreground">
                Testimonios reales de quienes confían en nosotros
              </p>
            </div>

            {/* Carousel Container */}
            <div ref={carouselRef} className="relative">
              <div
                ref={currentTestimonialRef}
                className="testimonial-card"
              >
                <Card className="shadow-card hover:shadow-elegant transition-all duration-500 border border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Quote className="h-8 w-8 text-accent opacity-60" />
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-muted-foreground italic leading-relaxed">
                          "{testimonials[currentIndex].testimonial}"
                        </p>
                        
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent animate-pulse" />
                          ))}
                        </div>
                        
                        <div className="border-t border-border pt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-foreground">
                                {testimonials[currentIndex].name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {testimonials[currentIndex].role}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">
                                {testimonials[currentIndex].company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  disabled={isAnimating}
                  className="rounded-full w-10 h-10 p-0 hover:scale-110 transition-transform duration-200"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isAnimating && index !== currentIndex) {
                          setIsAnimating(true);
                          animateTestimonialTransition(index, index > currentIndex ? 'next' : 'prev');
                        }
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-accent scale-125' 
                          : 'bg-accent/30 hover:bg-accent/60'
                      }`}
                      disabled={isAnimating}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  disabled={isAnimating}
                  className="rounded-full w-10 h-10 p-0 hover:scale-110 transition-transform duration-200"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;