'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, BookX, Frown } from 'lucide-react';

const PROBLEMS = [
  {
    icon: Frown,
    color: '#F28C4E',
    bg: 'bg-amber-50',
    title: 'Luchas interminables por las tareas',
    description:
      'Horas enteras para terminar una sola actividad sencilla. Distracción constante, quejas de cansancio y un desgaste emocional que termina afectando la paz de toda la familia.',
  },
  {
    icon: BookX,
    color: '#9d7fe6',
    bg: 'bg-purple-50',
    title: 'Frustración con la lectura y escritura',
    description:
      'Lee palabra por palabra sin retener el sentido, confunde letras, adivina el final de las frases o siente un rechazo profundo cada vez que le piden leer en voz alta.',
  },
  {
    icon: AlertCircle,
    color: '#6d9ae3',
    bg: 'bg-blue-50',
    title: 'Temor por su autoestima y futuro',
    description:
      'Ver cómo empieza a creer que "no es inteligente" o "no es capaz". La angustia de que pierda el año escolar y de no encontrar respuestas claras en el colegio.',
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Principal */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            ¿Las tardes de tareas se convirtieron en una batalla diaria?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Llantos antes de abrir el cuaderno, notas del colegio que te llenan de angustia y el miedo constante a que tu hijo se quede atrás o pierda el año escolar.
          </p>
        </motion.div>

        {/* 3 Tarjetas de Validación Empática con animación escalonada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PROBLEMS.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${problem.bg} flex items-center justify-center mb-6 font-bold`}>
                    <Icon className="w-6 h-6" style={{ color: problem.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mensaje Clave Destacado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-white border-2 border-[#6d9ae3]/30 rounded-3xl p-6 sm:p-10 shadow-sm text-center"
        >
          <p className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
            &ldquo;No es falta de esfuerzo. Es que nadie ha mirado el problema desde donde realmente empieza: <span className="text-[#6d9ae3] underline decoration-[#6d9ae3]/40 underline-offset-4">el desarrollo neurolingüístico</span>.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
};
