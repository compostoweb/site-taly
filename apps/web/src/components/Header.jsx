
import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const whatsappLink = "https://wa.me/5521982320012?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seu%20trabalho";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-primary/95 backdrop-blur-md shadow-lg py-2' : 'bg-brand-primary py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="flex items-center gap-2 sm:gap-3 group transition-all duration-200 text-left"
          >
            <div className="text-2xl sm:text-3xl text-white leading-none flex-shrink-0" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 300 }}>
              ψ
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-white text-xl sm:text-2xl font-light leading-tight tracking-wide" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Taly May Braga
              </div>
              <div className="text-white/80 text-[9px] sm:text-[10px] font-light mt-0.5" style={{ letterSpacing: '0.2em', fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                PSICOLOGIA &amp; PSICANÁLISE
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-white/90 hover:text-white text-sm font-medium transition-all duration-200 hover:scale-105">
              Sobre
            </a>
            <a href="#atendimento" className="text-white/90 hover:text-white text-sm font-medium transition-all duration-200 hover:scale-105">
              Atendimento
            </a>
            <a href="#demandas" className="text-white/90 hover:text-white text-sm font-medium transition-all duration-200 hover:scale-105">
              Demandas
            </a>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-brand-primary px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:shadow-md active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 bg-white text-brand-primary rounded-full hover:bg-white/90 transition-all duration-200 active:scale-[0.98] shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 -mr-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-primary border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <a href="#sobre" onClick={closeMenu} className="text-white text-left text-lg font-medium py-2 border-b border-white/10 block">
                Sobre
              </a>
              <a href="#atendimento" onClick={closeMenu} className="text-white text-left text-lg font-medium py-2 border-b border-white/10 block">
                Atendimento
              </a>
              <a href="#demandas" onClick={closeMenu} className="text-white text-left text-lg font-medium py-2 border-b border-white/10 block">
                Demandas
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-white text-brand-primary px-5 py-3.5 rounded-xl font-semibold text-base mt-4 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
