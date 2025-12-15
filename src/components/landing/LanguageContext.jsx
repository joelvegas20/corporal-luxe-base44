import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navbar
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",
    
    // Hero
    heroTitle: "Sculpt in Rose-Toned Luxury.",
    heroSubtitle: "Experience the art of body refinement through advanced laser-lipolysis technology. Elegant, minimally-invasive, and designed exclusively for you.",
    heroCta: "Book on WhatsApp",
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Curated excellence in aesthetic medicine",
    
    service1Title: "Laser-Lipolysis",
    service1Desc: "Advanced technology targeting stubborn fat deposits while tightening skin. Minimally-invasive procedure with precise results and reduced recovery time for refined body contours.",
    
    service2Title: "Post-Operative Care",
    service2Desc: "Comprehensive aftercare protocols designed to optimize recovery and enhance results. Personalized attention ensuring comfort and confidence throughout your healing journey.",
    
    service3Title: "Concierge Transport",
    service3Desc: "Luxury door-to-door transportation coordinated seamlessly with appointments. Private vehicles, professional chauffeurs, and complete discretion for your peace of mind.",
    
    // Gallery
    galleryTitle: "The Experience",
    gallerySubtitle: "Glimpses of luxury and precision",
    
    // Contact
    contactTitle: "Begin Your Journey",
    contactSubtitle: "Send us a message",
    contactName: "Full Name",
    contactEmail: "Email Address",
    contactPhone: "Phone Number",
    contactMessage: "Your Message",
    contactSubmit: "Send Message",
    contactResponse: "Response within 15 min on WhatsApp",
    
    // Footer
    disclaimer: "Corporal Luxe is an independent patient-coordinator; all procedures are performed by third-party licensed medical professionals.",
    quickLinks: "Quick Links",
    businessInfo: "Business Information",
    address: "Address",
    phone: "Phone",
    email: "Email",
    
    // WhatsApp
    whatsappLabel: "Open WhatsApp",
    
    // Accessibility
    switchLanguage: "Switch language"
  },
  es: {
    // Navbar
    home: "Inicio",
    services: "Servicios",
    gallery: "Galería",
    contact: "Contacto",
    
    // Hero
    heroTitle: "Esculpe en Lujo Rosado.",
    heroSubtitle: "Experimenta el arte del refinamiento corporal a través de tecnología avanzada de láser-lipólisis. Elegante, mínimamente invasivo y diseñado exclusivamente para ti.",
    heroCta: "Reservar en WhatsApp",
    
    // Services
    servicesTitle: "Nuestros Servicios",
    servicesSubtitle: "Excelencia curada en medicina estética",
    
    service1Title: "Láser-Lipólisis",
    service1Desc: "Tecnología avanzada que apunta depósitos de grasa persistentes mientras reafirma la piel. Procedimiento mínimamente invasivo con resultados precisos y tiempo de recuperación reducido.",
    
    service2Title: "Cuidado Post-Operatorio",
    service2Desc: "Protocolos integrales de cuidado posterior diseñados para optimizar la recuperación y mejorar resultados. Atención personalizada asegurando comodidad y confianza durante tu sanación.",
    
    service3Title: "Transporte Concierge",
    service3Desc: "Transporte de lujo puerta a puerta coordinado perfectamente con citas. Vehículos privados, choferes profesionales y completa discreción para tu tranquilidad.",
    
    // Gallery
    galleryTitle: "La Experiencia",
    gallerySubtitle: "Vistazos de lujo y precisión",
    
    // Contact
    contactTitle: "Comienza Tu Camino",
    contactSubtitle: "Envíanos un mensaje",
    contactName: "Nombre Completo",
    contactEmail: "Correo Electrónico",
    contactPhone: "Número de Teléfono",
    contactMessage: "Tu Mensaje",
    contactSubmit: "Enviar Mensaje",
    contactResponse: "Respuesta en 15 min por WhatsApp",
    
    // Footer
    disclaimer: "Corporal Luxe es un coordinador de pacientes independiente; todos los procedimientos son realizados por profesionales médicos licenciados de terceros.",
    quickLinks: "Enlaces Rápidos",
    businessInfo: "Información Comercial",
    address: "Domicilio",
    phone: "Teléfono",
    email: "Correo",
    
    // WhatsApp
    whatsappLabel: "Abrir WhatsApp",
    
    // Accessibility
    switchLanguage: "Cambiar idioma"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');
  
  const t = (key) => translations[language][key] || key;
  
  const toggleLanguage = (lang) => setLanguage(lang);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}