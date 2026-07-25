import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingControls: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="p-3.5 rounded-full bg-[#2E2E2E]/90 hover:bg-[#FF6B00] text-white shadow-xl border border-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={COMPANY_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative group p-4 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl shadow-green-500/40 transition-all duration-300 transform hover:scale-110 flex items-center justify-center cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400"></span>
        </span>
        <MessageCircle className="w-7 h-7" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#121212] text-white text-xs font-bold font-sans px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Cotización WhatsApp Inmediata
        </span>
      </a>
    </div>
  );
};
