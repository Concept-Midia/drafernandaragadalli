import React from 'react';
import { motion } from 'framer-motion';

const OfficialWhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.93C20.28 16.48 16.59 20.15 12.04 20.15ZM16.57 14.38C16.32 14.25 15.09 13.65 14.86 13.56C14.63 13.48 14.47 13.44 14.3 13.69C14.13 13.94 13.65 14.51 13.51 14.68C13.36 14.84 13.22 14.86 12.97 14.74C12.72 14.61 11.66 14.27 10.41 13.15C9.43 12.28 8.77 11.21 8.58 10.88C8.39 10.55 8.56 10.37 8.69 10.25C8.8 10.14 8.94 9.96 9.06 9.81C9.19 9.66 9.23 9.56 9.31 9.39C9.39 9.22 9.35 9.08 9.29 8.95C9.23 8.82 8.73 7.6 8.52 7.1C8.32 6.61 8.11 6.68 7.96 6.67C7.81 6.66 7.65 6.66 7.48 6.66C7.32 6.66 7.05 6.72 6.82 6.97C6.59 7.22 5.95 7.82 5.95 9.06C5.95 10.3 6.85 11.5 6.98 11.67C7.11 11.83 8.76 14.38 11.28 15.47C11.88 15.73 12.35 15.89 12.71 16C13.32 16.19 13.87 16.16 14.3 16.1C14.79 16.03 15.79 15.49 16 14.91C16.21 14.33 16.21 13.83 16.14 13.73C16.08 13.63 15.9 13.57 15.65 13.44L16.57 14.38Z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center">
      {/* Single subtle wave with a calm, larger breathing interval */}
      <motion.div
        animate={{
          scale: [1, 1.45],
          opacity: [0.35, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: 'easeOut',
        }}
        className="absolute w-14 h-14 rounded-full bg-[#25D366] pointer-events-none"
      />

      {/* WhatsApp Action Button */}
      <motion.a
        href="https://wa.me/5511999999999?text=Olá%20Dra.%20Fernanda,%20gostaria%20de%20agendar%20uma%20consulta%20de%20avaliação."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Dra. Fernanda no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 15, delay: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_14px_35px_-5px_rgba(37,211,102,0.65)] transition-shadow duration-300 cursor-pointer"
      >
        <OfficialWhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3.5 px-3.5 py-1.5 rounded-full bg-charcoal-900/90 text-white text-xs font-medium tracking-wide whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
          Agendar no WhatsApp
        </span>
      </motion.a>
    </div>
  );
};

