'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Users2 } from 'lucide-react';

const STATS = [
  {
    number: '+1.000',
    label: 'Niños acompañados',
    detail: 'Familias que recuperaron la paz en casa y vieron a sus hijos aprender con alegría.',
    icon: Users2,
    color: '#6d9ae3',
  },
  {
    number: '20',
    label: 'Años de experiencia en aula',
    detail: 'Conociendo de primera mano la realidad escolar, las exigencias docentes y los retos diarios.',
    icon: GraduationCap,
    color: '#9d7fe6',
  },
  {
    number: '6',
    label: 'Años como Magíster en Neuroeducación',
    detail: 'Aplicando neurociencia y psicopedagogía de vanguardia en Pereira y Colombia.',
    icon: Award,
    color: '#F28C4E',
  },
];

export const StatsSocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Ciencia, experiencia y resultados comprobados
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Más de dos décadas transformando la relación de los niños con el aprendizaje en Pereira.
          </p>
        </motion.div>

        {/* Grid de Métricas con animación escalonada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between text-center items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 shadow-2xs">
                  <Icon className="w-7 h-7" style={{ color: stat.color }} />
                </div>

                <div 
                  className="text-4xl sm:text-5xl font-black tracking-tight mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {stat.label}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-xs">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
