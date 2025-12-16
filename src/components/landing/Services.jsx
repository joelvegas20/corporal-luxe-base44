import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Car } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    titleKey: 'service1Title',
    descKey: 'service1Desc'
  },
  {
    icon: Heart,
    titleKey: 'service2Title',
    descKey: 'service2Desc'
  },
  {
    icon: Car,
    titleKey: 'service3Title',
    descKey: 'service3Desc'
  }
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-50/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-medium tracking-wider uppercase mb-6">
            Excelencia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 font-light">
            {t('servicesTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-rose-50 to-white rounded-3xl p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50 border border-rose-100/50">
                {/* Icon Container */}
                <div className="mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.1) 0%, rgba(243, 196, 211, 0.2) 100%)'
                    }}
                  >
                    <service.icon className="w-7 h-7 text-rose-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl text-gray-900 mb-4 font-light">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(service.descKey)}
                </p>

                {/* Hover Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-rose-200/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}