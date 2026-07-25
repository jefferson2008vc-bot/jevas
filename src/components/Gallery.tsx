import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, X, Maximize2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';

interface GalleryProps {
  isDarkMode?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ isDarkMode = true }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['Todos', 'Taller', 'Galpones', 'Puertas', 'Escaleras', 'Soldadura', 'Cubiertas', 'Oficinas'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'Todos') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextImage = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="galeria" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>PORTAFOLIO VISUAL DE EXCELENCIA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Galería de <span className="text-[#FF6B00]">Trabajos & Taller</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans">
            Inspeccione fotografías fotorrealistas de alta resolución de nuestras instalaciones, procesos de soldadura y obras ejecutadas.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/30'
                  : 'bg-[#1A1A1A] text-gray-400 hover:text-white hover:bg-[#2E2E2E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Masonry-style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#1A1A1A] cursor-pointer shadow-xl"
              onClick={() => openLightbox(idx)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B00] font-bold">
                  {item.category}
                </span>
                <h3 className="text-base font-bold font-heading text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#FF6B00] font-bold">
                  <Maximize2 className="w-4 h-4" /> Ampliar Fotografía 8K
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#2E2E2E] text-white hover:bg-[#FF6B00] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-[#2E2E2E]/80 text-white hover:bg-[#FF6B00] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-[#2E2E2E]/80 text-white hover:bg-[#FF6B00] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Container */}
            <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
              <img
                src={filteredItems[selectedItemIndex].image}
                alt={filteredItems[selectedItemIndex].title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl border border-white/20 shadow-2xl"
                referrerPolicy="no-referrer"
              />

              <div className="mt-4 text-center max-w-2xl bg-[#1A1A1A]/90 p-4 rounded-2xl border border-white/10">
                <span className="text-xs font-mono text-[#FF6B00] uppercase font-bold tracking-widest">
                  {filteredItems[selectedItemIndex].category}
                </span>
                <h3 className="text-xl font-bold font-heading text-white mt-1">
                  {filteredItems[selectedItemIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2">
                  {filteredItems[selectedItemIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
