import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fotonImage from "@/assets/foton-adventure.jpg";
import dongfengImage from "@/assets/dongfeng-commercial.jpg";

const BrandsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const brands = [
    {
      name: "FOTON",
      description: "Tu llave para la aventura",
      subtitle: "Vehículos robustos y confiables para trabajo y familia",
      image: fotonImage,
      phone: "(317) 437-5399",
      link: "https://www.foton.com.co/",
      features: ["Garantía extendida", "Repuestos originales", "Servicio técnico"]
    },
    {
      name: "DONGFENG", 
      description: "Resistencia para tu negocio",
      subtitle: "Camiones comerciales de alta durabilidad",
      image: dongfengImage,
      phone: "(333) 640-5436",
      link: "https://www.dongfengcorautosandino.com/",
      features: ["Mayor capacidad", "Tecnología avanzada", "Soporte 24/7"]
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
            Marcas de{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Confianza
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Representantes oficiales de las marcas más reconocidas en vehículos comerciales y de aventura
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 transform hover:scale-[1.02]">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={`${brand.name} vehículos`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{brand.name}</h3>
                    <p className="text-lg font-medium text-accent-light">{brand.description}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{brand.subtitle}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {brand.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="premium" className="flex-1">
                      Ver Modelos
                    </Button>
                    <Button variant="outline" className="flex-1">
                      {brand.phone}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;