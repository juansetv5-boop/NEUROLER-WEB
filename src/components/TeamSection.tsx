'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, ArrowRight } from 'lucide-react';

interface Collaborator {
  id: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  skills: string[];
  photoSrc?: string;
  accentBadge: string;
  badgeStyle: string;
}

const collaborators: Collaborator[] = [
  {
    id: 'leidy',
    name: 'Leidy Rocío Adrada Varona',
    role: 'Directora & Neuropsicóloga Educativa',
    experience: '+24 años de trayectoria en Pereira',
    description: 'Especialista en neuroeducación, lectura, comprensión, memoria y fortalecimiento de funciones ejecutivas con enfoque cálido y sin etiquetas.',
    skills: ['Neuropsicología Educativa', 'Lectura y Escritura', 'Funciones Ejecutivas'],
    accentBadge: 'Dirección General',
    badgeStyle: 'bg-[#6d9ae3] text-white border border-white/30',
  },
  {
    id: 'angie',
    name: 'Angie',
    role: 'Especialista en Desarrollo del Lenguaje & Pedagogía',
    experience: 'Atención Pedagógica Especializada',
    description: 'Acompañamiento en adquisición fonológica, articulación, expresión oral y estrategias lúdicas para potenciar el vocabulario y la comunicación.',
    skills: ['Desarrollo del Lenguaje', 'Estimulación Fonológica', 'Expresión Verbal'],
    accentBadge: 'Lenguaje y Expresión',
    badgeStyle: 'bg-[#A88CCF] text-white border border-white/30',
  },
  {
    id: 'kevin',
    name: 'Kevin',
    role: 'Especialista en Psicología Infantil & Apoyo Cognitivo',
    experience: 'Acompañamiento y Enfoque Cognitivo',
    description: 'Orientación para la autorregulación, atención sostenida, concentración, gestión de hábitos de estudio y fortalecimiento socioemocional.',
    skills: ['Atención y Concentración', 'Autorregulación', 'Acompañamiento Cognitivo'],
    accentBadge: 'Atención y Concentración',
    badgeStyle: 'bg-[#F2B31A] text-slate-950 font-bold border border-white/30',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Principal del Equipo */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5 drop-shadow-sm">
            Nuestro Equipo de Especialistas
          </h2>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal">
            Un equipo interdisciplinario dedicado al desarrollo integral, el aprendizaje y la tranquilidad emocional de tu hijo.
          </p>
        </div>

        {/* Cuadrícula de 3 Tarjetas con Fondo Translúcido Mate Glassmorphic */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {collaborators.map((member) => (
            <div
              key={member.id}
              className="bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15"
            >
              <div>
                {/* Contenedor Delimitado Amplio para la Foto */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/15 mb-6 flex flex-col items-center justify-center group shadow-inner">
                  {member.photoSrc ? (
                    <Image
                      src={member.photoSrc}
                      alt={`Foto de ${member.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-2.5">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Espacio de Fotografía
                      </span>
                    </div>
                  )}

                  {/* Badge flotante con color de acento oficial sobre la foto */}
                  <span className={`absolute top-3 right-3 text-[11px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full shadow-md backdrop-blur-md ${member.badgeStyle}`}>
                    {member.accentBadge}
                  </span>
                </div>

                {/* Rol / Especialidad */}
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 text-slate-300">
                  {member.role}
                </p>

                {/* Nombre del Colaborador en blanco */}
                <h3 className="text-2xl sm:text-3xl font-black mb-3 leading-tight text-white">
                  {member.name}
                </h3>

                {/* Descripción Detallada */}
                <p className="text-sm sm:text-base leading-relaxed mb-6 text-slate-200">
                  {member.description}
                </p>

                {/* Habilidades / Áreas de Enfoque */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 rounded-xl bg-white/10 text-white border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pie de la tarjeta con Botón Naranja Oficial #F28C4E */}
              <div className="pt-5 border-t border-white/15 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  {member.experience}
                </span>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#F28C4E] hover:bg-[#df7738] text-white shadow-md hover:shadow-lg transition-all duration-200 border border-white/20"
                >
                  <span>Agendar cita</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
