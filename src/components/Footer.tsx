import React from 'react';
import { Flame, Facebook, Instagram, Linkedin, MessageCircle, ArrowUp, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

interface FooterProps {
  isDarkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode = true }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative border-t overflow-hidden ${isDarkMode ? 'bg-[#0A0A0A] text-white border-white/10' : 'bg-gray-900 text-white border-gray-800'}`}>
      
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B00] flex items-center justify-center text-white shadow-lg shadow-[#FF6B00]/30">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight font-heading block leading-none text-white">
                  CONSTRUCCIONES <span className="text-[#FF6B00]">JEVAS</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gray-400 font-mono block uppercase">
                  ESTRUCTURAS & SOLDADURA
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-sm">
              Empresa líder en fabricación de estructuras metálicas, soldadura industrial de alta precisión, galpones y cerrajería en general. Calidad garantizada bajo norma AWS D1.1.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#FF6B00] text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#FF6B00] text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#FF6B00] text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-green-600 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold font-heading uppercase text-white tracking-wider border-b border-[#FF6B00]/40 pb-2 inline-block">
              Mapa del Sitio
            </h3>
            <ul className="space-y-2 text-xs text-gray-400 font-sans">
              <li><a href="#inicio" className="hover:text-[#FF6B00] transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-[#FF6B00] transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-[#FF6B00] transition-colors">Servicios Industriales</a></li>
              <li><a href="#galeria" className="hover:text-[#FF6B00] transition-colors">Galería Fotográfica</a></li>
              <li><a href="#proyectos" className="hover:text-[#FF6B00] transition-colors">Proyectos Destacados</a></li>
              <li><a href="#proceso" className="hover:text-[#FF6B00] transition-colors">Proceso de Trabajo</a></li>
              <li><a href="#testimonios" className="hover:text-[#FF6B00] transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="hover:text-[#FF6B00] transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-[#FF6B00] transition-colors">Contacto & Ubicación</a></li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold font-heading uppercase text-white tracking-wider border-b border-[#FF6B00]/40 pb-2 inline-block">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2 text-xs text-gray-400 font-sans">
              {SERVICES_LIST.slice(0, 8).map((srv) => (
                <li key={srv.id}>
                  <a href="#servicios" className="hover:text-[#FF6B00] transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#FF6B00]" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Certifications & Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold font-heading uppercase text-white tracking-wider border-b border-[#FF6B00]/40 pb-2 inline-block">
              Garantía & Seguridad
            </h3>
            <div className="p-4 bg-[#121212] rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
                <span>Norma AWS D1.1</span>
              </div>
              <p className="text-[11px] text-gray-400">
                10 Años de garantía estructural respaldados con dossier técnico de calidad.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-3 bg-[#1A1A1A] hover:bg-[#FF6B00] text-white text-xs font-bold rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-colors cursor-pointer mt-4"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Volver Arriba</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-sans gap-4">
          <p>© {new Date().getFullYear()} CONSTRUCCIONES JEVAS. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#faq" className="hover:text-gray-300 transition-colors">Aviso Legal</a>
            <a href="#faq" className="hover:text-gray-300 transition-colors">Política de Privacidad</a>
            <a href="#contacto" className="hover:text-gray-300 transition-colors">Soporte Técnico</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
