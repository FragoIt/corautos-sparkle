import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin,
  MessageCircle 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const socialRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "FOTON", href: "https://www.foton.com.co/" },
    { name: "DONGFENG", href: "https://www.dongfengcorautosandino.com/" },
    { name: "Vehículos Usados", href: "https://usados.corautosandino.com/" },
    { name: "Renting", href: "https://renting.corautosandino.com/" },
  ];

  const services = [
    "Venta de Vehículos Nuevos",
    "Vehículos Usados Certificados",
    "Renting Empresarial",
    "Financiación",
    "Servicio Técnico",
    "Repuestos Originales",
  ];

  useEffect(() => {
    const footer = footerRef.current;
    const sections = sectionsRef.current;
    const social = socialRef.current;

    if (!footer) return;

    // Footer sections animation
    sections.forEach((section, index) => {
      if (!section) return;
      
      gsap.set(section, { opacity: 0, y: 50 });
      
      ScrollTrigger.create({
        trigger: section,
        start: "top 90%",
        animation: gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.1
        }),
        toggleActions: "play none none reverse"
      });
    });

    // Social icons hover animations
    if (social) {
      const socialIcons = social.querySelectorAll('.social-icon');
      socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, { 
            scale: 1.2, 
            rotation: 10,
            duration: 0.3, 
            ease: "back.out(1.7)" 
          });
        });
        
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, { 
            scale: 1, 
            rotation: 0,
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-gradient-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0-30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div
            ref={el => {
              if (el) sectionsRef.current[0] = el;
            }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">CA</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Corautos Andino</h3>
                <p className="text-white/80 text-sm">Tu socio automotriz</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Más de 15 años siendo el concesionario oficial de FOTON y DONGFENG en Colombia, 
              brindando soluciones automotrices de calidad.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent-light" />
                <span className="text-sm">01 800 51-88-22</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-accent-light" />
                <span className="text-sm">(317) 437-5399</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent-light" />
                <span className="text-sm">info@corautosandino.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent-light" />
                <span className="text-sm">Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div
            ref={el => {
              if (el) sectionsRef.current[1] = el;
            }}
          >
            <h4 className="font-bold text-lg mb-6 text-accent-light">Marcas</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-accent-light transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            ref={el => {
              if (el) sectionsRef.current[2] = el;
            }}
          >
            <h4 className="font-bold text-lg mb-6 text-accent-light">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div
            ref={el => {
              if (el) sectionsRef.current[3] = el;
            }}
          >
            <h4 className="font-bold text-lg mb-6 text-accent-light">Síguenos</h4>
            
            <div ref={socialRef} className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-accent-light/20 transition-all duration-300 social-icon cursor-pointer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h5 className="font-semibold mb-3">¿Necesitas Ayuda?</h5>
              <p className="text-sm text-white/80 mb-4">
                Contáctanos para recibir asesoría personalizada
              </p>
              <Button
                variant="hero"
                size="sm"
                className="w-full hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=573174375399&text=Hola%20Me%20Interesa%20un%20Veh%C3%ADculo%20Nuevo", "_blank")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2024 Corautos Andino. Todos los derechos reservados.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-accent-light transition-colors hover:scale-105 transform inline-block duration-300">
              Términos y Condiciones
            </a>
            <a href="#" className="text-white/60 hover:text-accent-light transition-colors hover:scale-105 transform inline-block duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/60 hover:text-accent-light transition-colors hover:scale-105 transform inline-block duration-300">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;