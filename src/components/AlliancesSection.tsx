'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare, School } from 'lucide-react';

interface Alliance {
  name: string;
  logoSrc: string;
  width: number;
  height: number;
}

const ALLIANCES: Alliance[] = [
  {
    name: 'Liceo Campestre Philadelphia',
    logoSrc: '/alliances/philadelphia.jpeg',
    width: 280,
    height: 140,
  },
  {
    name: 'Ammare',
    logoSrc: '/alliances/ammare.svg',
    width: 240,
    height: 80,
  },
  {
    name: 'Tierra de Gigantes',
    logoSrc: '/alliances/tierra-de-gigantes.png',
    width: 260,
    height: 120,
  },
  {
    name: 'Liceo Lerni',
    logoSrc: '/alliances/liceo-lerni.jpg',
    width: 260,
    height: 120,
  },
  {
    name: 'Dejando Huellas Gardner',
    logoSrc: '/alliances/dejando-huellas-gardner.png',
    width: 280,
    height: 120,
  },
];

export const AlliancesSection: React.FC = () => {
  const schoolWhatsAppUrl = `https://wa.me/573116340453?text=${encodeURIComponent('Hola Leidy Rocío y equipo NEUROLER, soy directivo/orientador escolar y deseo información sobre alianzas y convenios institucionales.')}`;

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Limpio */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Colegios e instituciones aliadas
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Trabajamos en equipo por el desarrollo de tu hijo.
          </p>
        </motion.div>

        {/* Grid de 5 Logos con animación escalonada y hover lift */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8 items-center justify-center mb-12">
          {ALLIANCES.map((alliance, idx) => (
            <motion.div
              key={alliance.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.2 } }}
              className="group flex items-center justify-center h-32 sm:h-36 lg:h-40 p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-shadow duration-300"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={alliance.logoSrc}
                  alt={`Logo ${alliance.name}`}
                  width={alliance.width}
                  height={alliance.height}
                  className="max-h-20 sm:max-h-24 lg:max-h-28 w-auto max-w-full object-contain select-none"
                  priority
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tarjeta de Alianza para Orientadores y Rectores con CTA a WhatsApp */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-[#1E4A7A] font-bold text-sm uppercase tracking-wider mb-2">
              <School className="w-5 h-5" />
              <span>Para Rectores, Orientadores y Docentes</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Hacemos equipo con el departamento de orientación de tu colegio
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              No reemplazamos a los orientadores del colegio: colaboramos estrechamente mediante capacitación docente, pautas de aula y seguimiento con métricas concretas de evolución.
            </p>
          </div>

          <a
            href={schoolWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Alianzas para Colegios</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
