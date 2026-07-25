import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import { FAQ_LIST } from '../data/companyData';

interface FAQProps {
  isDarkMode?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ isDarkMode = true }) => {
  const [openId, setOpenId] = useState<string>('faq1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const filteredFaq = FAQ_LIST.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-gray-900'}`}>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESPUESTAS A DUDAS FRECUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Preguntas <span className="text-[#FF6B00]">Frecuentes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans">
            Todo lo que necesita saber sobre garantías, normas AWS, procesos de cotización y tiempos de ejecución.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar en preguntas frecuentes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-[#1A1A1A] border border-white/10 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] shadow-lg"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {filteredFaq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1A1A1A] border-[#FF6B00] shadow-xl shadow-[#FF6B00]/10'
                    : 'bg-[#121212] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] shrink-0">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#FF6B00]' : 'text-gray-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 pt-1 border-t border-white/10 text-sm text-gray-300 font-sans leading-relaxed"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct Help Card */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#2E2E2E] via-[#1A1A1A] to-[#2E2E2E] p-8 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold font-heading text-white">¿Tiene una duda específica no catalogada aquí?</h3>
          <p className="text-xs text-gray-300 mt-1">Nuestros ingenieros le atienden inmediatamente por WhatsApp o correo.</p>
          <a
            href="#contacto"
            className="inline-block mt-4 px-6 py-3 bg-[#FF6B00] hover:bg-[#E05D00] text-white text-xs font-bold rounded-xl shadow-lg shadow-[#FF6B00]/30 transition-all"
          >
            Contactar Asesor Técnico
          </a>
        </div>

      </div>
    </section>
  );
};
