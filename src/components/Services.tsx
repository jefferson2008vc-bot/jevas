import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, DoorClosed, Maximize2, Warehouse, TrendingUp, Layers, Umbrella, Factory,
  Zap, Sparkles, Flame, Wrench, KeyRound, Shield, Lock, CheckCircle2, Search, ArrowRight, Calculator
} from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';
import { Service } from '../types';

interface ServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
  isDarkMode?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote, isDarkMode = true }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-7 h-7 text-[#FF6B00]" };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'DoorClosed': return <DoorClosed {...props} />;
      case 'Maximize2': return <Maximize2 {...props} />;
      case 'Warehouse': return <Warehouse {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Umbrella': return <Umbrella {...props} />;
      case 'Factory': return <Factory {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'KeyRound': return <KeyRound {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Lock': return <Lock {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      default: return <Building2 {...props} />;
    }
  };

  const categories = [
    { id: 'todos', label: 'Todos los Servicios' },
    { id: 'estructuras', label: 'Estructuras & Galpones' },
    { id: 'puertas', label: 'Puertas & Portones' },
    { id: 'soldadura', label: 'Soldadura Especializada' },
    { id: 'coberturas', label: 'Techos & Cubiertas' },
    { id: 'cerrajeria', label: 'Escaleras & Cerrajería' },
    { id: 'mantenimiento', label: 'Mantenimiento' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = selectedCategory === 'todos' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="servicios" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-gray-100 text-gray-900'}`}>
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>SOLUCIONES INTEGRALES EN ACERO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Nuestros <span className="text-[#FF6B00]">Servicios Especializados</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans">
            Fabricación de alta precisión, soldadura calificada y montaje industrial adaptado a las especificaciones técnicas de su proyecto.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4 bg-[#1A1A1A]/80 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar servicio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#121212] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
              />
            </div>

          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group hover:border-[#FF6B00] transition-all duration-300"
            >
              {service.popular && (
                <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-[#FF6B00] text-white rounded-full shadow-md">
                  DESTACADO
                </span>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FF6B00]/25 transition-all duration-300">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#FF6B00] transition-colors leading-tight">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2 line-clamp-3 font-sans leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-1.5 pt-3 border-t border-white/10">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-[11px] text-gray-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-4">
                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#2E2E2E] hover:bg-[#FF6B00] text-white text-xs font-bold rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF6B00]/30 cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Cotizar Servicio</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#1A1A1A] rounded-2xl border border-white/10">
            <p className="text-gray-400 font-sans">No se encontraron servicios que coincidan con su búsqueda.</p>
            <button
              onClick={() => { setSelectedCategory('todos'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 bg-[#FF6B00] text-white text-xs font-bold rounded-xl"
            >
              Ver todos los servicios
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
