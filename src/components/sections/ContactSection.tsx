import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement[]>([]);

  const contactInfo = [
    {
      icon: Phone,
      title: "Línea Nacional",
      details: "01 800 51-88-22",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "(317) 437-5399",
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@corautosandino.com",
      color: "text-primary-light"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Colombia",
      color: "text-accent-dark"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const form = formRef.current;
    const contactInfo = contactInfoRef.current;
    const infoCards = infoCardsRef.current;

    if (!section || !title || !form || !contactInfo) return;

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

    // Form animation
    gsap.set(form, { opacity: 0, x: -80 });
    
    ScrollTrigger.create({
      trigger: form,
      start: "top 80%",
      animation: gsap.to(form, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2
      }),
      toggleActions: "play none none reverse"
    });

    // Contact info animation
    gsap.set(contactInfo, { opacity: 0, x: 80 });
    
    ScrollTrigger.create({
      trigger: contactInfo,
      start: "top 80%",
      animation: gsap.to(contactInfo, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4
      }),
      toggleActions: "play none none reverse"
    });

    // Info cards staggered animation
    infoCards.forEach((card, index) => {
      if (!card) return;
      
      gsap.set(card, { opacity: 0, y: 30, scale: 0.95 });
      
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        animation: gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.6 + index * 0.1
        }),
        toggleActions: "play none none reverse"
      });

      // Card hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          scale: 1.05, 
          y: -5,
          duration: 0.3, 
          ease: "power2.out" 
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          scale: 1, 
          y: 0,
          duration: 0.3, 
          ease: "power2.out" 
        });
      });
    });

    // Enhanced form inputs focus animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, { 
          scale: 1.03,
          borderColor: "hsl(var(--primary))",
          boxShadow: "0 0 0 3px hsl(var(--primary) / 0.1)",
          duration: 0.3, 
          ease: "power2.out" 
        });
      });
      
      input.addEventListener('blur', () => {
        gsap.to(input, { 
          scale: 1,
          borderColor: "hsl(var(--border))",
          boxShadow: "0 0 0 0px transparent",
          duration: 0.3, 
          ease: "power2.out" 
        });
      });

      // Real-time validation visual feedback
      input.addEventListener('input', () => {
        const inputElement = input as HTMLInputElement | HTMLTextAreaElement;
        const isValid = inputElement.checkValidity();
        gsap.to(inputElement, {
          borderColor: isValid ? "hsl(var(--accent))" : "hsl(var(--destructive))",
          duration: 0.2,
          ease: "power2.out"
        });
      });
    });

    // Enhanced submit button animation
    const submitBtn = form.querySelector('button[type="submit"], .cta-button');
    if (submitBtn) {
      submitBtn.addEventListener('mouseenter', () => {
        gsap.to(submitBtn, {
          scale: 1.05,
          boxShadow: "0 10px 30px -5px hsl(var(--primary) / 0.4)",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      submitBtn.addEventListener('mouseleave', () => {
        gsap.to(submitBtn, {
          scale: 1,
          boxShadow: "0 0px 0px 0px transparent",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Tu Próximo Vehículo?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro equipo de expertos está listo para asesorarte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef}>
            <Card className="shadow-card hover:shadow-elegant transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Agenda tu Cita
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos contactaremos contigo
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Tu nombre"
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Tu apellido"
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com"
                    className="transition-all duration-300 focus:shadow-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input 
                    id="phone" 
                    placeholder="+57 300 123 4567"
                    className="transition-all duration-300 focus:shadow-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Cuéntanos qué vehículo te interesa..."
                    className="transition-all duration-300 focus:shadow-md min-h-[120px]"
                  />
                </div>
                
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full cta-button group relative overflow-hidden"
                >
                  <span className="relative z-10">Enviar Solicitud</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                    →
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-6">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  ref={el => {
                    if (el) infoCardsRef.current[index] = el;
                  }}
                  className="flex items-center gap-4 p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-background to-muted ${info.color} shadow-md`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-accent rounded-lg p-8 text-white shadow-accent">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6" />
                <h3 className="text-xl font-bold">Horarios de Atención</h3>
              </div>
              <div className="space-y-2 text-white/90">
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 8:00 AM - 5:00 PM</p>
                <p>Domingos: 9:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="premium" 
                size="lg" 
                className="flex-1 hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=573174375399&text=Hola%20Me%20Interesa%20un%20Veh%C3%ADculo%20Nuevo", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button 
                variant="metallic" 
                size="lg" 
                className="flex-1 hover:scale-105 transition-all duration-300"
                onClick={() => window.open("tel:018005188220", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;