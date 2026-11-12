import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Método Full Face',
    'Harmonização Orofacial',
    'Preenchimento Labial',
    'Bioestimuladores de Colágeno',
    'Toxina Botulínica',
    'Mentoria HOF',
    'Rinomodelação Estruturada',
    'Sustentação & Contorno',
    'Skinbooster & Glow',
    'Rejuvenescimento Natural',
  ];

  // Duplicate items for infinite seamless scroll
  const marqueeList = [...items, ...items, ...items];

  return (
    <section className="relative w-full overflow-hidden bg-[#F4ECE3] border-y border-[#E5DACD] py-4 sm:py-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
      {/* Side gradient fades for smooth infinite effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4ECE3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F4ECE3] to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] select-none items-center">
        {marqueeList.map((item, index) => (
          <div key={index} className="flex items-center mx-3 sm:mx-5">
            <span className="font-serif italic text-xl sm:text-2xl md:text-[26px] text-charcoal-900 tracking-tight whitespace-nowrap font-normal">
              {item}
            </span>
            <span className="text-gold-500 text-sm sm:text-base mx-4 sm:mx-6 flex items-center justify-center opacity-85" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
