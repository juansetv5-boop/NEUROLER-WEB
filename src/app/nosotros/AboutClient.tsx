'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  HeartHandshake, 
  School, 
} from 'lucide-react';
import { Team } from '@/components/Team';
import { StatsSocialProof } from '@/components/StatsSocialProof';
import { StorySection } from '@/components/StorySection';
import { CTABanner } from '@/components/CTABanner';

const PILLARS = [
  {
    icon: Brain,
    title: 'Base científica y neuroeducación',
    description: 'Evaluamos el desarrollo neurolingüístico y cognitivo para intervenir la causa real antes de exigir repetición.',
    color: '#1E4A7A',
    bg: 'bg-blue-50/80',
    border: 'border-blue-100',
  },
  {
    icon: HeartHandshake,
    title: 'Intervención respetuosa sin etiquetas frías',
    description: 'Acompañamos a tu hijo con calidez y rigor, sin rótulos limitantes ni diagnósticos que generen angustia.',
    color: '#F28C4E',
    bg: 'bg-orange-50/80',
    border: 'border-orange-100',
  },
  {
    icon: School,
    title: 'Trabajo articulado con el colegio y el hogar',
    description: 'Creamos un puente coordinado entre docentes y familias para que todos hablemos el mismo lenguaje.',
    color: '#2563EB',
    bg: 'bg-indigo-50/80',
    border: 'border-indigo-100',
  },
];

export const AboutClient: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 pt-28 sm:pt-36">
      
      {/* 1. SECCIÓN PRINCIPAL: Título y Declaración */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
        >
          Sobre nosotros
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Somos un centro de estimulación neurocognitiva en Pereira dedicado a identificar cómo aprende el cerebro de cada niño, resolviendo las dificultades de lectura y atención para devolverle la seguridad escolar y la tranquilidad a tu hogar.
        </motion.p>
      </section>

      {/* 2. PILARES CLAVE: 3 Micro-Tarjetas Limpias */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pillar.bg} border ${pillar.border}`}
                  >
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2.5">
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
      </section>

      {/* 3. EQUIPO INTERDISCIPLINARIO PROPIO (Idéntico al Home) */}
      <Team />

      {/* 4. PRUEBA SOCIAL Y CIFRAS DE AUTORIDAD (Idéntico al Home) */}
      <StatsSocialProof />

      {/* 5. HISTORIA DE LEIDY (Idéntico al Home) */}
      <StorySection />

      {/* 6. CTA FINAL DE CIERRE (Idéntico al Home) */}
      <CTABanner />

    </div>
  );
};
