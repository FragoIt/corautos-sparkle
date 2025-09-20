import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Tu Próximo Vehículo?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro equipo de expertos está listo para asesorarte
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
                
                <Button variant="cta" size="lg" className="w-full">
                  Enviar Solicitud
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-105"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-background to-muted ${info.color} shadow-md`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-accent rounded-lg p-8 text-white shadow-accent"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6" />
                <h3 className="text-xl font-bold">Horarios de Atención</h3>
              </div>
              <div className="space-y-2 text-white/90">
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 8:00 AM - 5:00 PM</p>
                <p>Domingos: 9:00 AM - 4:00 PM</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-4"
            >
              <Button 
                variant="premium" 
                size="lg" 
                className="flex-1"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=573174375399&text=Hola%20Me%20Interesa%20un%20Veh%C3%ADculo%20Nuevo", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button 
                variant="metallic" 
                size="lg" 
                className="flex-1"
                onClick={() => window.open("tel:018005188220", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;