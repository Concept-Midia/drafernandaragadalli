import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { RollInHeading } from './RollInHeading';

export const Sobre: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-28 bg-[#FAF6F0] relative overflow-hidden"
    >
      {/* Subtle Ambient Background Warmth */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#EAE0D3]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-brand-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Organic Shaped Doctor Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Organic Mocha Backdrop Aura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#E4D4C8]/60 to-[#EAE0D3]/70 rounded-[180px_70px_190px_50px] blur-xl -z-10 animate-pulse-subtle"
            />

            {/* Organic Mask Container */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] lg:max-w-[440px] aspect-[4/5] overflow-hidden shadow-[0_25px_60px_-15px_rgba(50,30,20,0.18)] border-2 border-white/80 group"
              style={{
                borderRadius: '52% 48% 68% 32% / 42% 54% 46% 58%',
              }}
            >
              <img
                src="/sobre-a-dra.jpg"
                alt="Dra. Fernanda Ragadalli"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Soft Gradient Overlay at Base */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Credential Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-4 left-2 sm:-bottom-5 sm:left-4 z-20 bg-white/95 backdrop-blur-md border border-[#E5DACD] rounded-2xl py-3 px-4 shadow-[0_12px_28px_-6px_rgba(50,30,20,0.14)] flex items-center gap-3 animate-float-slow"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">
                <Sparkles className="w-4 h-4 text-gold-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-charcoal-900 leading-tight">Dra. Fernanda Ragadalli</p>
                <p className="text-[11px] text-brand-600 font-medium">Estética Dental · CRO-SC 9331</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Content with Weighted Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 block">
                Quem Sou
              </span>
            </motion.div>

            {/* Headline */}
            <RollInHeading
              as="h2"
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-charcoal-900 leading-[1.08] mb-6"
              words={[
                { text: 'Conheça' },
                { text: 'a', hasLineBreak: true },
                { text: 'Dra.', isItalic: true, colorClass: 'text-brand-600' },
                { text: 'Fernanda', isItalic: true, colorClass: 'text-brand-600' },
                { text: 'Ragadalli', isItalic: true, colorClass: 'text-brand-600' },
              ]}
            />

            {/* Paragraph 1: Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-lg sm:text-xl font-normal text-charcoal-900 leading-snug mb-5"
            >
              Cirurgiã-Dentista (CRO-SC 9331), especialista em facetas de resina e lentes em cerâmica. Minha missão é transformar sorrisos com máxima harmonia, sofisticação e naturalidade em Videira - SC.
            </motion.p>

            {/* Paragraph 2: Secondary description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base text-charcoal-700/80 font-light leading-relaxed mb-8"
            >
              Acredito que transformar um sorriso não é criar um padrão artificial, mas sim valorizar as proporções únicas de cada rosto. Com olhar estético apurado, técnica refinada e materiais de altíssima qualidade, desenvolvi uma abordagem focada em naturalidade, preservação da estrutura dental e resultados harmônicos que devolvem a confiança e o prazer de sorrir.
            </motion.p>

            {/* Credentials / Pillars list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Facetas de Resina & Lentes em Cerâmica</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Cirurgiã-Dentista · CRO-SC 9331</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Estética Dental com Naturalidade</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Atendimento Exclusivo em Videira - SC</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
