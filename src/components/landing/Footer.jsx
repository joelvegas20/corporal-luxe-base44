import React from 'react';
import { useLanguage } from './LanguageContext';
import { Instagram, Facebook, MapPin, Phone, Mail, FileText } from 'lucide-react';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'gallery', href: '#gallery' },
    { key: 'contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61576460734284', label: 'Facebook' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="relative pt-16 pb-8 text-white"
      style={{
        background: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-light mb-6 text-rose-50">
              Corporal Luxe
            </h3>
            
            {/* Disclaimer */}
            <p className="text-rose-100/70 text-sm leading-relaxed mb-6">
              {t('disclaimer')}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-rose-50 font-medium mb-6 tracking-wide">
              {t('quickLinks')}
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="block text-rose-100/80 hover:text-white text-sm transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Business Info Column (WhatsApp Meta Inspection Block) */}
          <div>
            <h4 className="text-rose-50 font-medium mb-6 tracking-wide flex items-center gap-2">
              <FileText size={16} />
              {t('businessInfo')}
            </h4>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-sm text-rose-100/80 space-y-2">
              <p className="font-medium text-white">Corporalluxe</p>
              <p><span className="text-rose-100/60">RUT:</span> 12345678</p>
              <p><span className="text-rose-100/60">{t('address')}:</span> CRA 48 # 95-47, Bogotá, Colombia</p>
              <p><span className="text-rose-100/60">{t('phone')}:</span> +57 322 8308 728 | +57 313 4870316 </p>
              <p><span className="text-rose-100/60">{t('email')}:</span> info@corporalluxe.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-rose-100/60 text-sm">
              © {new Date().getFullYear()} Corporal Luxe. All rights reserved.
            </p>

            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  language === 'es'
                    ? 'bg-white/20 text-white'
                    : 'text-rose-100/60 hover:text-white'
                }`}
                aria-label="Cambiar a Español"
              >
                <span>🇨🇴</span>
                <span>ES</span>
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-white/20 text-white'
                    : 'text-rose-100/60 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                <span>🇺🇸</span>
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}