"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import { Button } from "@/components/ui/button"
import { Play, Phone, MessageCircle, ArrowRight, Award, Shield, Users } from "lucide-react"

const CorautosHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden"
      id="inicio"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        
        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.05, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 min-h-screen flex items-center z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30"
            >
              <Award className="w-4 h-4 mr-2" />
              17 años de experiencia
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                El Futuro de la
                <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Movilidad Comercial
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Descubre la nueva generación de vehículos comerciales con 
                tecnología avanzada, eficiencia energética y diseño innovador.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {isInView && <CountUp end={1500} duration={2.5} />}+
                </div>
                <div className="text-gray-400 text-sm">Clientes Satisfechos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {isInView && <CountUp end={70} duration={2.5} />}%
                </div>
                <div className="text-gray-400 text-sm">Ahorro en Combustible</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {isInView && <CountUp end={24} duration={2.5} />}/7
                </div>
                <div className="text-gray-400 text-sm">Soporte Técnico</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-blue-500/25"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar por WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-300 hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                (317) 437-5399
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start items-center pt-8"
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Garantía Extendida</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Asesoría Especializada</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Certificación ISO</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Vehicle Showcase */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 100 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {/* Main Vehicle Image */}
            <div className="relative">
              {/* Placeholder for vehicle image - replace with actual Foton/Dongfeng image */}
              <motion.div
                className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Vehicle silhouette/placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="text-6xl text-gray-600">🚛</div>
                
                {/* Floating badges */}
                <motion.div
                  className="absolute top-6 left-6 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Eco-Friendly
                </motion.div>
                
                <motion.div
                  className="absolute top-6 right-6 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Alta Durabilidad
                </motion.div>
                
                <motion.div
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  Tecnología Avanzada
                </motion.div>
              </motion.div>

              {/* Video Play Button */}
              <motion.button
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-6 hover:bg-white/20 transition-all duration-300">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </motion.button>
            </div>

            {/* Floating Info Cards */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white rounded-xl p-4 shadow-2xl hidden lg:block"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <div className="text-sm text-gray-600 mb-1">Desde</div>
              <div className="text-2xl font-bold text-gray-900">$65,000</div>
              <div className="text-xs text-gray-500">USD + IVA</div>
            </motion.div>

            <motion.div
              className="absolute -top-8 -right-8 bg-white rounded-xl p-4 shadow-2xl hidden lg:block"
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <div className="text-sm text-gray-600 mb-1">Financiación</div>
              <div className="text-2xl font-bold text-gray-900">0%</div>
              <div className="text-xs text-gray-500">interés*</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 2.4 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CorautosHero