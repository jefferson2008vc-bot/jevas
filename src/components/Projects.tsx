import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, MapPin, Calendar, CheckCircle2, X, ExternalLink, Calculator } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/companyData';
import { Project } from '../types';

interface ProjectsProps {
  onOpenQuoteModal: () => void;
  isDarkMode?: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuoteModal, isDarkMode = true }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-gray-100 text-gray-900'}`}>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>OBRAS Y DESARROLLOS DE GRAN ENVERGADURA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Proyectos <span className="text-[#FF6B00]">Destacados</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans">
            Casos de éxito donde la precisión en el diseño, la calidad en la soldadura y la puntualidad marcaron la diferencia.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 group"
            >
              {/* Project Cover Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

                <span className="absolute top-4 left-4 text-[11px] font-mono font-bold uppercase tracking-widest bg-[#FF6B00] text-white px-3 py-1 rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#FF6B00] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2 line-clamp-3 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-300 mt-4 pt-3 border-t border-white/10">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#FF6B00] hover:bg-[#E05D00] text-white text-xs font-bold rounded-xl shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 cursor-pointer"
                  >
                    <span>Ver Proyecto en Detalle</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div className="bg-[#1A1A1A] border border-[#FF6B00]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#2E2E2E] text-white hover:bg-[#FF6B00] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden h-64 mb-6 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl font-bold font-heading text-white mt-1">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-4 text-xs text-gray-300 my-3 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" /> {selectedProject.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" /> Año: {selectedProject.year}
                </span>
                <span>Cliente: <strong className="text-white">{selectedProject.client}</strong></span>
              </div>

              <p className="text-sm text-gray-300 font-sans leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="bg-[#121212] p-4 rounded-xl border border-white/10 mb-6">
                <h4 className="text-xs font-bold font-heading uppercase text-gray-400 mb-2">Especificaciones Técnicas:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProject.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="text-xs text-gray-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuoteModal();
                  }}
                  className="flex-1 py-3 bg-[#FF6B00] hover:bg-[#E05D00] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/30"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Cotizar Proyecto Similar</span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
