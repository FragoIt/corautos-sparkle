import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-dealership.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Corautos Andino - Concesionario Premium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tu Vehículo{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Perfecto
            </span>
            <br />
            Te Está Esperando
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
        >
          Concesionario oficial FOTON y DONGFENG en Colombia. 
          La mejor opción para tu negocio y aventura.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" className="min-w-[200px]">
            Ver Catálogo
          </Button>
          <Button variant="metallic" size="xl" className="min-w-[200px]">
            <Phone className="mr-2 h-5 w-5" />
            Llamar Ahora
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm"
        >
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>01 800 51-88-22</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>(317) 437-5399</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm">Descubre más</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;