import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, PhoneCall, Calculator, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  isDarkMode,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = ['inicio', 'nosotros', 'servicios', 'galeria', 'proyectos', 'proceso', 'testimonios', 'faq', 'contacto'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Galería', href: '#galeria', id: 'galeria' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Proceso', href: '#proceso', id: 'proceso' },
    { name: 'Testimonios', href: '#testimonios', id: 'testimonios' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#FF6B00]/20 py-3 shadow-2xl'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-lg text-gray-900'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#FF6B00] flex items-center justify-center text-white shadow-lg shadow-[#FF6B00]/30 group-hover:scale-105 transition-transform duration-300">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight font-heading block leading-none">
              CONSTRUCCIONES <span className="text-[#FF6B00]">JEVAS</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] text-gray-400 font-mono block uppercase">
              ESTRUCTURAS & SOLDADURA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-[#FF6B00] bg-[#FF6B00]/10 font-bold'
                    : isDarkMode || !scrolled
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-gray-700 hover:text-[#FF6B00] hover:bg-gray-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Phone Call */}
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className={`hidden xl:flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg border transition-colors ${
              isDarkMode || !scrolled
                ? 'border-white/10 text-gray-300 hover:border-[#FF6B00] hover:text-[#FF6B00]'
                : 'border-gray-300 text-gray-700 hover:border-[#FF6B00] hover:text-[#FF6B00]'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark and light theme"
            className={`p-2 rounded-lg border transition-all ${
              isDarkMode || !scrolled
                ? 'border-white/10 text-gray-300 hover:text-white hover:bg-white/10'
                : 'border-gray-300 text-gray-700 hover:text-black hover:bg-gray-100'
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Cotizar CTA Button */}
          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#FF6B00] hover:bg-[#E05D00] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calculator className="w-4 h-4" />
            <span>Solicitar Cotización</span>
          </button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark and light theme"
            className="p-2 text-gray-300 hover:text-white"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="p-2.5 rounded-xl bg-[#2E2E2E]/80 text-white border border-white/10 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B00]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121212]/98 backdrop-blur-xl border-b border-[#FF6B00]/30 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-[#FF6B00] text-white font-bold'
                    : 'bg-[#1A1A1A] text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#FF6B00] hover:bg-[#E05D00] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#FF6B00]/30"
            >
              <Calculator className="w-4 h-4" />
              <span>Solicitar Cotización Gratis</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#2E2E2E] text-white text-xs font-semibold rounded-xl border border-white/10"
            >
              <PhoneCall className="w-4 h-4 text-[#FF6B00]" />
              <span>Llamar: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
