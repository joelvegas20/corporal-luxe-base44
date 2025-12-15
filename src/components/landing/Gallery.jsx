import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80&blur=5",
    alt: "Luxury spa atmosphere",
    span: "col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80&blur=5",
    alt: "Premium wellness center",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80&blur=5",
    alt: "Modern clinic interior",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&blur=5",
    alt: "Consultation space",
    span: "col-span-1 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80&blur=5",
    alt: "Luxury details",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80&blur=5",
    alt: "Premium equipment",
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
            Gallery
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
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative group cursor-pointer overflow-hidden rounded-3xl`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
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