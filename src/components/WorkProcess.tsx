import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DraftingCompass, Scissors, Flame, Paintbrush, Truck, CheckCircle, ChevronDown, Sparkles } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data/companyData';

interface WorkProcessProps {
  isDarkMode?: boolean;
}

export const WorkProcess: React.FC<WorkProcessProps> = ({ isDarkMode = true }) => {
  const [expandedStep, setExpandedStep] = useState<string | null>('01');

  const getStepIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#FF6B00]" };
    switch (iconName) {
      case 'DraftingCompass': return <DraftingCompass {...props} />;
      case 'Scissors': return <Scissors {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Paintbrush': return <Paintbrush {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'CheckCircle': return <CheckCircle {...props} />;
      default: return <CheckCircle {...props} />;
    }
  };

  return (
    <section id="proceso" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-gray-900'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>METODOLOGÍA DE FABRICACIÓN INDUSTRIAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Nuestro <span className="text-[#FF6B00]">Proceso de Trabajo</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans">
            Garantizamos trazabilidad y control de calidad rigoroso en cada etapa del ciclo de producción.
          </p>
        </div>

        {/* Timeline Desktop Grid / Mobile Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          
          {WORK_PROCESS_STEPS.map((step, idx) => {
            const isExpanded = expandedStep === step.number;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-card rounded-3xl p-6 relative transition-all duration-300 border ${
                  isExpanded ? 'border-[#FF6B00] shadow-xl shadow-[#FF6B00]/20' : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/15 flex items-center justify-center">
                      {getStepIcon(step.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider block">
                        ETAPA {step.number}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedStep(isExpanded ? null : step.number)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#FF6B00]' : ''}`} />
                  </button>
                </div>

                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {step.description}
                </p>

                {/* Expanded Details */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/10 space-y-2"
                  >
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Puntos Clave de Control:</h4>
                    <ul className="space-y-1.5">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
