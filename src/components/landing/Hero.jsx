import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=573228308728&text&type=phone_number&app_absent=0";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FCE8F6 0%, #F3C4D3 50%, #FCE8F6 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/30 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-rose-200/20 blur-3xl"
        />
        
        {/* Subtle Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #E91E63 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-rose-200/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-rose-600 text-sm font-medium tracking-wider uppercase">
              Laser-Lipolysis Specialists
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-rose-900 leading-tight mb-6 font-light tracking-tight"
          >
            {t('heroTitle')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-rose-800/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {t('heroSubtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)',
              boxShadow: '0 8px 24px rgba(233, 30, 99, 0.3)'
            }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('heroCta')}</span>
          </motion.a>

          {/* Decorative Rose Petals */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  y: [0, -100],
                  x: [0, Math.random() * 50 - 25],
                  rotate: [0, Math.random() * 360]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 1.5
                }}
                className="absolute w-4 h-4 rounded-full bg-rose-300/40 blur-sm"
                style={{
                  left: `${10 + i * 15}%`,
                  bottom: '10%'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-rose-400/40 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-rose-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}