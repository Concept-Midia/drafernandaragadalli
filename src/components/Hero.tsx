import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import { RollInHeading } from './RollInHeading';

export const Hero: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/5511999999999?text=Olá%20Dra.%20Fernanda,%20gostaria%20de%20agendar%20minha%20consulta%20de%20avaliação.';

  return (
    <section
      id="inicio"
      className="relative h-[100dvh] max-h-[100dvh] lg:h-auto lg:min-h-screen pt-12 pb-7 sm:pb-10 lg:pt-32 lg:pb-20 overflow-hidden flex items-end lg:items-center bg-[#FAF6F0]"
    >
      {/* Hero Background - Responsive Desktop & Mobile Banners */}
      <picture className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <source media="(max-width: 768px)" srcSet="/banner-mobile.jpg" />
        <img
          src="/banner-desktop.jpg"
          alt="Dra. Fernanda Ragadalli - Especialista em Facetas e Estética Dental em Videira SC"
          className="w-full h-full object-cover object-top sm:object-center lg:object-right"
          loading="eager"
        />
      </picture>

      {/* Smooth Gradient Overlay on Mobile */}
      <div className="absolute inset-0 pointer-events-none lg:hidden bg-gradient-to-b from-transparent from-25% via-[#FAF6F0]/85 via-50% to-[#FAF6F0] to-88% z-[1]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 pb-2 sm:pb-6 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end lg:items-center">
          {/* CONTENT COLUMN: Centered on mobile, left-aligned on desktop */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left justify-end lg:justify-center">
            {/* Top Category Tag / Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-2.5 sm:mb-3.5"
            >
              <div className="inline-flex items-center justify-center px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E5DACD] shadow-sm text-center">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.24em] text-brand-600 whitespace-nowrap">
                  Facetas &amp; Lentes em Cerâmica · Videira - SC
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <div className="mb-2.5 sm:mb-3.5 lg:mb-7 max-w-[340px] sm:max-w-md lg:max-w-none mx-auto lg:mx-0">
              <RollInHeading
                as="h1"
                className="font-serif text-[32px] sm:text-[38px] md:text-5xl lg:text-[72px] leading-[1.1] text-white font-semibold tracking-[-0.015em]"
                words={[
                  { text: 'A' },
                  { text: 'arte' },
                  { text: 'de', hasLineBreak: true },
                  { text: 'transformar', isItalic: true, colorClass: 'text-[#B8986C]' },
                  { text: 'sorrisos', hasLineBreak: true },
                  { text: 'com', isItalic: true, colorClass: 'text-[#B8986C]' },
                  { text: 'naturalidade' },
                ]}
              />
            </div>

            {/* Subtitle / Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-4 sm:mb-6 lg:mb-9 max-w-[330px] sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0"
            >
              <p className="font-sans text-[13px] sm:text-base lg:text-lg text-charcoal-700/85 font-light leading-relaxed">
                Cirurgiã-Dentista (CRO-SC 9331) especialista em facetas de resina e lentes em cerâmica. Planejamento anatômico e odontologia estética com máxima naturalidade e sofisticação em Videira - SC.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C5A880] hover:bg-[#B8986C] text-white font-semibold text-xs sm:text-sm lg:text-base tracking-wide shadow-[0_12px_28px_-6px_rgba(197,168,128,0.45)] hover:shadow-[0_18px_36px_-6px_rgba(197,168,128,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span className="flex items-center gap-2">
                  <span>Agendar Consulta de Avaliação</span>
                  <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#procedimentos"
                className="hidden lg:inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white/70 hover:bg-white text-charcoal-800 hover:text-brand-600 border border-[#E5DACD] text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 w-full sm:w-auto shadow-sm"
              >
                <span>Conhecer Tratamentos</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE FLOATING CREDENTIAL (Desktop only - Descendo exatamente a altura do card: 98px) */}
          <div className="hidden lg:col-span-5 lg:flex lg:flex-col lg:items-end justify-center relative">
            <div className="mt-[98px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-white/95 backdrop-blur-xl border border-[#E5DACD] rounded-3xl p-5 shadow-[0_20px_50px_-15px_rgba(50,30,20,0.18)] max-w-xs animate-float-slow"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-[#B8860B]" />
                  </div>
                  <div>
                    <h4 className="font-serif italic font-semibold text-lg text-charcoal-900 leading-tight">
                      Dra. Fernanda Ragadalli
                    </h4>
                    <p className="text-xs text-[#B8860B] font-semibold mt-0.5">
                      Facetas & Lentes de Contato
                    </p>
                    <p className="text-[11px] text-charcoal-700/75">
                      CRO-SC 9331 · Videira - SC
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
