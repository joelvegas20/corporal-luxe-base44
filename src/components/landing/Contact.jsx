import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Send, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Open WhatsApp with pre-filled message
    const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=573228308728&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white">
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
            {t('contactButtonTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 font-light">
            {t('contactTitle')}
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-rose-50 to-white rounded-3xl p-8 lg:p-10 border border-rose-100/50 shadow-xl shadow-rose-100/20">
              <div className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t('contactName')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-2xl border-rose-200/50 bg-white/80 focus:border-rose-400 focus:ring-rose-400"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('contactEmail')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-2xl border-rose-200/50 bg-white/80 focus:border-rose-400 focus:ring-rose-400"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder={t('contactPhone')}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-2xl border-rose-200/50 bg-white/80 focus:border-rose-400 focus:ring-rose-400"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contactMessage')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="rounded-2xl border-rose-200/50 bg-white/80 focus:border-rose-400 focus:ring-rose-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-2xl text-white font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)',
                    boxShadow: '0 8px 24px rgba(233, 30, 99, 0.3)'
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      {t('contactSubmit')}
                    </span>
                  )}
                </Button>

                {/* Response Time */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 pt-2">
                  <Clock className="w-4 h-4 text-rose-500" />
                  <span>{t('contactResponse')}</span>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] lg:h-full min-h-[500px]"
          >
            <div className="h-full rounded-3xl overflow-hidden shadow-xl shadow-rose-100/20 border border-rose-100/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4880543543322!2d-74.06334092349486!3d4.684912341791083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ae9959f8f71%3A0xce9e20bdfe1b0e97!2sCra.%2048%20%2395-47%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1765845270225!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Corporal Luxe Location"
              />
            </div>

            {/* Location Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-rose-100/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Corporal Luxe</p>
                  <p className="text-xs text-gray-600">CRA 48 # 95-47, Bogotá, Colombia</p>
                  <p className="text-xs text-gray-500 mt-1">+57 322 8308 728</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}