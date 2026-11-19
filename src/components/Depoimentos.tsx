import React from 'react';
import { motion } from 'framer-motion';
import { RollInHeading } from './RollInHeading';

interface Testimonial {
  id: number;
  initial: string;
  name: string;
  text: string;
  procedure?: string;
}

const testimonialsCol1: Testimonial[] = [
  {
    id: 1,
    initial: 'J',
    name: 'JOANA COSTA',
    procedure: 'Facetas de Resina',
    text: '"Sempre tive vergonha de sorrir por causa do formato dos meus dentes. O trabalho da Dra. Fernanda é pura arte e delicadeza. As facetas de resina ficaram super naturais e leves. Minha autoestima renasceu."',
  },
  {
    id: 2,
    initial: 'M',
    name: 'MARIA SILVA',
    procedure: 'Lentes em Cerâmica',
    text: '"Atendimento impecável do início ao fim. A Dra. Fernanda tem um olhar estético único e planejou cada detalhe do meu sorriso. O resultado ficou maravilhoso, ninguém diz que não são meus dentes naturais."',
  },
  {
    id: 3,
    initial: 'R',
    name: 'RENATA VASCONCELOS',
    procedure: 'Estética Dental',
    text: '"Fiz o fechamento de diastema com a Dra. Fernanda e o resultado superou todas as expectativas. Todo mundo elogia meu sorriso e a harmonia que ele trouxe para o meu rosto."',
  },
];

const testimonialsCol2: Testimonial[] = [
  {
    id: 4,
    initial: 'B',
    name: 'BEATRIZ NOGUEIRA',
    procedure: 'Facetas de Resina',
    text: '"A clínica em Videira é linda, acolhedora e moderna. A Dra. Fernanda tem mãos de fada, zero dor e minhas facetas ficaram exatamente no tom e formato que sempre sonhei."',
  },
  {
    id: 5,
    initial: 'A',
    name: 'ANA PAULA RESENDE',
    procedure: 'Lentes de Contato Dental',
    text: '"Minha experiência foi transformadora. O planejamento do sorriso fez toda a diferença, entregou simetria e elegância sem nenhum exagero. Uma profissional exemplar!"',
  },
  {
    id: 6,
    initial: 'G',
    name: 'GABRIELA MENDES',
    procedure: 'Design do Sorriso',
    text: '"Fiz a transformação do sorriso com a Dra. Fernanda e fiquei encantada. A naturalidade e o brilho das facetas ficaram perfeitos. Recomendo de olhos fechados em Videira!"',
  },
];

const testimonialsCol3: Testimonial[] = [
  {
    id: 7,
    initial: 'J',
    name: 'JULIANA MARTINS',
    procedure: 'Clareamento & Facetas',
    text: '"O combo de clareamento com facetas ficou impecável. Dentes alinhados, claros e com uma luminosidade natural que mudou completamente a minha expressão."',
  },
  {
    id: 8,
    initial: 'C',
    name: 'CAMILA FREITAS',
    procedure: 'Facetas em Resina',
    text: '"A sensibilidade e a precisão da Dra. Fernanda são incomparáveis. Dá para sentir a paixão e o cuidado com cada paciente. Virei fã número um!"',
  },
  {
    id: 9,
    initial: 'P',
    name: 'PATRÍCIA LIMA',
    procedure: 'Transformação do Sorriso',
    text: '"Cuidado e dedicação únicos. Saí da clínica me sentindo realizada e segura para sorrir sem receio. A melhor dentista para facetas da nossa região."',
  },
];

// Stylized Quote Icon
const QuoteMarks: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 11H6.5C5.67 11 5 10.33 5 9.5V8C5 6.34 6.34 5 8 5H8.5C9.33 5 10 5.67 10 6.5V11ZM19 11H15.5C14.67 11 14 10.33 14 9.5V8C14 6.34 15.34 5 17 5H17.5C18.33 5 19 5.67 19 6.5V11Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 11C5 14 6.5 17.5 10 19M14 11C14 14 15.5 17.5 19 19"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <div className="relative rounded-[24px] bg-[#151312]/90 backdrop-blur-md border border-[#221E1C] p-6 sm:p-7 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] hover:border-[#C5A880]/50 hover:bg-[#1D1A18] transition-all duration-300 group cursor-pointer">
      {/* Quote Marks Icon in Top Right */}
      <div className="absolute top-5 right-5 text-[#C5A880]/35 group-hover:text-[#C5A880]/70 transition-colors">
        <QuoteMarks className="w-7 h-7" />
      </div>

      {/* Testimonial Quote Text */}
      <p className="font-sans italic text-sm sm:text-[15px] text-[#F3EBE3]/90 leading-relaxed font-light mb-6 pr-6">
        {item.text}
      </p>

      {/* Patient Author Info */}
      <div className="flex items-center gap-3 pt-2">
        {/* Initial Circle Avatar */}
        <div className="w-8 h-8 rounded-full bg-[#221E1C] text-[#F3EBE3] font-semibold text-xs flex items-center justify-center border border-[#332D29] flex-shrink-0">
          {item.initial}
        </div>

        {/* Name & Procedure */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[#C5A880] font-semibold text-xs">—</span>
            <span className="text-xs font-bold text-white tracking-wider uppercase font-sans">
              {item.name}
            </span>
          </div>
          {item.procedure && (
            <span className="text-[10px] text-[#C5A880]/80 tracking-wide mt-0.5 pl-3 font-light">
              {item.procedure}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const Depoimentos: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="py-20 sm:py-28 bg-[#0D0B0A] text-white border-y border-[#201C1A] relative overflow-hidden"
    >
      {/* Luxury Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#C5A880]/6 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-14 sm:mb-16">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.26em] text-[#C5A880] block mb-3"
        >
          Experiências & Depoimentos
        </motion.span>
        
        <RollInHeading
          as="h2"
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.08] mb-5"
          words={[
            { text: 'Histórias' },
            { text: 'reais' },
            { text: 'de' },
            { text: 'transformação', isItalic: true, colorClass: 'text-[#C5A880]' },
          ]}
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base sm:text-lg text-[#F3EBE3]/75 max-w-2xl mx-auto font-light leading-relaxed"
        >
          A confiança de cada paciente é o maior reflexo da dedicação e precisão que entrego em cada transformação em Videira - SC.
        </motion.p>
      </div>

      {/* 3 Columns Infinite Vertical Marquee Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-[580px] sm:h-[620px] overflow-hidden group/marquee">
        {/* Top Fade Gradient */}
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-[#0D0B0A] via-[#0D0B0A]/90 to-transparent z-20 pointer-events-none" />

        {/* Bottom Fade Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/90 to-transparent z-20 pointer-events-none" />

        {/* The 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 h-full items-start">
          
          {/* Column 1: Vertical Infinite Up Scroll */}
          <div className="relative overflow-hidden h-full">
            <div className="flex flex-col gap-5 sm:gap-6 animate-scroll-up group-hover/marquee:[animation-play-state:paused]">
              {[...testimonialsCol1, ...testimonialsCol1, ...testimonialsCol1].map((item, index) => (
                <TestimonialCard key={`col1-${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Column 2: Slightly slower infinite scroll for natural parallax effect */}
          <div className="relative overflow-hidden h-full hidden md:block">
            <div className="flex flex-col gap-5 sm:gap-6 animate-scroll-up-slow group-hover/marquee:[animation-play-state:paused]">
              {[...testimonialsCol2, ...testimonialsCol2, ...testimonialsCol2].map((item, index) => (
                <TestimonialCard key={`col2-${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Column 3: Medium infinite scroll */}
          <div className="relative overflow-hidden h-full hidden lg:block">
            <div className="flex flex-col gap-5 sm:gap-6 animate-scroll-up-fast group-hover/marquee:[animation-play-state:paused]">
              {[...testimonialsCol3, ...testimonialsCol3, ...testimonialsCol3].map((item, index) => (
                <TestimonialCard key={`col3-${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
