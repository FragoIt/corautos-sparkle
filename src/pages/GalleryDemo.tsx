import ThumbnailGallery from "../components/gallery/ThumbnailGallery";

const GalleryDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header de la demo */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                FOTON Tunland 2024 - Corautos Andino
              </h1>
              <p className="text-gray-600 mt-1">
                Vehículo comercial 4x4 turbo diesel - Desde $89,900,000
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.open("https://api.whatsapp.com/send?phone=573174375399&text=Hola%20Me%20Interesa%20el%20FOTON%20Tunland%202024", "_blank")}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                WhatsApp
              </button>
              <button 
                onClick={() => window.open("tel:018005188220", "_self")}
                className="px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors duration-200"
              >
                01 800 51-88-22
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Información del vehículo */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FOTON Tunland 2024
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Potente vehículo comercial con motor turbo diesel 2.8L, tracción 4x4 
              y capacidades excepcionales para trabajo pesado y aventura familiar.
              Respaldado por la garantía y soporte de Corautos Andino.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                150 HP - 350 Nm
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                4x4 Manual
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                1,000 kg Carga Útil
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                Garantía 5 años
              </span>
            </div>
          </div>

          {/* Galería de Thumbnails */}
          <ThumbnailGallery />

          {/* Información adicional */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Motor Turbo Diesel 2.8L</h3>
              <p className="text-gray-600 text-sm">
                150 HP y 350 Nm de torque para máximo rendimiento y economía
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Garantía FOTON</h3>
              <p className="text-gray-600 text-sm">
                5 años o 150,000 km con red de servicio Corautos Andino
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">17 Años de Experiencia</h3>
              <p className="text-gray-600 text-sm">
                Grupo Corbeta SA con presencia en Bogotá y Medellín
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryDemo;