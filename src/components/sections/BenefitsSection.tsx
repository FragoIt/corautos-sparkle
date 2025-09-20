import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, CreditCard, Wrench, Users, Clock, Award } from "lucide-react";

const BenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por Qué Elegir{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Corautos Andino?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de una década de experiencia respaldando a nuestros clientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -30 : 30,
                y: 20 
              }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="group"
            >
              <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-105 border border-border/50">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-background to-muted ${benefit.color} shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110`}>
                    <benefit.icon className="h-8 w-8" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;