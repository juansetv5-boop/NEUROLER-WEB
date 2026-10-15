'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Award, 
  Brain, 
  CheckCircle2, 
  ArrowRight,
  MapPin
} from 'lucide-react';
import { aboutPreviewData } from '@/data/content';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 overflow-hidden relative bg-gradient-to-b from-[#F28C4E] to-[#A88CCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Tarjeta de Presentación de la Especialista */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Resplandor posterior */}
              <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-neuroler-blue/40 via-neuroler-purple/40 to-neuroler-teal/35 opacity-80 blur-2xl -z-10" />

              <div className="bg-white/[0.12] backdrop-blur-2xl rounded-3xl p-7 sm:p-9 border border-white/20 shadow-2xl">
                
                {/* Avatar / Cargo de la Especialista */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neuroler-blue via-neuroler-purple to-neuroler-teal p-0.5 shadow-md">
                    <div className="w-full h-full bg-[#6d9ae3] rounded-[14px] flex items-center justify-center text-white">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white bg-white/20 px-3 py-1 rounded-full mb-1 border border-white/20">
                      Directora & Neuroeducadora
                    </span>
                    <h3 className="text-xl font-extrabold text-white leading-tight">
                      {aboutPreviewData.name}
                    </h3>
                    <p className="text-xs text-white/85 mt-0.5 font-medium">
                      {aboutPreviewData.role}
                    </p>
                  </div>
                </div>

                {/* Ubicación y Años de Experiencia */}
                <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-white/90 font-medium">
                  <span className="flex items-center gap-1.5 bg-white/[0.12] backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/20 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 text-neuroler-teal" />
                    Pereira, Colombia
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/[0.12] backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/20 shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-neuroler-yellow" />
                    {aboutPreviewData.experience}
                  </span>
                </div>

                {/* Cita Inspiradora */}
                <div className="p-4 rounded-2xl bg-white/[0.1] border border-white/15 shadow-xs mb-6 backdrop-blur-sm">
                  <p className="text-sm italic text-white/95 leading-relaxed font-normal">
                    {aboutPreviewData.quote}
                  </p>
                </div>

                {/* Estadísticas de Impacto */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/15 text-center">
                  {aboutPreviewData.stats.map((stat, idx) => (
                    <div key={idx} className="p-2.5 rounded-2xl bg-white/[0.12] backdrop-blur-xs border border-white/15 shadow-2xs">
                      <div className="text-lg sm:text-xl font-black text-white">
                        {stat.number}
                      </div>
                      <div className="text-[10px] font-bold text-white/80 leading-tight mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Columna Derecha: Explicación del Enfoque y Tríada */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Título Principal (Sin tags/badges superiores) */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {aboutPreviewData.title}
            </h2>

            <div className="space-y-4 text-white/90 text-base leading-relaxed mb-8">
              {aboutPreviewData.descriptionParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Los 3 Pilares del Método NEUROLER */}
            <div className="w-full space-y-4 mb-8">
              {aboutPreviewData.pillars.map((pillar, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-4 p-4.5 rounded-2xl bg-white/[0.12] backdrop-blur-xl border border-white/20 shadow-xl hover:bg-white/[0.18] transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 mt-0.5 border border-white/30">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/85 mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón de Acción a /nosotros */}
            <Link
              href={aboutPreviewData.cta.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#6d9ae3] hover:bg-[#5a87ce] text-white text-base font-bold shadow-lg hover:shadow-2xl transition-all duration-300 group border border-white/20"
            >
              <span>{aboutPreviewData.cta.text}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};
