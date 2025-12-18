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
    heroButtonTitle: "Laser Lipolysis",
    heroTitle: "Experts in Laser Lipolysis.",
    heroSubtitle: "Experience the art of body contouring through advanced laser lipolysis technology. Minimally invasive, and designed exclusively for you.",
    heroCta: "Book on WhatsApp",
    
    // Services
    servicesButtonTitle: "Excellence",
    servicesTitle: "Our Services",
    servicesSubtitle: "Proven excellence in aesthetic medicine",
    
    service1Title: "Laser-Lipolysis",
    service1Desc: "How does laser liposuction work? Through a tiny incision, a thin laser fiber reaches the localized fat deposits and dissolves them from within, helping to tighten the skin. Precise, safe, and with visible results!",
    
    service2Title: "Post-Operative Care",
    service2Desc: "Comprehensive aftercare protocols designed to optimize recovery and enhance results. Personalized attention ensuring comfort and confidence throughout your healing journey.",
    
    service3Title: "Private transportation to your city of origin in Colombia",
    service3Desc: "Luxury door-to-door transportation coordinated seamlessly with appointments. Private vehicles, professional chauffeurs, and complete discretion for your peace of mind.",
    
    service4Title: "Buttock Lipotransfer",
    service4Desc: "Buttock fat transfer increases volume and improves body shape using the patient's own fat. Through liposuction and subsequent reinjection, a firmer, more lifted, and completely natural-looking silhouette is achieved without the need for implants.",
    

    // Gallery
    galleryButtonTitle: "Gallery",
    galleryTitle: "Our Experience",
    gallerySubtitle: "Observe the luxury and precision",
      
    // Contact
    contactButtonTitle: "Contact",
    contactTitle: "Begin Your Journey",
    contactSubtitle: "Send us a message",
    contactName: "Full Name",
    contactEmail: "Email Address",
    contactPhone: "Phone Number",
    contactMessage: "Your Message",
    contactSubmit: "Send Message",
    contactResponse: "Response within 15 min on WhatsApp",
    
    // Footer
    disclaimer: "Corporal Luxe is an independent patient coordinator; all procedures are performed by certified cosmetic surgeons and physicians.",
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
    heroButtonTitle: "Expertos en Lipolisis Láser",
    heroTitle: "Expertos en lipólisis láser.",
    heroSubtitle: "Experimenta el arte del refinamiento corporal a través de tecnología avanzada de lipólisis láser. Mínimamente invasivo y diseñado exclusivamente para ti.",
    heroCta: "Reservar en WhatsApp",
    
    // Services
    servicesButtonTitle: "Excelencia",
    servicesTitle: "Nuestros Servicios",
    servicesSubtitle: "Excelencia comprobada en medicina estética",
    
    service1Title: "Lipólisis Láser",
    service1Desc: "¿Cómo funciona la Lipo láser? A través de una mínima incisión, una fibra láser delgada llega directo a la grasa localizada y la disuelve desde adentro, ayudando a reafirmar la piel. Preciso, seguro y con resultados visibles!",
    
    service2Title: "Cuidado Post-Operatorio",
    service2Desc: "Protocolos integrales de cuidado posterior diseñados para optimizar la recuperación y mejorar resultados. Atención personalizada asegurando comodidad y confianza durante tu sanación.",
    
    service3Title: "Transporte privado a su ciudad de orígen",
    service3Desc: "Transporte de lujo puerta a puerta coordinado perfectamente con citas. Vehículos privados, conductores profesionales y completa discreción para tu tranquilidad.",
    
    service4Title: "Lipotransferencia Glútea",
    service4Desc: "La lipotransferencia de glúteos aumenta el volumen y mejora la forma del cuerpo utilizando la propia grasa del paciente. Mediante una liposucción y posterior reinyección, se logra una silueta más firme, proyectada y de aspecto totalmente natural sin necesidad de implantes.",
    

    // Gallery
    galleryButtonTitle: "Galeria",
    galleryTitle: "Nuestra Experiencia",
    gallerySubtitle: "Observa el lujo y precisión",
    
    // Contact
    contactButtonTitle: "Contacto",
    contactTitle: "Comienza Tu Camino",
    contactSubtitle: "Envíanos un mensaje",
    contactName: "Nombre Completo",
    contactEmail: "Correo Electrónico",
    contactPhone: "Número de Teléfono",
    contactMessage: "Tu Mensaje",
    contactSubmit: "Enviar Mensaje",
    contactResponse: "Respuesta pronta",
    
    // Footer
    disclaimer: "Corporal Luxe es un coordinador de pacientes independiente; todos los procedimientos son realizados por cirujanos y médicos estéticos certificados.",
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