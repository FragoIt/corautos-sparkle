import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

// Información del vehículo destacado - FOTON Tunland 2024
const VEHICLE_INFO = {
  brand: "FOTON",
  model: "Tunland 2024",
  version: "Cabina Doble 4x4 Turbo Diesel",
  price: "Desde $89,900,000",
  financing: "Cuotas desde $1,890,000/mes",
  year: 2024,
  mileage: "0 KM",
  engine: "2.8L Turbo Diesel",
  transmission: "Manual 5 velocidades",
  fuel: "Diesel",
  power: "150 HP",
  torque: "350 Nm",
  drivetrain: "4x4",
  payload: "1,000 kg",
  seating: "5 pasajeros",
  warranty: "5 años o 150,000 km"
};

// Galería de imágenes reales del FOTON Tunland
const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "FOTON Tunland - Vista frontal exterior",
    thumbnail: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    category: "exterior"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Interior cabina - Tablero y controles",
    thumbnail: "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    category: "interior"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Vista lateral - Diseño robusto",
    thumbnail: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    category: "exterior"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Área de carga - Platón resistente",
    thumbnail: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    category: "utility"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Vista trasera - Luces LED",
    thumbnail: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    category: "exterior"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1607603750916-8bc3d20c9ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Asientos traseros - Confort familiar",
    thumbnail: "https://images.unsplash.com/photo-1607603750916-8bc3d20c9ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    category: "interior"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Motor Turbo Diesel 2.8L",
    thumbnail: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    category: "engine"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1617469955808-82509bfed9bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Capacidades 4x4 - Todo terreno",
    thumbnail: "https://images.unsplash.com/photo-1617469955808-82509bfed9bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    category: "performance"
  }
];

const ThumbnailGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mainImageRef = useRef<HTMLImageElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Función para cambiar imagen principal con animación GSAP
  const changeMainImage = useCallback((newIndex: number) => {
    if (newIndex === currentImageIndex || isTransitioning) return;

    setIsTransitioning(true);
    const mainImage = mainImageRef.current;
    
    if (mainImage) {
      // Timeline para transición suave
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentImageIndex(newIndex);
          setIsTransitioning(false);
        }
      });

      // Fade out imagen actual
      tl.to(mainImage, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.inOut"
      })
      // Cambiar source y fade in nueva imagen
      .call(() => {
        mainImage.src = GALLERY_IMAGES[newIndex].url;
        mainImage.alt = GALLERY_IMAGES[newIndex].alt;
      })
      .to(mainImage, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [currentImageIndex, isTransitioning]);

  // Efectos de hover para thumbnails
  const handleThumbnailHover = useCallback((index: number, isEntering: boolean) => {
    const thumbnail = thumbnailRefs.current[index];
    if (!thumbnail) return;

    if (isEntering) {
      gsap.to(thumbnail, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
      });
      
      // Agregar borde dorado
      gsap.to(thumbnail.querySelector('.thumbnail-border'), {
        borderColor: "#fbbf24",
        borderWidth: "3px",
        duration: 0.2,
        ease: "power2.out"
      });
    } else {
      gsap.to(thumbnail, {
        scale: index === currentImageIndex ? 1.05 : 1,
        duration: 0.2,
        ease: "power2.out"
      });
      
      // Restaurar borde
      gsap.to(thumbnail.querySelector('.thumbnail-border'), {
        borderColor: index === currentImageIndex ? "#fbbf24" : "transparent",
        borderWidth: index === currentImageIndex ? "3px" : "2px",
        duration: 0.2,
        ease: "power2.out"
      });
    }
  }, [currentImageIndex]);

  // Animación inicial de entrada
  useEffect(() => {
    const gallery = galleryRef.current;
    const mainImage = mainImageRef.current;
    const thumbnails = thumbnailRefs.current;

    if (gallery && mainImage) {
      const tl = gsap.timeline();
      
      // Animar entrada de imagen principal
      tl.from(mainImage, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power3.out"
      })
      // Animar entrada de thumbnails con stagger
      .from(thumbnails, {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out"
      }, "-=0.3");
    }
  }, []);

  // Actualizar estado activo de thumbnails
  useEffect(() => {
    thumbnailRefs.current.forEach((thumbnail, index) => {
      if (thumbnail) {
        const border = thumbnail.querySelector('.thumbnail-border');
        if (border) {
          gsap.to(border, {
            borderColor: index === currentImageIndex ? "#fbbf24" : "transparent",
            borderWidth: index === currentImageIndex ? "3px" : "2px",
            duration: 0.3,
            ease: "power2.out"
          });
        }
        
        gsap.to(thumbnail, {
          scale: index === currentImageIndex ? 1.05 : 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  }, [currentImageIndex]);

  return (
    <div ref={galleryRef} className="w-full max-w-6xl mx-auto p-6">
      {/* Imagen Principal */}
      <div className="relative mb-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
        <div className="aspect-[16/10] relative">
          <img
            ref={mainImageRef}
            src={GALLERY_IMAGES[currentImageIndex].url}
            alt={GALLERY_IMAGES[currentImageIndex].alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          
          {/* Overlay con información del vehículo */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
            <div className="text-white">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    {VEHICLE_INFO.brand} {VEHICLE_INFO.model}
                  </h3>
                  <p className="text-lg text-amber-300 font-semibold">
                    {VEHICLE_INFO.price}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90 mb-1">
                    {GALLERY_IMAGES[currentImageIndex].alt}
                  </p>
                  <p className="text-xs opacity-75">
                    {currentImageIndex + 1} de {GALLERY_IMAGES.length}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-blue-600/80 rounded-full">
                  {VEHICLE_INFO.engine}
                </span>
                <span className="px-2 py-1 bg-green-600/80 rounded-full">
                  {VEHICLE_INFO.drivetrain}
                </span>
                <span className="px-2 py-1 bg-purple-600/80 rounded-full">
                  {VEHICLE_INFO.year} - {VEHICLE_INFO.mileage}
                </span>
              </div>
            </div>
          </div>
          
          {/* Indicador de carga */}
          {isTransitioning && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>

      {/* Galería de Thumbnails */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
        {GALLERY_IMAGES.map((image, index) => (
          <button
            key={image.id}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            onClick={() => changeMainImage(index)}
            onMouseEnter={() => handleThumbnailHover(index, true)}
            onMouseLeave={() => handleThumbnailHover(index, false)}
            className="relative group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 rounded-lg"
            disabled={isTransitioning}
          >
            <div className="thumbnail-border aspect-square rounded-lg overflow-hidden border-2 border-transparent transition-all duration-200">
              <img
                src={image.thumbnail}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            
            {/* Overlay de hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 rounded-lg flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Indicador activo */}
            {index === currentImageIndex && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-amber-400 rounded-full shadow-lg"></div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Controles de navegación */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex space-x-2">
          <button
            onClick={() => changeMainImage(Math.max(0, currentImageIndex - 1))}
            disabled={currentImageIndex === 0 || isTransitioning}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:opacity-50 rounded-lg transition-colors duration-200 font-medium"
          >
            ← Anterior
          </button>
          <button
            onClick={() => changeMainImage(Math.min(GALLERY_IMAGES.length - 1, currentImageIndex + 1))}
            disabled={currentImageIndex === GALLERY_IMAGES.length - 1 || isTransitioning}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:opacity-50 rounded-lg transition-colors duration-200 font-medium"
          >
            Siguiente →
          </button>
        </div>
        
        <div className="text-sm text-gray-600 font-medium">
          {currentImageIndex + 1} / {GALLERY_IMAGES.length}
        </div>
      </div>

      {/* Información del vehículo y especificaciones */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                {VEHICLE_INFO.brand} {VEHICLE_INFO.model}
              </h3>
              <p className="text-blue-100 text-lg">{VEHICLE_INFO.version}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-amber-300">{VEHICLE_INFO.price}</p>
              <p className="text-blue-100">{VEHICLE_INFO.financing}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Especificaciones técnicas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
                Motor y Rendimiento
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Motor:</span>
                  <span className="font-medium">{VEHICLE_INFO.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Potencia:</span>
                  <span className="font-medium">{VEHICLE_INFO.power}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Torque:</span>
                  <span className="font-medium">{VEHICLE_INFO.torque}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transmisión:</span>
                  <span className="font-medium">{VEHICLE_INFO.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tracción:</span>
                  <span className="font-medium">{VEHICLE_INFO.drivetrain}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
                Capacidades
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pasajeros:</span>
                  <span className="font-medium">{VEHICLE_INFO.seating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Carga útil:</span>
                  <span className="font-medium">{VEHICLE_INFO.payload}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Combustible:</span>
                  <span className="font-medium">{VEHICLE_INFO.fuel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kilometraje:</span>
                  <span className="font-medium">{VEHICLE_INFO.mileage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Garantía:</span>
                  <span className="font-medium">{VEHICLE_INFO.warranty}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
                Contacto Corautos Andino
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">01 800 51-88-22</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm text-gray-700">(317) 437-5399</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Bogotá - Medellín</span>
                </div>
                <button 
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=573174375399&text=Hola%20Me%20Interesa%20el%20FOTON%20Tunland%202024", "_blank")}
                  className="w-full mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailGallery;