import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after small delay on page load unless previously closed
    const dismissed = sessionStorage.getItem('cookie_notice_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('cookie_notice_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 z-40 max-w-[340px] sm:max-w-md bg-[#FAF6F0]/95 backdrop-blur-xl border border-[#E5DACD] rounded-2xl p-4 sm:p-5 shadow-[0_15px_40px_-10px_rgba(50,30,20,0.18)]"
        >
          <div className="flex items-start gap-3.5">
            {/* Icon */}
            <div className="w-8 h-8 rounded-full bg-brand-50 border border-brand-200/80 flex items-center justify-center text-brand-600 flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
            </div>

            {/* Content */}
            <div className="flex-1 pr-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-1">
                Privacidade & Segurança
              </h4>
              <p className="text-xs text-charcoal-700/85 leading-relaxed font-normal">
                Este site <strong className="font-semibold text-brand-900">não coleta cookies de rastreamento</strong> nem armazena dados de navegação. Sua visita é 100% privativa e segura.
              </p>

              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={handleDismiss}
                  className="px-4 py-1.5 rounded-full bg-[#C5A880] hover:bg-[#B8986C] text-white text-[11px] font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
                >
                  Entendido
                </button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              aria-label="Fechar aviso"
              className="text-charcoal-700/60 hover:text-charcoal-900 p-1 -mr-1 -mt-1 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

