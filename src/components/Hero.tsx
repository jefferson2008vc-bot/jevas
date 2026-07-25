import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Flame, ArrowRight, Calculator, Sparkles, Building2, Cpu, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Welding Sparks Canvas Particle Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }

    const sparks: Spark[] = [];
    const colors = ['#FF6B00', '#FF9E00', '#FFD000', '#00D2FF', '#FFFFFF'];

    const createSpark = () => {
      // Spawn near the bottom center / right where welding robots operate
      const originX = width * (0.5 + Math.random() * 0.4);
      const originY = height * (0.4 + Math.random() * 0.3);

      sparks.push({
        x: originX,
        y: originY,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.8) * 8 - 2,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 40 + 20,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Randomly spawn new sparks
      if (Math.random() < 0.4) {
        createSpark();
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.2; // gravity
        s.life++;

        const opacity = 1 - s.life / s.maxLife;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fill();

        if (s.life >= s.maxLife) {
          sparks.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#121212]">
      {/* Background Image with Dark Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src={COMPANY_INFO.images.hero}
          alt="Taller industrial de soldadura Construcciones JEVAS"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1] scale-105 transform animate-spark"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.18),transparent_60%)]" />
      </div>

      {/* Sparks Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none w-full h-full" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-6 text-left"
          >
            {/* Top Industrial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A]/80 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-[#FF6B00]/10">
              <Sparkles className="w-4 h-4 animate-spin text-[#FF6B00]" style={{ animationDuration: '6s' }} />
              <span>LÍDERES EN INGENIERÍA & SOLDADURA CERTIFICADA</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white leading-none">
              CONSTRUCCIONES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-amber-400 to-[#FF6B00] text-glow-orange">
                JEVAS
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl text-gray-300 font-sans max-w-2xl font-light leading-relaxed">
              Expertos en <strong className="text-white font-semibold">estructuras metálicas</strong>, soldadura industrial de alta precisión, galpones y soluciones de ingeniería pesada.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-300 font-medium">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00]" /> Norma AWS D1.1
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Building2 className="w-4 h-4 text-[#FF6B00]" /> Galpones & Naves
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Cpu className="w-4 h-4 text-[#FF6B00]" /> Robots de Soldadura
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#FF6B00] hover:bg-[#E05D00] text-white font-extrabold text-base rounded-2xl shadow-xl shadow-[#FF6B00]/30 hover:shadow-[#FF6B00]/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <Calculator className="w-5 h-5" />
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#proyectos"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#2E2E2E]/80 hover:bg-[#2E2E2E] text-white font-bold text-base rounded-2xl border border-white/15 hover:border-[#FF6B00]/50 transition-all duration-300 backdrop-blur-md"
              >
                <span>Nuestros Proyectos</span>
              </a>
            </div>
          </motion.div>

          {/* Right Floating Card Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="glass-card rounded-3xl p-6 relative border border-[#FF6B00]/30 glow-orange">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF6B00] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#FF6B00]/40">
                <Flame className="w-7 h-7" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#FF6B00]/20 rounded-xl text-[#FF6B00]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-heading text-white">Calidad Certificada 100%</h2>
                    <p className="text-xs text-gray-400">ISO 9001 & AWS D1.1 Structural Code</p>
                  </div>
                </div>

                <hr className="border-white/10" />

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Precisión Dimensional:</span>
                    <strong className="text-[#FF6B00]">+/- 0.5 mm</strong>
                  </div>
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Capacidad de Producción:</span>
                    <strong className="text-white">250 Ton/Mes</strong>
                  </div>
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Garantía Estructural:</span>
                    <strong className="text-[#FF6B00]">10 Años Escritos</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contacto"
                    className="block text-center py-2.5 rounded-xl bg-white/10 hover:bg-[#FF6B00] text-white text-xs font-bold transition-colors"
                  >
                    Atención Inmediata por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
