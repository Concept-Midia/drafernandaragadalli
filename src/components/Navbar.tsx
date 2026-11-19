import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onHomeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      if (!scrolled) {
        setMobileMenuOpen(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const whatsappUrl =
    'https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Fernanda%20Ragadalli';

  return (
    <header
      className={`fixed left-0 right-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300 pointer-events-none ${
        isScrolled
          ? 'top-3 sm:top-4 opacity-100 translate-y-0 visible'
          : 'top-0 opacity-0 pointer-events-none -translate-y-4 invisible lg:opacity-100 lg:pointer-events-auto lg:translate-y-0 lg:visible'
      }`}
    >
      <div
        className={`w-full pointer-events-auto transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? 'max-w-4xl bg-[#D6D0C9]/65 backdrop-blur-2xl backdrop-saturate-150 rounded-full py-1.5 sm:py-2 px-4 sm:px-6 border border-white/50 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12)]'
            : 'max-w-7xl py-4 sm:py-6 px-4 sm:px-8 bg-transparent border-b border-transparent'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#inicio"
          onClick={handleLinkClick}
          className="group flex flex-col cursor-pointer flex-shrink-0"
        >
          <span
            className={`font-serif italic tracking-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] font-normal group-hover:text-[#C5A880] transition-all duration-300 ${
              isScrolled ? 'text-lg sm:text-[20px]' : 'text-2xl sm:text-[26px]'
            }`}
          >
            Dra. Fernanda Ragadalli
          </span>
          <span
            aria-label="Estética Dental"
            className="w-full flex justify-between items-center text-[9.5px] sm:text-[10px] uppercase text-[#C5A880] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] font-medium select-none -mt-0.5"
          >
            {'ESTÉTICA DENTAL'.split('').map((char, index) => (
              <span key={index} aria-hidden="true">
                {char === ' ' ? '\u00A0\u00A0' : char}
              </span>
            ))}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="text-xs sm:text-[13px] font-medium tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] hover:text-[#C5A880] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button (Dourado com texto branco) */}
        <div className="hidden sm:flex items-center flex-shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold text-white bg-[#C5A880] hover:bg-[#B8986C] active:scale-95 transition-all duration-300 shadow-[0_4px_16px_rgba(197,168,128,0.35)] hover:shadow-[0_8px_24px_rgba(197,168,128,0.5)] whitespace-nowrap"
          >
            <span>Agendar consulta</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir Menu"
          className="lg:hidden p-2 rounded-full text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] hover:text-[#C5A880] hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-20 left-4 right-4 z-50 rounded-3xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen
            ? 'max-h-96 opacity-100 border border-white/40 bg-[#D6D0C9]/90 backdrop-blur-2xl shadow-xl'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-base font-medium text-white/90 hover:text-[#C5A880] py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#C5A880] hover:bg-[#B8986C] transition-all shadow-md"
            >
              <span>Agendar consulta</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
