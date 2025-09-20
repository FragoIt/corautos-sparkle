import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import teamImage from "@/assets/team-dealership.jpg";

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Historias de{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Éxito
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Más de 15 años acompañando el crecimiento de empresas y familias colombianas. 
                Cada vehículo que entregamos representa una historia de confianza y satisfacción.
              </p>

              <div className="relative rounded-xl overflow-hidden shadow-elegant group">
                <img
                  src={teamImage}
                  alt="Equipo profesional de Corautos Andino"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
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
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Lo Que Dicen Nuestros Clientes
              </h3>
              <p className="text-muted-foreground">
                Testimonios reales de quienes confían en nosotros
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  <Card className="shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02] border border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Quote className="h-8 w-8 text-accent opacity-60" />
                        </div>
                        
                        <div className="space-y-4">
                          <p className="text-muted-foreground italic leading-relaxed">
                            "{testimonial.testimonial}"
                          </p>
                          
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                            ))}
                          </div>
                          
                          <div className="border-t border-border pt-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-foreground">
                                  {testimonial.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.role}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-muted-foreground">
                                  {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;