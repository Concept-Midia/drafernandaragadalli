import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { RollInHeading } from './RollInHeading';

interface StepItemProps {
  number: string;
  title: string;
  description: string;
  align: 'left' | 'right';
  topPercent: string;
  progress: ReturnType<typeof useSpring>;
  threshold: [number, number];
}

// Desktop Step Item (Original curved S-curve layout)
const DesktopStepItem: React.FC<StepItemProps> = ({
  number,
  title,
  description,
  align,
  topPercent,
  progress,
  threshold,
}) => {
  const opacity = useTransform(progress, threshold, [0.15, 1]);
  const y = useTransform(progress, threshold, [20, 0]);

  return (
    <div
      style={{ top: topPercent }}
      className={`absolute -translate-y-1/2 w-[60%] max-w-[330px] z-10 ${
        align === 'left'
          ? 'left-[18%] text-left'
          : 'right-[18%] text-right'
      }`}
    >
      <motion.div style={{ opacity, y }}>
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C5A880] block mb-1.5">
          PASSO {number}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-[32px] font-semibold text-charcoal-900 tracking-tight leading-tight mb-2.5">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm md:text-[15px] text-charcoal-700/80 font-light leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

// Mobile Step Item (Straight line layout, balanced on each side)
const MobileStepItem: React.FC<StepItemProps> = ({
  number,
  title,
  description,
  align,
  topPercent,
  progress,
  threshold,
}) => {
  const opacity = useTransform(progress, threshold, [0.15, 1]);
  const y = useTransform(progress, threshold, [20, 0]);

  return (
    <div
      style={{ top: topPercent }}
      className={`absolute -translate-y-1/2 w-[calc(50%-20px)] max-w-[320px] z-10 ${
        align === 'left'
          ? 'right-[calc(50%+14px)] text-right'
          : 'left-[calc(50%+14px)] text-left'
      }`}
    >
      <motion.div style={{ opacity, y }}>
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C5A880] block mb-1">
          PASSO {number}
        </span>
        <h3 className="font-serif text-lg font-semibold text-charcoal-900 tracking-tight leading-tight mb-1.5">
          {title}
        </h3>
        <p className="font-sans text-[11px] text-charcoal-700/80 font-light leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export const Processo: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 65%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    restDelta: 0.001,
  });

  // Node activation transforms matching their exact vertical position along the path (viewBox height: 1180)
  const node1Scale = useTransform(smoothProgress, [0.10, 0.20], [0.8, 1]);
  const node1Stroke = useTransform(
    smoothProgress,
    [0.10, 0.20],
    ['#E4DDD3', '#C29B61']
  );

  const node2Scale = useTransform(smoothProgress, [0.34, 0.45], [0.8, 1]);
  const node2Stroke = useTransform(
    smoothProgress,
    [0.34, 0.45],
    ['#E4DDD3', '#C29B61']
  );

  const node3Scale = useTransform(smoothProgress, [0.58, 0.69], [0.8, 1]);
  const node3Stroke = useTransform(
    smoothProgress,
    [0.58, 0.69],
    ['#E4DDD3', '#C29B61']
  );

  // Final CTA Card reveal transform
  const ctaOpacity = useTransform(smoothProgress, [0.82, 0.96], [0.2, 1]);
  const ctaY = useTransform(smoothProgress, [0.82, 0.96], [24, 0]);
  const ctaScale = useTransform(smoothProgress, [0.82, 0.96], [0.96, 1]);

  // Desktop: Smooth sinusoidal S-curve path ending at top of CTA card in 600x1180 coordinate space
  const desktopCurvePath =
    'M 300 0 C 300 95, 60 105, 60 220 C 60 355, 540 365, 540 500 C 540 635, 60 645, 60 780 C 60 895, 300 895, 300 985 L 300 1180';

  // Mobile: Straight vertical path down the center ending at top of CTA card in 600x1180 coordinate space
  const mobileLinePath = 'M 300 0 L 300 1180';

  return (
    <section
      id="processo"
      className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#E5DACD] relative overflow-hidden"
    >
      {/* Subtle Ambient Warmth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#EAE0D3]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-[#C5A880]/60 bg-[#FAF6F0] mb-4"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C5A880]">
              Passo a Passo
            </span>
          </motion.div>

          <div>
            <RollInHeading
              as="h2"
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-charcoal-900 leading-[1.08]"
              words={[
                { text: 'Como' },
                { text: 'funciona' },
                { text: 'o' },
                { text: 'meu' },
                {
                  text: 'atendimento',
                  isItalic: true,
                  colorClass: 'text-[#C29B61]',
                },
              ]}
            />
          </div>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative mx-auto">
          {/* DESKTOP TIMELINE (Untouched Original Curved Winding Timeline) */}
          <div className="hidden md:block relative max-w-[600px] mx-auto">
            <div className="relative w-full aspect-[600/1180]">
              <svg
                viewBox="0 0 600 1180"
                fill="none"
                className="w-full h-full overflow-visible pointer-events-none"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Background Base Track (Subtle Sand/Gray) */}
                <path
                  d={desktopCurvePath}
                  stroke="#E4DDD3"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                {/* Animated Scroll-Driven Gold Path */}
                <motion.path
                  d={desktopCurvePath}
                  stroke="#C29B61"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  style={{ pathLength: smoothProgress }}
                />

                {/* Node 01 (Left Apex: 60, 220) */}
                <g transform="translate(60, 220)">
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="7"
                    fill="#FAF8F5"
                    strokeWidth="3.2"
                    style={{
                      stroke: node1Stroke,
                      scale: node1Scale,
                    }}
                  />
                </g>

                {/* Node 02 (Right Apex: 540, 500) */}
                <g transform="translate(540, 500)">
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="7"
                    fill="#FAF8F5"
                    strokeWidth="3.2"
                    style={{
                      stroke: node2Stroke,
                      scale: node2Scale,
                    }}
                  />
                </g>

                {/* Node 03 (Left Apex: 60, 780) */}
                <g transform="translate(60, 780)">
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="7"
                    fill="#FAF8F5"
                    strokeWidth="3.2"
                    style={{
                      stroke: node3Stroke,
                      scale: node3Scale,
                    }}
                  />
                </g>
              </svg>

              {/* Step 01 Content (Inside Left Curve) */}
              <DesktopStepItem
                number="01"
                title="Consulta & Análise Facial"
                description="Conversamos detalhadamente sobre suas expectativas e realizamos o registro fotográfico e a avaliação estética completa da harmonia do seu sorriso."
                align="left"
                topPercent="18.64%"
                progress={smoothProgress}
                threshold={[0.08, 0.22]}
              />

              {/* Step 02 Content (Inside Right Curve) */}
              <DesktopStepItem
                number="02"
                title="Planejamento do Sorriso"
                description="Desenvolvemos o design personalizado do seu sorriso, calculando proporção, textura e cor para garantir máxima naturalidade antes da confecção."
                align="right"
                topPercent="42.37%"
                progress={smoothProgress}
                threshold={[0.32, 0.46]}
              />

              {/* Step 03 Content (Inside Left Curve) */}
              <DesktopStepItem
                number="03"
                title="Escultura & Novo Sorriso"
                description="Com precisão milimétrica e materiais nobres (facetas de resina ou cerâmica), realizamos a transformação do seu sorriso com total conforto e preservação dental."
                align="left"
                topPercent="66.10%"
                progress={smoothProgress}
                threshold={[0.56, 0.70]}
              />
            </div>
          </div>

          {/* MOBILE TIMELINE (Straight Line Timeline - Only on Mobile) */}
          <div className="block md:hidden relative max-w-[500px] mx-auto">
            <div className="relative w-full aspect-[600/1180]">
              <svg
                viewBox="0 0 600 1180"
                fill="none"
                className="w-full h-full overflow-visible pointer-events-none"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Background Base Track (Straight) */}
                <path
                  d={mobileLinePath}
                  stroke="#E4DDD3"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                {/* Animated Scroll-Driven Gold Path (Straight) */}
                <motion.path
                  d={mobileLinePath}
                  stroke="#C29B61"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  style={{ pathLength: smoothProgress }}
                />

                {/* Node 01 (Center: 300, 220) */}
                <g transform="translate(300, 220)">
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="7"
                    fill="#FAF8F5"
                    strokeWidth="3.2"
                    style={{
                      stroke: node1Stroke,
                      scale: node1Scale,
                    }}
                  />
                </g>

                {/* Node 02 (Center: 300, 500) */}
                <g transform="translate(300, 500)">
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="7"
                    fill="#FAF8F5"
                    strokeWidth="3.2"
                    style={{
                      stroke: node2Stroke,
                      scale: node2Scale,
                    }}
                  />
                </g>

                {/* Node 03 (Center: 300, 780) */}
                <g transform="translate(300, 780)">
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="7"
                    fill="#FAF8F5"
                    strokeWidth="3.2"
                    style={{
                      stroke: node3Stroke,
                      scale: node3Scale,
                    }}
                  />
                </g>
              </svg>

              {/* Step 01 Content (Mobile Left Side) */}
              <MobileStepItem
                number="01"
                title="Consulta & Análise Facial"
                description="Conversamos detalhadamente sobre suas expectativas e realizamos o registro fotográfico e a avaliação estética completa da harmonia do seu sorriso."
                align="left"
                topPercent="18.64%"
                progress={smoothProgress}
                threshold={[0.08, 0.22]}
              />

              {/* Step 02 Content (Mobile Right Side) */}
              <MobileStepItem
                number="02"
                title="Planejamento do Sorriso"
                description="Desenvolvemos o design personalizado do seu sorriso, calculando proporção, textura e cor para garantir máxima naturalidade antes da confecção."
                align="right"
                topPercent="42.37%"
                progress={smoothProgress}
                threshold={[0.32, 0.46]}
              />

              {/* Step 03 Content (Mobile Left Side) */}
              <MobileStepItem
                number="03"
                title="Escultura & Novo Sorriso"
                description="Com precisão milimétrica e materiais nobres (facetas de resina ou cerâmica), realizamos a transformação do seu sorriso com total conforto e preservação dental."
                align="left"
                topPercent="66.10%"
                progress={smoothProgress}
                threshold={[0.56, 0.70]}
              />
            </div>
          </div>

          {/* Bottom Call-To-Action Card (Connected to the end of the timeline) */}
          <motion.div
            style={{
              opacity: ctaOpacity,
              y: ctaY,
              scale: ctaScale,
            }}
            className="relative z-20 max-w-[400px] mx-auto rounded-[28px] bg-[#131110]/95 backdrop-blur-md border border-[#28221E] p-7 sm:p-9 text-center shadow-[0_24px_50px_-12px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-snug mb-3">
                Pronta para transformar <br />
                o seu sorriso?
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#F3EBE3]/80 font-light leading-relaxed mb-6 max-w-[290px] mx-auto">
                Sua jornada para um sorriso harmônico, confiante e radiante começa em uma avaliação exclusiva comigo em Videira - SC.
              </p>

              <a
                href="https://wa.me/5511999999999?text=Olá%20Dra.%20Fernanda,%20gostaria%20de%20agendar%20minha%20avaliação%20inicial."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto min-w-[240px] px-7 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#B8986C] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_10px_25px_-5px_rgba(197,168,128,0.45)] hover:shadow-[0_14px_30px_-5px_rgba(197,168,128,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Falar com a Dra. Fernanda
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
