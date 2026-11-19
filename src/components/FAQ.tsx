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
    question: 'As facetas de resina e lentes em cerâmica deixam o sorriso artificial?',
    answer:
      'Não. A filosofia da Dra. Fernanda Ragadalli é a estética dental com máxima naturalidade. Cada faceta é planejada e esculpida respeitando a textura, translucidez, mímica labial e proporções anatômicas do seu rosto, garantindo um sorriso iluminado, harmônico e elegante sem aspecto artificial.',
  },
  {
    id: 2,
    question: 'Qual é a diferença entre facetas de resina e lentes de cerâmica?',
    answer:
      'As facetas de resina são esculpidas camada por camada diretamente sobre os dentes, com resultado imediato e excelente custo-benefício. Já as lentes em cerâmica (porcelana) são lâminas ultrafinas produzidas em laboratório, apresentando brilho vítreo perene, altíssima resistência e imunidade a manchas ao longo dos anos.',
  },
  {
    id: 3,
    question: 'É necessário desgastar muito os dentes para colocar facetas?',
    answer:
      'Não. Trabalhamos sob os princípios da odontologia minimamente invasiva e preservação biológica. Na grande maioria dos casos de facetas de resina e lentes em cerâmica, o desgaste dental é mínimo ou até zero, mantendo a estrutura natural dos seus dentes totalmente protegida e íntegra.',
  },
  {
    id: 4,
    question: 'Quanto tempo duram as facetas de resina e as lentes de cerâmica?',
    answer:
      'As facetas de resina têm longevidade média de 4 a 7 anos, com manutenções e polimentos periódicos simples. Já as lentes de cerâmica podem durar de 10 a 20 anos ou mais. A durabilidade está diretamente ligada aos bons hábitos de higiene e às consultas preventivas regulares.',
  },
  {
    id: 5,
    question: 'Como descubro qual é o tratamento ideal para o meu sorriso?',
    answer:
      'Tudo se inicia com uma consulta de avaliação individualizada e registro fotográfico com a Dra. Fernanda Ragadalli no consultório em Videira - SC. Avaliamos a saúde bucal, o alinhamento, a tonalidade e as suas expectativas para desenhar o plano de tratamento perfeito.',
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappUrl =
    'https://wa.me/5511999999999?text=Olá%20Dra.%20Fernanda,%20tenho%20uma%20dúvida%20sobre%20as%20facetas%20e%20tratamentos.';

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
              Reuni aqui os principais esclarecimentos sobre os tratamentos de facetas de resina, lentes em cerâmica e estética dental que realizo em Videira - SC. Se você tiver alguma dúvida específica sobre o seu sorriso, converse diretamente comigo pelo WhatsApp.
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
