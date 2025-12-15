import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=573228308728&text&type=phone_number&app_absent=0";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('whatsappLabel')}
        className="group relative flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-300 hover:scale-110 shadow-xl"
        style={{
          background: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)',
          boxShadow: '0 8px 24px rgba(233, 30, 99, 0.4)'
        }}
      >
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-rose-500 animate-ping opacity-30" />
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse" />
        </span>
      </a>
    </motion.div>
  );
}