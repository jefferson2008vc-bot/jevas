import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

interface TestimonialsProps {
  isDarkMode?: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ isDarkMode = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonios" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-gray-100 text-gray-900'}`}>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>RESPALDO & CONFIANZA DE NUESTROS CLIENTES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Lo que dicen <span className="text-[#FF6B00]">de JEVAS</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans">
            Empresas líderes e ingenieros confían en la precisión, resistencia y puntualidad de nuestros trabajos en acero.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 sm:p-12 relative border border-[#FF6B00]/30 shadow-2xl"
            >
              <Quote className="w-16 h-16 text-[#FF6B00]/20 absolute top-6 right-8 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#FF6B00] shadow-lg shadow-[#FF6B00]/30"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 p-1.5 bg-[#FF6B00] rounded-full text-white">
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 text-center sm:text-left flex-1">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-base sm:text-xl font-sans italic text-gray-200 leading-relaxed">
                    "{current.comment}"
                  </p>

                  <div className="pt-2 border-t border-white/10">
                    <h3 className="text-lg font-bold font-heading text-white">{current.name}</h3>
                    <p className="text-xs text-[#FF6B00] font-semibold">{current.role} • <span className="text-gray-300">{current.company}</span></p>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#FF6B00]' : 'w-2.5 bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-[#2E2E2E] text-white hover:bg-[#FF6B00] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-[#2E2E2E] text-white hover:bg-[#FF6B00] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
