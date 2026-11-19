import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { RollInHeading } from './RollInHeading';

const resultsList = [
  { id: 1, image: '/resultado-1.jpg', label: 'Lentes de Contato Dental' },
  { id: 2, image: '/resultado-2.jpg', label: 'Reabilitação do Sorriso' },
  { id: 3, image: '/resultado-3.jpg', label: 'Facetas Estéticas' },
  { id: 4, image: '/resultado-4.jpg', label: 'Transformação do Sorriso' },
  { id: 5, image: '/resultado-5.jpg', label: 'Estética & Clareamento' },
];

export const Resultados: React.FC = () => {
  // Duplicar para loop contínuo e infinito sem quebras
  const carouselItems = [...resultsList, ...resultsList];

  const whatsappUrl =
    'https://wa.me/5511999999999?text=Olá%20Dra.%20Fernanda,%20vi%20os%20resultados%20no%20site%20e%20gostaria%20de%20agendar%20minha%20avaliação.';

  return (
    <section
      id="resultados"
      className="py-20 sm:py-28 bg-[#F4ECE3] border-b border-[#E5DACD] relative overflow-hidden"
    >
      {/* Subtle Ambient Background Warmth */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[350px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Left Title */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 block mb-3"
            >
              Casos Clínicos & Transformações
            </motion.span>
            <RollInHeading
              as="h2"
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-charcoal-900 leading-[1.08]"
              words={[
                { text: 'Resultados' },
                { text: 'reais' },
                { text: 'de', hasLineBreak: true },
                { text: 'quem', isItalic: true, colorClass: 'text-brand-600' },
                { text: 'confiou', isItalic: true, colorClass: 'text-brand-600' },
                { text: 'em', isItalic: true, colorClass: 'text-brand-600' },
                { text: 'mim', isItalic: true, colorClass: 'text-brand-600' },
              ]}
            />
          </div>

          {/* Right Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:max-w-md"
          >
            <p className="font-sans text-base sm:text-lg text-charcoal-700/80 leading-relaxed font-light">
              Transformações reais que realizei respeitando a anatomia e a harmonia de cada sorriso. Cada planejamento com facetas ou lentes é desenhado para devolver estética, proporção e luminosidade com total naturalidade.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Infinite Lateral Carousel Track */}
      <div className="relative w-full overflow-hidden group/carousel py-4">
        {/* Degrade lateral refinado */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-24 bg-gradient-to-r from-[#F4ECE3] from-15% via-[#F4ECE3]/85 via-50% to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-24 bg-gradient-to-l from-[#F4ECE3] from-15% via-[#F4ECE3]/85 via-50% to-transparent z-20 pointer-events-none" />

        {/* Carousel Moving Track: Pauses on hover */}
        <div className="flex w-max gap-6 animate-carousel group-hover/carousel:[animation-play-state:paused] select-none pl-6">
          {carouselItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group/card relative w-[260px] sm:w-[290px] md:w-[320px] aspect-[3/4] rounded-[26px] overflow-hidden bg-cream-300 shadow-[0_12px_28px_-8px_rgba(50,30,20,0.16)] border border-[#E0D4C5] flex-shrink-0 cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_24px_50px_-10px_rgba(70,45,30,0.28)] hover:z-30 hover:-translate-y-1.5"
            >
              {/* Imagem do Resultado */}
              <img
                src={item.image}
                alt={`Resultado Dra. Fernanda Ragadalli - ${item.label}`}
                className="w-full h-full object-cover object-center transform group-hover/card:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Discreet gradient overlay at bottom for title reading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Tag / Procedimento Realizado */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] sm:text-xs font-medium text-brand-900 border border-white/60 shadow-sm">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Call To Action Below Carousel */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 sm:mt-16 text-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#C5A880] hover:bg-[#B8986C] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_12px_28px_-6px_rgba(197,168,128,0.45)] hover:shadow-[0_18px_36px_-6px_rgba(197,168,128,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group overflow-hidden relative"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          <span>Quero uma avaliação personalizada para o meu caso</span>
        </a>

        <p className="font-sans text-xs text-charcoal-700/65 font-light mt-3">
          Avaliação estética individualizada · Atendimento exclusivo com a Dra. Fernanda Ragadalli em Videira - SC
        </p>
      </div>
    </section>
  );
};
