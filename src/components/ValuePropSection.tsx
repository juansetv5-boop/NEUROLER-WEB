'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Headphones, Users, Zap } from 'lucide-react';

const PILLARS = [
  {
    number: '01',
    title: 'Evaluamos antes de intervenir',
    description: 'Identificamos el punto exacto de maduración cerebral y emocional de tu hijo. Sin diagnósticos apresurados ni forzar etapas para las que aún no está listo.',
    icon: Search,
    color: '#6d9ae3',
    bgColor: 'bg-blue-50/70',
  },
  {
    number: '02',
    title: 'Trabajamos el oído, no solo el ojo',
    description: 'El entrenamiento auditivo y la discriminación fonológica son los cimientos reales de la lectura comprensiva. Fortalecemos la raíz para que leer sea natural.',
    icon: Headphones,
    color: '#9d7fe6',
    bgColor: 'bg-purple-50/70',
  },
  {
    number: '03',
    title: 'Acompañamos a toda la familia',
    description: 'Hacemos equipo contigo y con sus docentes. Te entregamos pautas claras para casa y coordinamos adaptaciones prácticas en el aula para hablar el mismo idioma.',
    icon: Users,
    color: '#F28C4E',
    bgColor: 'bg-orange-50/70',
  },
  {
    number: '04',
    title: 'Resultados en semanas, respetando su ritmo',
    description: 'Notarás cambios reales en su seguridad, autonomía y motivación escolar en un periodo promedio de 3 meses, avanzando a su propio ritmo sin saturarlo.',
    icon: Zap,
    color: '#34a853',
    bgColor: 'bg-emerald-50/70',
  },
];

export const ValuePropSection: React.FC = () => {
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
            Nuestras áreas
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Acompañamiento especializado a su ritmo.
          </p>
        </motion.div>

        {/* Grid de 4 Bloques con animación escalonada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      style={{ color: pillar.color }}
                      className="text-xs font-black tracking-widest uppercase"
                    >
                      Pilar {pillar.number}
                    </span>
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.bgColor}`}
                    >
                      <Icon className="w-5 h-5" style={{ color: pillar.color }} />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
