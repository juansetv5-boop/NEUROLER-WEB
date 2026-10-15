'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, MessageSquare } from 'lucide-react';
import { ctaBannerData, contactData } from '@/data/content';
import { useBookingModal } from '@/context/BookingModalContext';

export const CTABanner: React.FC = () => {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor Elegante de Cierre con Gradiente Azul Pastel y Botón Naranja */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6d9ae3] via-[#5c8cd6] to-[#4e7ec8] text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-white/20"
        >
          
          {/* Elementos decorativos internos con flotación suave */}
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-white rounded-full blur-3xl pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-[#F28C4E] rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            
            {/* Titular */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
              {ctaBannerData.title}
            </h2>

            {/* Subtítulo */}
            <p className="text-base sm:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl font-normal">
              {ctaBannerData.subtitle}
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-base sm:text-lg font-black shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-white/25 cursor-pointer w-full sm:w-auto"
              >
                <MessageSquare className="w-6 h-6 fill-white" />
                <span>{ctaBannerData.buttonText}</span>
              </a>

              <button
                type="button"
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#F28C4E] hover:bg-[#df7738] text-white text-base font-bold shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-white/25 cursor-pointer w-full sm:w-auto"
              >
                <CalendarCheck className="w-5 h-5 text-white" />
                <span>Agendar Valoración</span>
              </button>
            </div>

            {/* Nota al pie */}
            <p className="mt-5 text-xs sm:text-sm text-white/80 font-medium">
              {ctaBannerData.footnote}
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export const CtaBanner = CTABanner;
