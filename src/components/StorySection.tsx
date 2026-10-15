'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const StorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Columna Texto */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8 space-y-6"
            >
              <span className="text-xs font-black tracking-widest text-[#F28C4E] uppercase block">
                Nuestra Historia
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Te entiendo como especialista, pero sobre todo como mamá.
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                <p>
                  Todo lo que hoy es NEUROLER nació hace años en casa con mi propio hijo, Juan Sebastián. Tras una pérdida auditiva, buscando incansablemente cómo estimular su lenguaje y su desarrollo escolar, descubrí una verdad que transformó mi vocación:
                </p>
                <p className="font-semibold text-slate-800 italic border-l-4 border-[#F28C4E] pl-4 my-4">
                  &ldquo;Cuando un niño se frustra en el colegio o con las tareas, no es porque no se esfuerce ni porque no quiera; es porque nadie le ha enseñado desde la forma en que su cerebro realmente aprende.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-slate-900 font-black text-base sm:text-lg">
                    Leidy Rocío Adrada Varona
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    Magíster en Neuroeducación & Directora NEUROLER • Pereira, Colombia
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna Imagen */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-4 border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/leidy-adrada.webp"
                  alt="Leidy Rocío Adrada Varona - Directora NEUROLER"
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
