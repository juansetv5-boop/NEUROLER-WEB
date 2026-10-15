'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarCheck, ArrowRight, Heart } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

const STEPS = [
  {
    stepNumber: '01',
    title: 'Valoración sin etiquetas',
    detail: 'Identificamos cómo procesa la información y sus fortalezas en un espacio seguro, sin encasillarlo.',
  },
  {
    stepNumber: '02',
    title: 'Hacemos equipo con su colegio y contigo',
    detail: 'Te damos pautas para casa y coordinamos con sus docentes para que todos manejemos el mismo lenguaje.',
  },
  {
    stepNumber: '03',
    title: 'Herramientas para que vuele solo',
    detail: 'Estimulación personalizada en lectura y atención para que recupere la confianza y la autonomía.',
  },
];

export const AboutFocusSection: React.FC = () => {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bloque de Historia / Enfoque Institucional (Carta de Leidy) */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-sm mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Te entiendo como especialista, pero sobre todo como mamá.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
                Todo lo que hoy es NEUROLER nació hace años en casa con mi propio hijo, Juan Sebastián. Tras una pérdida auditiva, buscando cómo estimular su lenguaje, descubrí que cuando un niño se frustra en el colegio no es porque no se esfuerce, sino porque nadie le ha enseñado desde la forma en que su cerebro realmente aprende.
              </p>
              <div className="pt-2 text-slate-800 font-bold text-sm sm:text-base">
                — Leidy Rocío Adrada Varona
                <span className="block text-xs sm:text-sm font-normal text-slate-500 mt-0.5">
                  Directora NEUROLER | Pereira, Colombia
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md">
                <Image
                  src="/leidy-adrada.webp"
                  alt="Leidy Rocío Adrada Varona"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Encabezado Cómo te acompañamos (Limpio, sin badges ni chips) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Evaluación sin etiquetas, pautas para casa y coordinación con el colegio.
          </p>
        </div>

        {/* Grid de 3 Pasos en Tarjetas Blancas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Indicador Numérico Discreto */}
                <div className="text-sm font-black text-[#F28C4E] tracking-wider mb-4">
                  {step.stepNumber}
                </div>

                {/* Título del Paso */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                  {step.title}
                </h3>

                {/* Detalle Explicativo */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            type="button"
            onClick={() => openBookingModal()}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#F28C4E] hover:bg-[#df7738] text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 shrink-0" />
            <span>Agendar primera valoración</span>
          </button>

          <Link
            href="/nosotros"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 text-sm font-bold border border-slate-200/80 shadow-xs transition-all hover:-translate-y-0.5"
          >
            <span>Conoce nuestro enfoque</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
