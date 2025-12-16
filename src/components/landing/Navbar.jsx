import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'gallery', href: '#gallery' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white backdrop-blur-xl shadow-lg shadow-rose-100/50'
            : 'bg-white backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Language Toggle - Left */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'es'
                    ? 'bg-rose-100 text-rose-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-label="Cambiar a Español"
              >
                <svg className="w-5 h-5" viewBox="0 0 32 32">
                  <rect width="32" height="32" fill="#FCD116"/>
                  <rect y="10.667" width="32" height="10.667" fill="#003893"/>
                  <rect y="21.333" width="32" height="10.667" fill="#CE1126"/>
                </svg>
                <span className="hidden sm:inline">ES</span>
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-rose-100 text-rose-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-label="Switch to English"
              >
                <svg className="w-5 h-5" viewBox="0 0 32 32">
                  <rect width="32" height="32" fill="#B22234"/>
                  <rect y="2.462" width="32" height="2.462" fill="#FFF"/>
                  <rect y="7.385" width="32" height="2.462" fill="#FFF"/>
                  <rect y="12.308" width="32" height="2.462" fill="#FFF"/>
                  <rect y="17.231" width="32" height="2.462" fill="#FFF"/>
                  <rect y="22.154" width="32" height="2.462" fill="#FFF"/>
                  <rect y="27.077" width="32" height="2.462" fill="#FFF"/>
                  <rect width="12.8" height="14.769" fill="#3C3B6E"/>
                </svg>
                <span className="hidden sm:inline">EN</span>
              </button>
            </div>

            {/* Logo - Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
                className="inline-block"
              >
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/8345cb887_WhatsAppImage2025-12-13at135048.jpeg"
                  alt="Corporal Luxe Logo"
                  className="h-16 sm:h-14 w-auto"
                />
              </a>
            </div>

            {/* Desktop Nav Links - Right */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-gray-700 hover:text-rose-600 text-sm font-medium transition-colors duration-300 relative group"
                >
                  {t(link.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-rose-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />
            <div className="relative pt-24 px-6">
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-700 text-2xl font-light tracking-wide hover:text-rose-600 transition-colors"
                  >
                    {t(link.key)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}