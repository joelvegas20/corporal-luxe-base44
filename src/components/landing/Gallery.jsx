import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/d3a76d49e_WhatsAppImage2025-12-15at104821.jpg",
    alt: "Equipo de láser-lipólisis",
    span: "col-span-2 row-span-2"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/c40914361_WhatsAppImage2025-12-15at104817.jpg",
    alt: "Profesional realizando tratamiento",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/49c42a984_WhatsAppImage2025-12-15at1048201.jpeg",
    alt: "Especialista en procedimiento",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/d019fa466_WhatsAppImage2025-12-15at104820.jpeg",
    alt: "Resultados antes y después",
    span: "col-span-1 row-span-2"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/877cd70cf_WhatsAppImage2025-12-15at1048191.jpg",
    alt: "Transformación de paciente",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/d87cd8e54_WhatsAppImage2025-12-15at1048204.jpg",
    alt: "Resultados comparativos",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/8f0c0ec7e_WhatsAppImage2025-12-15at1048181.jpg",
    alt: "Tratamiento abdominal",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/2639d198a_WhatsAppImage2025-12-15at1048193.jpg",
    alt: "Marcado pre-procedimiento",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/acdef15f4_WhatsAppImage2025-12-15at1048182.jpg",
    alt: "Procedimiento en proceso",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/55420c313_WhatsAppImage2025-12-15at1048194.jpg",
    alt: "Profesional en sala de tratamiento",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/a8a73180a_WhatsAppImage2025-12-15at1048184.jpg",
    alt: "Resultados de tratamiento",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/3777408f2_WhatsAppImage2025-12-15at104818.jpeg",
    alt: "Resultado post-tratamiento",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/90cb7dce5_WhatsAppImage2025-12-15at201938_6779dd32.jpg",
    alt: "Tratamiento de lipólisis",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/a9bdb1d77_WhatsAppImage2025-12-15at201938_5fcf2991.jpg",
    alt: "Procedimiento de contorneo corporal",
    span: "col-span-1 row-span-1"
  },
  {
    type: "video",
    url: "https://jzuhcxmtrgyfsqtrxgrv.supabase.co/storage/v1/object/public/corporal-luxe/WhatsApp%20Video%202025-12-15%20at%2021.13.45.mp4",
    alt: "Video de procedimiento",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/a63034057_WhatsAppImage2025-12-16at175922.jpeg",
    alt: "Áreas de tratamiento corporal",
    span: "col-span-1 row-span-2"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/5999b8a22_WhatsAppImage2025-12-16at180307.jpeg",
    alt: "Resultados de reducción de grasa",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/d3c6586c6_WhatsAppImage2025-12-16at180743.jpeg",
    alt: "Transformación corporal",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693db443e2ae5dcd5b111c02/5f9bf7dbe_WhatsAppImage2025-12-16at181123.jpeg",
    alt: "Contorneo de glúteos y cintura",
    span: "col-span-1 row-span-1"
  }
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-gradient-to-br from-rose-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-medium tracking-wider uppercase mb-6">
            {t('galleryButtonTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 font-light">
            {t('galleryTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            {t('gallerySubtitle')}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[200px] lg:auto-rows-[250px]">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.span} relative group ${item.type !== 'video' ? 'cursor-pointer' : ''} overflow-hidden rounded-3xl`}
              onClick={() => item.type !== 'video' && setSelectedImage(item)}
            >
              {item.type === 'video' ? (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
              ) : (
                <>
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ZoomIn className="w-6 h-6 text-rose-600" />
                    </div>
                  </div>

                  {/* Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-rose-300/50 transition-colors duration-500" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 border border-rose-200 flex items-center justify-center text-gray-700 hover:text-rose-600 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}