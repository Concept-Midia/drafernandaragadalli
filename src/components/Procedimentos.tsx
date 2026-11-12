import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ScanFace, Syringe, Sparkles, Sparkle, Droplets } from 'lucide-react';
import { RollInHeading } from './RollInHeading';

// Minimalist Luxury Lips Icon matching Lucide stroke style
const LipsIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Upper lip with Cupid's bow */}
    <path d="M2.5 12c2.2-3 5.5-4.2 9.5-1.8 4-2.4 7.3-1.2 9.5 1.8-2.2 2-5 3.5-9.5 3.5S4.7 14 2.5 12Z" />
    {/* Center lip separation line */}
    <path d="M2.5 12c3.5 1.2 6.5 1.6 9.5 1.6s6-.4 9.5-1.6" />
    {/* Lower lip bottom fullness curve */}
    <path d="M6.5 13.5c1.8 3.5 3.8 4.5 5.5 4.5s3.7-1 5.5-4.5" />
  </svg>
);

interface ProcedureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  isWide?: boolean;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}

const ProcedureCard: React.FC<ProcedureCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  isWide = false,
  direction = 'left',
  delay = 0,
  className = '',
}) => {
  const whatsappUrl = `https://wa.me/5511999999999?text=Olá%20Dra.%20Letícia,%20gostaria%20de%20saber%20mais%20e%20agendar%20o%20procedimento%20de%20${encodeURIComponent(
    title
  )}.`;

  const initialX = direction === 'left' ? -70 : 70;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: initialX, y: 15 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer bg-[#151312]/95 hover:bg-[#1D1A18] border border-white/10 hover:border-[#C5A880]/50 shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-black/70 transition-all duration-400 ease-out hover:-translate-y-1 min-h-[220px] sm:min-h-[240px] ${className}`}
    >
      {/* Subtle corner golden ambient glow on hover */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#C5A880]/0 group-hover:bg-[#C5A880]/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

      {/* Top: Vector Symbol Badge & Arrow */}
      <div className="flex items-center justify-between z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880]/15 group-hover:border-[#C5A880]/30 group-hover:scale-105 group-hover:text-white transition-all duration-300 shadow-sm">
          <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </div>

        <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/5 flex items-center justify-center text-white/40 group-hover:text-[#C5A880] group-hover:bg-white/[0.08] transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Bottom: Title & Description */}
      <div className="relative z-10 mt-6 sm:mt-8">
        <h3
          className={`font-serif italic font-medium text-white group-hover:text-[#F3EBE3] transition-colors leading-tight ${
            isWide ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}
        >
          {title}
        </h3>
        <p
          className={`font-sans font-light text-white/75 text-xs sm:text-sm leading-relaxed mt-2.5 ${
            isWide ? 'max-w-xl' : ''
          }`}
        >
          {subtitle}
        </p>
      </div>

      {/* Subtle inner highlight border on hover */}
      <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] border-2 border-white/0 group-hover:border-white/15 transition-colors pointer-events-none" />
    </motion.a>
  );
};

export const Procedimentos: React.FC = () => {
  return (
    <section
      id="procedimentos"
      className="py-20 sm:py-24 bg-[#0D0B0A] text-white border-y border-[#221E1C] relative overflow-hidden"
    >
      {/* Luxury Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[450px] bg-[#C5A880]/6 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[350px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          {/* Left Title & Eyebrow */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A880] block mb-3"
            >
              Protocolos & Procedimentos
            </motion.span>
            <RollInHeading
              as="h2"
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.08]"
              words={[
                { text: 'Tratamentos' },
                { text: 'para', hasLineBreak: true },
                { text: 'cada', isItalic: true, colorClass: 'text-[#C5A880]' },
                { text: 'necessidade', isItalic: true, colorClass: 'text-[#C5A880]' },
              ]}
            />
          </div>

          {/* Right Subtitle / Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:max-w-md"
          >
            <p className="font-sans text-base sm:text-lg text-[#F3EBE3]/80 leading-relaxed font-light">
              Planejo cada protocolo de forma anatômica e integrada para valorizar seus traços únicos: rejuvenescimento natural, estruturação óssea e harmonia global sem exageros.
            </p>
          </motion.div>
        </div>

        {/* Cards Bento Mosaic com Surgimento Alternado (Esquerda/Direita) */}
        <div className="max-w-[1140px] xl:max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* LINHA 1 */}
            {/* 1. Método Full Face (Largo - 6 colunas, surge da esquerda) */}
            <ProcedureCard
              icon={ScanFace}
              title="Método Full Face"
              subtitle="Visão anatômica global e integrada da face: combinamos pontos estratégicos de sustentação, volume e refinamento em um plano único para rejuvenescimento autêntico."
              isWide={true}
              direction="left"
              delay={0.05}
              className="md:col-span-1 lg:col-span-6"
            />

            {/* 2. Preenchimento labial (Normal - 3 colunas, surge da direita) */}
            <ProcedureCard
              icon={LipsIcon}
              title="Preenchimento labial"
              subtitle="Volume, contorno e hidratação profunda com ácido hialurônico, preservando a anatomia e delicadeza do seu sorriso."
              direction="right"
              delay={0.18}
              className="md:col-span-1 lg:col-span-3"
            />

            {/* 3. Toxina botulínica (Normal - 3 colunas, surge da esquerda) */}
            <ProcedureCard
              icon={Syringe}
              title="Toxina botulínica"
              subtitle="Prevenção e suavização precisa de rugas dinâmicas e linhas de expressão, mantendo a expressividade leve e descansada."
              direction="left"
              delay={0.30}
              className="md:col-span-1 lg:col-span-3"
            />

            {/* LINHA 2 */}
            {/* 4. Protocolo pele de boneca (Normal - 3 colunas, surge da direita) */}
            <ProcedureCard
              icon={Sparkles}
              title="Protocolo pele de boneca"
              subtitle="Tecnologia avançada para fechamento de poros, viço radiante e textura aveludada, com renovação profunda e luminosidade duradoura."
              direction="right"
              delay={0.42}
              className="md:col-span-1 lg:col-span-3"
            />

            {/* 5. Harmonização facial (Largo - 6 colunas, surge da esquerda) */}
            <ProcedureCard
              icon={Sparkle}
              title="Harmonização facial"
              subtitle="Equilíbrio, proporção áurea e realce da sua beleza autêntica com planejamento tridimensional individualizado e máxima sofisticação."
              isWide={true}
              direction="left"
              delay={0.54}
              className="md:col-span-1 lg:col-span-6"
            />

            {/* 6. Protocolo para acne (Normal - 3 colunas, surge da direita) */}
            <ProcedureCard
              icon={Droplets}
              title="Protocolo para acne"
              subtitle="Controle intensivo da oleosidade, renovação celular profunda e cicatrização uniforme para uma pele restaurada e saudável."
              direction="right"
              delay={0.66}
              className="md:col-span-1 lg:col-span-3"
            />

          </div>
        </div>
      </div>
    </section>
  );
};
