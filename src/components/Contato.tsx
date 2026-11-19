import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { RollInHeading } from './RollInHeading';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contato: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/5511999999999?text=Olá%20Dra.%20Fernanda,%20gostaria%20de%20agendar%20minha%20consulta%20de%20avaliação.';

  return (
    <section
      id="contato"
      className="py-20 sm:py-28 bg-[#FAF6F0] relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[400px] bg-[#EAE0D3]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-brand-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Floating Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[32px] sm:rounded-[36px] border border-[#E5DACD] shadow-[0_20px_60px_-15px_rgba(50,30,20,0.12)] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT COLUMN: Headings & Contact Details */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="mb-3">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 block">
                  Atendimento Exclusivo
                </span>
              </div>

              {/* Title */}
              <RollInHeading
                as="h2"
                className="font-serif text-4xl sm:text-5xl md:text-[52px] font-semibold tracking-tight text-charcoal-900 leading-[1.1] mb-5"
                words={[
                  { text: 'Pronta' },
                  { text: 'para' },
                  { text: 'transformar' },
                  { text: 'o', hasLineBreak: true },
                  { text: 'seu', isItalic: true, colorClass: 'text-brand-600' },
                  { text: 'sorriso?', isItalic: true, colorClass: 'text-brand-600' },
                ]}
              />

              {/* Description */}
              <p className="font-sans text-base text-charcoal-700/80 leading-relaxed font-light mb-8 max-w-lg">
                Agende sua consulta de avaliação individualizada diretamente comigo. Atendo pessoalmente cada paciente em Videira - SC, garantindo atenção minuciosa, acolhimento e excelência estética para o seu sorriso.
              </p>

              {/* Contact Information List */}
              <div className="space-y-6">
                {/* 1. Address Item */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-200/80 flex items-center justify-center text-brand-700 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-charcoal-800 block">
                      DRA. FERNANDA RAGADALLI · VIDEIRA, SC
                    </span>
                    <p className="text-sm text-charcoal-700/90 font-light mt-0.5">
                      Rua Benjamin Grazziotin, 124 · Bairro Alvorada
                    </p>
                    <p className="text-xs text-charcoal-700/70">
                      Videira - SC · CEP 89562-010 · CRO-SC 9331
                    </p>
                  </div>
                </div>

                {/* 2. Instagram Item */}
                <a
                  href="https://www.instagram.com/drafernandaragadalli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-200/80 flex items-center justify-center text-brand-700 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-charcoal-800 block flex items-center gap-1.5">
                      <span>ACOMPANHE NO INSTAGRAM</span>
                      <ExternalLink className="w-3 h-3 text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <p className="text-sm text-brand-700 font-medium mt-0.5 group-hover:text-brand-800 transition-colors">
                      @drafernandaragadalli
                    </p>
                  </div>
                </a>

                {/* 3. Hours & Scheduling */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-200/80 flex items-center justify-center text-brand-700 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-charcoal-800 block">
                      HORÁRIO DE ATENDIMENTO
                    </span>
                    <p className="text-sm text-charcoal-700/90 font-light mt-0.5">
                      Segunda a Sexta: 08h às 18h · Atendimento com hora marcada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Map Preview + WhatsApp Button */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Map Preview Container */}
              <div className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5DACD] shadow-md bg-stone-100 aspect-[4/3] max-h-[340px]">
                {/* Embed Map centered on Videira, SC */}
                <iframe
                  title="Localização do Consultório Dra. Fernanda Ragadalli em Videira - SC"
                  src="https://maps.google.com/maps?q=Rua+Benjamin+Grazziotin,+124,+Videira+-+SC&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.02] brightness-[0.98]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Prominent WhatsApp Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full group relative inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full bg-[#C5A880] hover:bg-[#B8986C] text-white font-semibold text-base tracking-wide shadow-[0_12px_28px_-6px_rgba(197,168,128,0.45)] hover:shadow-[0_18px_36px_-6px_rgba(197,168,128,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span>Agendar via WhatsApp</span>
              </a>

              <p className="text-xs text-charcoal-700/70 mt-3 text-center">
                Atendimento pontual, acolhedor e humanizado · Videira - SC
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
