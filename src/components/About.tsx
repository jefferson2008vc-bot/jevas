import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Building2, Users, ShieldCheck, Target, Eye, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_STATS, COMPANY_INFO } from '../data/companyData';

interface AboutProps {
  isDarkMode?: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode = true }) => {
  const [activeTab, setActiveTab] = useState<'mision' | 'vision' | 'valores'>('mision');

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-8 h-8 text-[#FF6B00]" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-[#FF6B00]" />;
      case 'Users': return <Users className="w-8 h-8 text-[#FF6B00]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-[#FF6B00]" />;
      default: return <Award className="w-8 h-8 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="nosotros" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NUESTRA TRAYECTORIA & COMPROMISO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Sobre <span className="text-[#FF6B00]">Construcciones JEVAS</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
            Más de dos décadas transformando acero en infraestructura duradera, segura e innovadora para los sectores industrial, comercial y residencial.
          </p>
        </div>

        {/* Stats Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                isDarkMode
                  ? 'bg-[#1A1A1A] border-white/10 hover:border-[#FF6B00]/50 shadow-xl'
                  : 'bg-white border-gray-200 hover:border-[#FF6B00] shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#FF6B00]/15 group-hover:scale-110 transition-transform duration-300">
                  {getStatIcon(stat.icon)}
                </div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">JEVAS</span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#FF6B00] group-hover:text-glow-orange transition-all">
                {stat.value}
              </div>

              <h3 className="text-base font-bold font-heading mt-1">{stat.label}</h3>
              <p className="text-xs text-gray-400 mt-1 leading-snug">{stat.subtext}</p>

              {/* Decorative Corner Bar */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#FF6B00]/20 to-transparent rounded-bl-3xl" />
            </motion.div>
          ))}
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#FF6B00]/30 shadow-2xl group">
              <img
                src={COMPANY_INFO.images.structure}
                alt="Estructura metálica galpón Construcciones JEVAS"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#121212]/90 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF6B00] animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                    TALLER INDUSTRIAL & MONTAJE EN CAMPO
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-white mt-1">
                  Tecnología de Punta & Soldadores Certificados AWS
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Column Text & Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#FF6B00]">
                Ingeniería, Fuerza & Precisión en Cada Soldadura
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                En <strong>CONSTRUCCIONES JEVAS</strong>, nos especializamos en la conceptualización, diseño, fabricación e instalación de estructuras metálicas pesadas y ligeras. Nuestro taller cuenta con equipamiento industrial moderno, incluyendo mesas de armado CNC, cortadoras por plasma y células de soldadura MIG/TIG de alto rendimiento.
              </p>
            </div>

            {/* Mission / Vision / Values Tabs */}
            <div className="pt-2">
              <div className="flex border-b border-gray-700/60 gap-4">
                <button
                  onClick={() => setActiveTab('mision')}
                  className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                    activeTab === 'mision'
                      ? 'border-[#FF6B00] text-[#FF6B00]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Target className="w-4 h-4" /> Misión
                </button>

                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                    activeTab === 'vision'
                      ? 'border-[#FF6B00] text-[#FF6B00]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-4 h-4" /> Visión
                </button>

                <button
                  onClick={() => setActiveTab('valores')}
                  className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                    activeTab === 'valores'
                      ? 'border-[#FF6B00] text-[#FF6B00]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Heart className="w-4 h-4" /> Valores
                </button>
              </div>

              <div className="pt-4 text-sm text-gray-300 leading-relaxed min-h-[110px]">
                {activeTab === 'mision' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                    <p>
                      Proveer soluciones integrales de fabricación metálica y soldadura de máxima calidad, garantizando la seguridad estructural, el cumplimiento puntual de los cronogramas y la total satisfacción de nuestros clientes mediante tecnología avanzada e ingeniería experta.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'vision' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                    <p>
                      Consolidarnos como la empresa referente líder en construcción metálica y soldadura industrial a nivel nacional, destacándonos por la innovación en procesos automatizados, la sostenibilidad ambiental y la excelencia en el talento humano.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'valores' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-3 pt-1">
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> Calidad e Integridad
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> Seguridad Industrial
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> Cumplimiento de Plazos
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" /> Innovación Tecnológica
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
