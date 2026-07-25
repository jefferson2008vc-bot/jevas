import React, { useState } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Projects } from './components/Projects';
import { WorkProcess } from './components/WorkProcess';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Fabricación de estructuras metálicas');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Initial Futuristic Industrial Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Main App Layout */}
      {!loading && (
        <>
          {/* Header & Sticky Navigation */}
          <Navbar
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            isDarkMode={isDarkMode}
            onToggleTheme={toggleTheme}
          />

          {/* Hero Section with Welding Sparks Canvas */}
          <main>
            <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

            {/* About Us & Stats */}
            <About isDarkMode={isDarkMode} />

            {/* Services Grid (16 Services) */}
            <Services
              onSelectServiceForQuote={(srvName) => handleOpenQuoteModal(srvName)}
              isDarkMode={isDarkMode}
            />

            {/* Filterable Masonry Gallery */}
            <Gallery isDarkMode={isDarkMode} />

            {/* Featured Projects Showcase */}
            <Projects
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              isDarkMode={isDarkMode}
            />

            {/* Work Process Timeline */}
            <WorkProcess isDarkMode={isDarkMode} />

            {/* Client Testimonials Slider */}
            <Testimonials isDarkMode={isDarkMode} />

            {/* FAQ Accordion */}
            <FAQ isDarkMode={isDarkMode} />

            {/* Contact Form & Google Map */}
            <Contact isDarkMode={isDarkMode} />
          </main>

          {/* Footer */}
          <Footer isDarkMode={isDarkMode} />

          {/* Floating WhatsApp & Controls */}
          <FloatingControls />

          {/* Instant Quote Calculator Modal */}
          <QuoteModal
            isOpen={quoteModalOpen}
            onClose={() => setQuoteModalOpen(false)}
            initialService={selectedServiceForQuote}
          />
        </>
      )}

    </div>
  );
}
