'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Eye, BrainCircuit, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

const STEPS = [
  {
    number: '01',
    title: 'Discriminación y memoria auditiva',
    description: 'Entrenamos al cerebro infantil para registrar y almacenar con nitidez los fonemas del lenguaje.',
    icon: Ear,
    color: '#9d7fe6',
    bg: 'bg-purple-50',
  },
  {
    number: '02',
    title: 'Integración neurolingüística y freno inhibitorio',
    description: 'Fortalecemos la atención sostenida para que el niño filtre ruidos distractores y mantenga el foco en el texto.',
    icon: BrainCircuit,
    color: '#6d9ae3',
    bg: 'bg-blue-50',
  },
  {
    number: '03',
    title: 'Decodificación y comprensión fluida',
    description: 'Una vez la base auditiva está automatizada, la lectura visual fluye sin esfuerzo y con pleno disfrute.',
    icon: Eye,
    color: '#34a853',
    bg: 'bg-emerald-50',
  },
];

export const AuditoryDifferentiator: React.FC = () => {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            La lectura empieza en el oído, no en el ojo
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Antes de que un niño pueda unir letras en el papel, su cerebro necesita haber aprendido a escuchar, discriminar y organizar los sonidos con precisión.
          </p>
        </motion.div>

        {/* 2. Comparativa: Tradicional vs NEUROLER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {/* Método tradicional (gris) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl p-7 sm:p-9 flex flex-col hover:border-slate-300 transition-colors"
          >
            <div className="flex items-center gap-2 text-slate-500 text-xs font-black uppercase tracking-widest mb-4">
              <XCircle className="w-4 h-4" />
              <span>Método tradicional · el ojo</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-snug mb-4">
              ¿Por qué los métodos tradicionales fallan con tantos niños?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              La mayoría de enfoques fuerzan al niño a repetir una y otra vez fichas y letras escritas (enfoque visual). Pero si su sistema de procesamiento auditivo no distingue con claridad la diferencia entre sonidos similares, su mente se sobrecarga y la lectura se vuelve un proceso mecánico, lento y frustrante.
            </p>
            <div className="mt-auto">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Sonidos que suelen confundirse
              </p>
              <div className="flex flex-wrap gap-2">
                {['/b/ ↔ /d/', '/p/ ↔ /t/'].map((pair) => (
                  <span
                    key={pair}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-black text-sm sm:text-base tracking-wide"
                  >
                    {pair}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enfoque NEUROLER (lila) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border-2 border-[#9d7fe6]/40 rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex items-center gap-2 text-[#9d7fe6] text-xs font-black uppercase tracking-widest mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>El enfoque NEUROLER · el oído</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
              Trabajamos desde la raíz del problema
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Cuando estimulamos las vías auditivas y las funciones ejecutivas, el niño deja de adivinar palabras y empieza a comprender lo que lee de manera natural y autónoma.
            </p>
          </motion.div>
        </div>

        {/* 3. Línea de tiempo de 3 pasos */}
        <div className="mb-16 sm:mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="text-center text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-10"
          >
            Cómo lo trabajamos, paso a paso
          </motion.h3>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Línea conectora en escritorio */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#9d7fe6]/40 via-[#6d9ae3]/40 to-[#34a853]/40" />
            {/* Línea conectora vertical en móvil */}
            <div className="md:hidden absolute top-8 bottom-8 left-8 w-0.5 bg-gradient-to-b from-[#9d7fe6]/40 via-[#6d9ae3]/40 to-[#34a853]/40" />

            {STEPS.map((step, sIdx) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: sIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center"
                >
                  <div
                    className={`relative z-10 w-16 h-16 shrink-0 rounded-2xl ${step.bg} border-4 border-[#F8F9FA] flex items-center justify-center md:mb-5 shadow-xs`}
                  >
                    <Icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  <div className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow flex-1 w-full">
                    <span className="text-xs font-black tracking-widest" style={{ color: step.color }}>
                      PASO {step.number}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mt-1 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. Franja de cierre: beneficio + CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#9d7fe6]/10 border border-[#9d7fe6]/20 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-xs font-black text-[#9d7fe6] uppercase tracking-widest mb-1.5">
              Beneficio directo en el aula
            </p>
            <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug max-w-xl">
              Menor fatiga mental, lectura comprensiva más rápida y mayor seguridad para participar en clase.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openBookingModal({ service: 'lectura' })}
            className="w-full md:w-auto shrink-0 py-4 px-8 rounded-2xl bg-[#9d7fe6] hover:bg-[#8b6cd8] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Evaluar habilidades de lectura</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
