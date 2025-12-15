import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '../components/landing/LanguageContext';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import Gallery from '../components/landing/Gallery';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';
import WhatsAppButton from '../components/landing/WhatsAppButton';

function SEOHead() {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Update document title based on language
    if (language === 'es') {
      document.title = 'Lipolisis Láser Colombia | Corporal Luxe – Lujo Rosado';
    } else {
      document.title = 'Laser-Lipolysis in Colombia | Corporal Luxe – Rose-Tone Luxury';
    }
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 
        language === 'es' 
          ? 'Corporal Luxe - Lipolisis láser en Colombia con reserva por WhatsApp. Experiencia de lujo rosado, atención personalizada y resultados excepcionales.'
          : 'Corporal Luxe - Laser lipolysis in Colombia with WhatsApp booking. Rose-tone luxury experience, personalized care and exceptional results.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'es' 
        ? 'Corporal Luxe - Lipolisis láser en Colombia con reserva por WhatsApp. Experiencia de lujo rosado, atención personalizada y resultados excepcionales.'
        : 'Corporal Luxe - Laser lipolysis in Colombia with WhatsApp booking. Rose-tone luxury experience, personalized care and exceptional results.';
      document.head.appendChild(meta);
    }
  }, [language]);
  
  return null;
}

function LandingContent() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <LandingContent />
    </LanguageProvider>
  );
}