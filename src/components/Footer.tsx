import React from 'react';
import { ChevronRight } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.93C20.28 16.48 16.59 20.15 12.04 20.15ZM16.57 14.38C16.32 14.25 15.09 13.65 14.86 13.56C14.63 13.48 14.47 13.44 14.3 13.69C14.13 13.94 13.65 14.51 13.51 14.68C13.36 14.84 13.22 14.86 12.97 14.74C12.72 14.61 11.66 14.27 10.41 13.15C9.43 12.28 8.77 11.21 8.58 10.88C8.39 10.55 8.56 10.37 8.69 10.25C8.8 10.14 8.94 9.96 9.06 9.81C9.19 9.66 9.23 9.56 9.31 9.39C9.39 9.22 9.35 9.08 9.29 8.95C9.23 8.82 8.73 7.6 8.52 7.1C8.32 6.61 8.11 6.68 7.96 6.67C7.81 6.66 7.65 6.66 7.48 6.66C7.32 6.66 7.05 6.72 6.82 6.97C6.59 7.22 5.95 7.82 5.95 9.06C5.95 10.3 6.85 11.5 6.98 11.67C7.11 11.83 8.76 14.38 11.28 15.47C11.88 15.73 12.35 15.89 12.71 16C13.32 16.19 13.87 16.16 14.3 16.1C14.79 16.03 15.79 15.49 16 14.91C16.21 14.33 16.21 13.83 16.14 13.73C16.08 13.63 15.9 13.57 15.65 13.44L16.57 14.38Z" />
  </svg>
);

interface FooterProps {
  onNavigate?: (page: 'privacidade' | 'termos') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#070605] text-white pt-16 sm:pt-20 pb-12 rounded-t-[36px] sm:rounded-t-[48px] border-t border-[#1C1816] relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#C5A880]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#1A1614]">
          {/* COLUMN 1: Brand & Logo */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <a href="#inicio" className="group inline-block mb-4">
              <span className="font-serif italic text-3xl sm:text-[34px] tracking-tight text-[#F3EBE3] font-normal group-hover:text-white transition-colors">
                Dra. Letícia Almeida
              </span>
              <span className="block text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#C5A880] font-medium mt-0.5">
                Harmonização Facial
              </span>
            </a>

            <p className="font-sans text-xs sm:text-sm text-[#F3EBE3]/75 leading-relaxed font-light max-w-sm mb-6">
              Harmonização Orofacial e protocolos de Full Face de alto padrão anatômico, focados em rejuvenescimento elegante, sustentação e naturalidade em Rio Verde - GO.
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] text-[#C5A880] font-medium tracking-wider uppercase bg-[#131110] px-3.5 py-1.5 rounded-full border border-[#241F1C] w-fit">
              <span>Dra. Letícia Almeida · Especialista em Full Face</span>
            </div>
          </div>

          {/* COLUMN 2: Navegação */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-base font-semibold text-white tracking-wide mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[#F3EBE3]/80 hover:text-[#C5A880] transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A880] opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Links Úteis */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-base font-semibold text-white tracking-wide mb-5">
              Links Úteis
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate ? onNavigate('privacidade') : (window.location.hash = 'privacidade')}
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[#F3EBE3]/80 hover:text-[#C5A880] transition-colors duration-200 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A880] opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                  <span>Política de Privacidade</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate ? onNavigate('termos') : (window.location.hash = 'termos')}
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm text-[#F3EBE3]/80 hover:text-[#C5A880] transition-colors duration-200 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A880] opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                  <span>Termos e Condições</span>
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Redes Sociais & Contato */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-base font-semibold text-white tracking-wide mb-5">
              Redes Sociais
            </h4>
            
            <div className="flex items-center gap-5 pt-1">
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/5511999999999?text=Olá%20Dra.%20Letícia,%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial"
                className="text-[#F3EBE3]/85 hover:text-[#C5A880] transition-all duration-300 hover:scale-125 inline-flex items-center justify-center p-1"
              >
                <WhatsAppIcon className="w-6 h-6 fill-current" />
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/draleticialbalmeida/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial"
                className="text-[#F3EBE3]/85 hover:text-[#C5A880] transition-all duration-300 hover:scale-125 inline-flex items-center justify-center p-1"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>

            <p className="text-xs text-[#C5A880] mt-4 font-medium">
              @draleticialbalmeida
            </p>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 text-center">
          <p className="font-sans text-xs text-[#F3EBE3]/65 font-normal tracking-wide">
            © 2026 Dra. Letícia Almeida. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-[#F3EBE3]/40 mt-1 font-light">
            Responsável Técnica: Dra. Letícia Almeida · Cirurgiã-Dentista · Rio Verde - GO
          </p>
        </div>
      </div>
    </footer>
  );
};
