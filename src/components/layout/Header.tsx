import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Marcas", href: "#marcas" },
    { name: "Galería", href: "#galeria" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-elegant" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">CA</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                Corautos
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}>
                Andino
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className={`font-medium transition-all duration-300 hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`transition-colors duration-300 ${
                isScrolled 
                  ? "text-foreground hover:text-accent" 
                  : "text-white hover:text-accent-light"
              }`}
              onClick={() => window.open("tel:018005188220", "_self")}
            >
              <Phone className="h-4 w-4 mr-2" />
              01 800 51-88-22
            </Button>
            <Button
              variant={isScrolled ? "premium" : "hero"}
              size="sm"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=573174375399&text=Hola%20Me%20Interesa%20un%20Veh%C3%ADculo%20Nuevo", "_blank")}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-elegant"
        >
          <nav className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block font-medium text-foreground hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  window.open("tel:018005188220", "_self");
                  setIsOpen(false);
                }}
              >
                <Phone className="h-4 w-4 mr-2" />
                01 800 51-88-22
              </Button>
              <Button
                variant="premium"
                size="sm"
                className="w-full"
                onClick={() => {
                  window.open("https://api.whatsapp.com/send?phone=573174375399&text=Hola%20Me%20Interesa%20un%20Veh%C3%ADculo%20Nuevo", "_blank");
                  setIsOpen(false);
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;