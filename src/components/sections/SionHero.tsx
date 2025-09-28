import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const SionHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 mb-4">
                Sion
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6">
                Un auto eléctrico espacioso que se carga a sí mismo con el poder del sol.
              </p>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                29.900€
              </div>
              <p className="text-lg text-green-600 font-semibold">
                5800 km gratis por año
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Reserve ahora
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Ver en acción
              </Button>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left"
            >
              <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200">
                <div className="text-2xl font-bold text-gray-900">54 kWh</div>
                <div className="text-sm text-gray-600">Batería</div>
              </div>
              <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200">
                <div className="text-2xl font-bold text-gray-900">305 km</div>
                <div className="text-sm text-gray-600">Autonomía</div>
              </div>
              <div className="p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200">
                <div className="text-2xl font-bold text-gray-900">112 km</div>
                <div className="text-sm text-gray-600">Solar/semana</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Car Image */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 100 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {/* Main Car Image */}
            <div className="relative">
              <motion.img
                src="https://cdn.prod.website-files.com/63cf96b94c1db31c0bce9013/63cf96b94c1db3b138ce902f_sion-stage-p-800.webp"
                alt="Sion Electric Car"
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Energía Solar
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                100% Eléctrico
              </motion.div>
            </div>

            {/* Background Decoration */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-100/30 to-green-100/30 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SionHero;