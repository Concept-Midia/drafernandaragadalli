import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Procedimentos } from './components/Procedimentos';
import { Resultados } from './components/Resultados';
import { Sobre } from './components/Sobre';
import { Processo } from './components/Processo';
import { Depoimentos } from './components/Depoimentos';
import { FAQ } from './components/FAQ';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade';
import { TermosCondicoes } from './pages/TermosCondicoes';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacidade' | 'termos'>('home');

  // Listen to hash changes for browser history back/forward navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#privacidade') {
        setCurrentPage('privacidade');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#termos') {
        setCurrentPage('termos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (currentPage !== 'home' && (!hash || hash.startsWith('#inicio') || hash.startsWith('#resultados') || hash.startsWith('#sobre') || hash.startsWith('#depoimentos') || hash.startsWith('#contato'))) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentPage]);

  const navigateTo = (page: 'privacidade' | 'termos') => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const returnHome = () => {
    setCurrentPage('home');
    window.location.hash = 'inicio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initialize Lenis Ultra-Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  if (currentPage === 'privacidade') {
    return (
      <div className="min-h-screen bg-[#FAF6F0]">
        <PoliticaPrivacidade onBack={returnHome} />
        <Footer onNavigate={navigateTo} />
        <FloatingWhatsApp />
        <CookieBanner />
      </div>
    );
  }

  if (currentPage === 'termos') {
    return (
      <div className="min-h-screen bg-[#FAF6F0]">
        <TermosCondicoes onBack={returnHome} />
        <Footer onNavigate={navigateTo} />
        <FloatingWhatsApp />
        <CookieBanner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-charcoal-800 font-sans selection:bg-brand-200 selection:text-brand-900 overflow-x-hidden">
      {/* 1. Header / Navbar (Vidro fosco & Floating pill ao rolar) */}
      <Navbar onHomeClick={returnHome} />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Marquee Ticker */}
        <Marquee />

        {/* 4. Procedimentos Section (Deep Luxury Brand Green) */}
        <Procedimentos />

        {/* 5. Resultados Section (Warm Cashmere/Sand Background + Infinite 3:4 Feed Carousel) */}
        <Resultados />

        {/* 6. Sobre Section (Organic Mask Shape + Weighted Fonts + Personal Quote Card) */}
        <Sobre />

        {/* 7. Processo Section (Dynamic Scroll S-Curve Timeline + 3 Steps + CTA Card) */}
        <Processo />

        {/* 8. Depoimentos Section (9 Cards, 3 Columns Infinite Vertical Scroll + Top/Bottom Gradients) */}
        <Depoimentos />

        {/* 8. FAQ Section (Accordion with Aesthetic Medicine Questions + Weighted Copy) */}
        <FAQ />

        {/* 9. Contato Section (Floating Luxury Card + Jardins SP Address + Interactive Map + WhatsApp CTA) */}
        <Contato />
      </main>

      {/* 10. Footer (Logo Atualizada, Somente Termos/Privacidade, Somente Ícones de Contato) */}
      <Footer onNavigate={navigateTo} />

      {/* 11. Floating WhatsApp with Emitting Wave Rings */}
      <FloatingWhatsApp />

      {/* 12. Discreet Cookie / Privacy Notice Banner */}
      <CookieBanner />
    </div>
  );
};

export default App;
