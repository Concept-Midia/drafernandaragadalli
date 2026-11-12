import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { RollInHeading } from './RollInHeading';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Os procedimentos de Full Face e harmonização deixam o rosto artificial?',
    answer:
      'Não. Minha filosofia é estritamente pautada na naturalidade anatômica e na sofisticação sutil. Atuo respeitando as proporções exclusivas da sua face, devolvendo suporte e sustentação sem qualquer risco de transformá-la ou deixar traços exagerados.',
  },
  {
    id: 2,
    question: 'Quanto tempo duram os resultados dos procedimentos?',
    answer:
      'A toxina botulínica costuma ter durabilidade entre 4 e 6 meses. Já os preenchimentos com ácido hialurônico de alta pureza e os bioestimuladores de colágeno duram de 12 a 24 meses, promovendo um estímulo contínuo e melhora progressiva da qualidade e firmeza da pele.',
  },
  {
    id: 3,
    question: 'Os procedimentos causam dor? Como é o controle do desconforto?',
    answer:
      'O seu conforto é prioridade absoluta. Em todos os procedimentos utilizo anestésicos tópicos de padrão ouro e, quando indicado, anestesia local confortável. Utilizo microcânulas atraumáticas para garantir uma experiência serena, segura e livre de dor.',
  },
  {
    id: 4,
    question: 'Existe tempo de repouso (downtime) após as sessões?',
    answer:
      'A grande maioria dos procedimentos permite retorno imediato às suas atividades diárias. Recomendo apenas evitar exercícios físicos intensos, saunas e exposição solar direta nas primeiras 24 a 48 horas após a aplicação.',
  },
  {
    id: 5,
    question: 'Como descubro qual é o protocolo de Full Face ideal para mim?',
    answer:
      'Tudo se inicia com uma consulta de avaliação individualizada e minuciosa comigo no consultório em Rio Verde - GO. Analiso a proporção da sua face, mímica muscular, áreas de reabsorção e expectativas, traçando um plano exclusivo e personalizado para você.',
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappUrl =
    'https://wa.me/5511999999999?text=Olá%20Dra.%20Letícia,%20tenho%20uma%20dúvida%20sobre%20os%20seus%20procedimentos.';

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#F4ECE3] border-b border-[#E5DACD] relative overflow-hidden"
    >
      {/* Subtle Ambient Background Warmth */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[400px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: As escritas na esquerda */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B8860B] block">
                Dúvidas Frequentes
              </span>
            </motion.div>

            {/* Headline */}
            <RollInHeading
              as="h2"
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-charcoal-900 leading-[1.08] mb-6"
              words={[
                { text: 'Perguntas', hasLineBreak: true },
                { text: 'Frequentes', isItalic: true, colorClass: 'text-[#B8860B]' },
              ]}
            />

            {/* Paragraph 1: Headline reinforcement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-lg sm:text-xl font-normal text-charcoal-900 leading-snug mb-4"
            >
              Transparência, segurança e clareza clínica em cada etapa da sua experiência estética.
            </motion.p>

            {/* Paragraph 2: Subheadline description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base text-charcoal-700/80 font-light leading-relaxed mb-8"
            >
              Reuni aqui os principais esclarecimentos sobre os procedimentos de Full Face e harmonização que realizo em Rio Verde - GO. Se você tiver alguma dúvida específica sobre o seu caso, converse diretamente comigo pelo WhatsApp.
            </motion.p>

            {/* Direct WhatsApp Assistance Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-1"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#B8986C] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_8px_25px_-4px_rgba(197,168,128,0.45)] hover:shadow-[0_12px_32px_-4px_rgba(197,168,128,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95 w-fit"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Ainda tem dúvidas? Fale comigo</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: O acordeom na direita */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`rounded-2xl sm:rounded-[22px] transition-all duration-300 overflow-hidden border ${
                    isOpen
                      ? 'bg-white border-[#C5A880] shadow-[0_10px_25px_-5px_rgba(197,168,128,0.18)]'
                      : 'bg-white/75 border-[#E5DACD] hover:bg-white hover:border-[#C5A880]/50'
                  }`}
                >
                  {/* Accordion Question Trigger */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 sm:px-7 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-charcoal-900 font-medium leading-snug">
                      {item.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#C5A880] text-[#1C140E] rotate-180 shadow-sm'
                          : 'bg-[#F4ECE3] text-charcoal-700 border border-[#E5DACD] rotate-0'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.4]" />
                    </div>
                  </button>

                  {/* Accordion Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-charcoal-700/85 leading-relaxed font-sans font-light border-t border-[#F2EBE1]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
