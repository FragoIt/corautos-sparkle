import ModernHeader from "@/components/layout/ModernHeader"
import CorautosHero from "@/components/sections/CorautosHero"

const CorautosDemo = () => {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      <CorautosHero />
      
      {/* Placeholder sections for demo */}
      <section id="vehiculos" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Vehículos</h2>
          <p className="text-gray-600">Sección de catálogo de vehículos</p>
        </div>
      </section>
      
      <section id="usados" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vehículos Usados</h2>
          <p className="text-gray-600">Sección de vehículos usados certificados</p>
        </div>
      </section>
      
      <section id="renting" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Renting</h2>
          <p className="text-gray-600">Sección de servicios de renting</p>
        </div>
      </section>
      
      <section id="contacto" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-gray-600">Sección de contacto y ubicaciones</p>
        </div>
      </section>
    </div>
  )
}

export default CorautosDemo