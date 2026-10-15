'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  MessageCircle, 
  CheckCircle, 
  Video, 
  ClipboardCheck, 
  BrainCircuit, 
  TrendingUp,
  CalendarCheck
} from 'lucide-react';
import { processQuickData } from '@/data/content';
import { useBookingModal } from '@/context/BookingModalContext';

const stepIcons = [
  MessageCircle,
  Video,
  ClipboardCheck,
  BrainCircuit,
  TrendingUp
];

export const ProcessQuick: React.FC = () => {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-14 sm:py-24 lg:py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {processQuickData.title}
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            {processQuickData.subtitle}
          </p>
        </div>

        {/* Pasos del 1 al 5 en Tarjetas Claras */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4 relative">
          {processQuickData.steps.map((step, index) => {
            const IconComp = stepIcons[index] || CheckCircle;
            const isHighlight = step.isHighlight;

            return (
              <div 
                key={step.stepNumber}
                className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                  isHighlight 
                    ? 'bg-[#6d9ae3] text-white border-2 border-[#F28C4E] shadow-xl hover:scale-[1.02]' 
                    : 'bg-white border border-slate-200/80 text-slate-800 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center ${
                      isHighlight ? 'bg-white text-[#6d9ae3]' : 'bg-slate-100 text-slate-700'
                    }`}>
                      0{step.stepNumber}
                    </span>
                  </div>

                  {/* Icono del Paso */}
                  <div className="mb-3">
                    <IconComp className={`w-6 h-6 ${isHighlight ? 'text-[#F28C4E]' : 'text-slate-700'}`} />
                  </div>

                  {/* Título */}
                  <h3 className={`text-base font-bold mb-2 leading-snug ${isHighlight ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p className={`text-xs leading-relaxed mb-4 font-normal ${isHighlight ? 'text-slate-200' : 'text-slate-600'}`}>
                    {step.shortDescription}
                  </p>

                  {/* Botón directo en la tarjeta destacada de Charla Gratuita */}
                  {isHighlight && (
                    <button
                      type="button"
                      onClick={() => openBookingModal()}
                      className="mb-3 w-full py-2 px-3 rounded-xl bg-[#F28C4E] hover:bg-[#df7738] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all border border-white/20 cursor-pointer"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      <span>Agendar 15 Min</span>
                    </button>
                  )}
                </div>

                {/* Duración / Tiempo estimado */}
                <div className={`pt-3 border-t text-[11px] font-semibold flex items-center gap-1.5 ${
                  isHighlight ? 'border-white/20 text-slate-200' : 'border-slate-100 text-slate-500'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{step.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón hacia /proceso */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href={processQuickData.cta.href}
            className="inline-flex items-center gap-2 px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200/80 shadow-sm transition-all group"
          >
            <span>{processQuickData.cta.text}</span>
            <ArrowRight className="w-4 h-4 text-[#F28C4E] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
