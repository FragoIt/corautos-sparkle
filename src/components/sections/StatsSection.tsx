import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      number: 15,
      suffix: "+",
      label: "Años de Experiencia",
      description: "Respaldando el crecimiento empresarial colombiano"
    },
    {
      number: 2500,
      suffix: "+",
      label: "Vehículos Vendidos",
      description: "Clientes satisfechos en todo el país"
    },
    {
      number: 98,
      suffix: "%",
      label: "Satisfacción del Cliente",
      description: "Calificación promedio de nuestros servicios"
    },
    {
      number: 24,
      suffix: "/7",
      label: "Soporte Disponible",
      description: "Asistencia técnica cuando la necesites"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Números que Hablan por{" "}
            <span className="text-accent-light">
              Nosotros
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Una trayectoria sólida construida sobre la confianza de nuestros clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-accent-light mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-white/70 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;