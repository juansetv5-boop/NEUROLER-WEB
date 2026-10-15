'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, PanInfo } from 'framer-motion';
import { Modal } from '@mantine/core';
import { 
  User, 
  CalendarCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useBookingModal, ServiceType } from '@/context/BookingModalContext';

interface TeamMember {
  id: string;
  service: ServiceType;
  name: string;
  fullName: string;
  shortName: string;
  role: string;
  focus: string;
  descriptionParagraph1: string;
  descriptionParagraph2: string;
  imageSrc: string;
  accentColor: string;
  lightBg: string;
  shadowColor: string;
  partnerBadge?: {
    label: string;
    logoSrc: string;
    alt: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'leidy',
    service: 'neuroeducacion',
    name: 'Leidy Adrada',
    fullName: 'Leidy Rocío Adrada Varona',
    shortName: 'Leidy',
    role: 'Fundadora & Directora NEUROLER · Magíster en Neuroeducación',
    focus: 'Neuropsicología educativa, evaluación del aprendizaje y desarrollo cognitivo.',
    descriptionParagraph1: 'Acompaña procesos de aprendizaje y desarrollo desde la neuropsicología educativa, con una mirada cercana que integra evaluación, familia y contexto escolar.',
    descriptionParagraph2: 'Ayuda a comprender cómo aprende cada niño o adolescente y a construir estrategias prácticas que fortalezcan atención, memoria, regulación y trayectoria académica, traduciendo la evaluación en pautas claras para casa y colegio.',
    imageSrc: '/leidy-adrada.webp',
    accentColor: '#1E4A7A',
    lightBg: 'from-[#EBF3FA] to-[#D8E7F5]',
    shadowColor: 'rgba(30, 74, 122, 0.25)',
  },
  {
    id: 'angie',
    service: 'lectura',
    name: 'Amma Mondragón',
    fullName: 'Amma Mondragón Adrada',
    shortName: 'Amma',
    role: 'CEO · Psicóloga clínica e infantil',
    focus: 'Evaluación emocional, regulación, autoestima y habilidades sociales.',
    descriptionParagraph1: 'Más de 10 años acompañando a niñas, niños y adolescentes con una mirada cercana, basada en evidencia y respeto por el ritmo de cada uno.',
    descriptionParagraph2: 'Trabaja desde la evaluación emocional y el vínculo seguro para que cada niño pueda nombrar lo que siente, fortalecer su autoestima y relacionarse con más confianza en casa y en el colegio.',
    imageSrc: '/team-ammare.webp',
    accentColor: '#5B3794',
    lightBg: 'from-[#F3EDFB] to-[#E5D7F8]',
    shadowColor: 'rgba(91, 55, 148, 0.25)',
    partnerBadge: {
      label: 'convenio con :',
      logoSrc: '/alliances/ammare.svg',
      alt: 'Logo Ammare',
    },
  },
  {
    id: 'kevin',
    service: 'atencion',
    name: 'Kevin Vargas',
    fullName: 'Kevin S. Vargas',
    shortName: 'Kevin',
    role: 'CEO · Psicólogo clínico',
    focus: 'Enfoque integral y familiar, prevención y orientación a familias y docentes.',
    descriptionParagraph1: 'Enfoque integral y familiar para el bienestar emocional: conecta el aula, la casa y el acompañamiento profesional.',
    descriptionParagraph2: 'Acompaña a familias, cuidadores y equipos docentes con herramientas claras para prevenir, orientar y construir entornos donde la salud mental sea parte del día a día.',
    imageSrc: '/kevin-vargas.webp',
    accentColor: '#C45116',
    lightBg: 'from-[#FDF2EA] to-[#F9DEC9]',
    shadowColor: 'rgba(196, 81, 22, 0.25)',
  },
];

export const Team: React.FC = () => {
  const { openBookingModal } = useBookingModal();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedMemberForModal, setSelectedMemberForModal] = useState<TeamMember | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [isInView, setIsInView] = useState<boolean>(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // IntersectionObserver para detener el autoplay cuando el carrusel no está visible en pantalla
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reinicia el temporizador de 2.7 segundos (2700ms) solo cuando es visible y el modal está cerrado
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!selectedMemberForModal && isInView) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
      }, 2700);
    }
  };

  // Rotación continua (se pausa automáticamente si el usuario abre el modal o sale del viewport)
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [selectedMemberForModal, isInView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
    resetTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    resetTimer();
  };

  const handleSelectIndex = (idx: number) => {
    setCurrentIndex(idx);
    resetTimer();
  };

  // Soporte para gestos táctiles (Swipe en Mobile)
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 40;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-[#F8F9FA] text-slate-800 [content-visibility:auto]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Minimalista */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Nuestro equipo
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Psicopedagogía y desarrollo infantil en Pereira.
          </p>
        </div>

        {/* Escenario Coverflow con soporte Swipe táctil y aceleración nativa por GPU */}
        <div 
          className="relative w-full h-[470px] sm:h-[520px] lg:h-[560px] xl:h-[580px] flex items-center justify-center select-none touch-pan-y"
        >
          {TEAM_MEMBERS.map((member, index) => {
            const count = TEAM_MEMBERS.length;
            const offset = (index - currentIndex + count) % count;

            let xOffset = '0%';
            let scale = 1.0;
            let zIndex = 20;
            let opacity = 1;
            let isCenter = false;

            if (offset === 0) {
              xOffset = '0%';
              scale = 1.0;
              zIndex = 25;
              opacity = 1;
              isCenter = true;
            } else if (offset === 1) {
              // Offset lateral limpio para que no se corten los nombres
              xOffset = '58%';
              scale = 0.88;
              zIndex = 10;
              opacity = 0.72;
            } else if (offset === 2) {
              xOffset = '-58%';
              scale = 0.88;
              zIndex = 10;
              opacity = 0.72;
            }

            return (
              <motion.div
                key={member.id}
                className="absolute w-[74vw] max-w-[290px] sm:w-[340px] sm:max-w-none lg:w-[380px] xl:w-[420px] origin-center cursor-pointer transform-gpu"
                style={{
                  zIndex,
                }}
                animate={{
                  x: xOffset,
                  scale,
                  opacity,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.25, 1, 0.5, 1],
                }}
                drag={isCenter ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={handleDragEnd}
                onClick={() => {
                  if (isCenter) {
                    setSelectedMemberForModal(member);
                  } else {
                    handleSelectIndex(index);
                  }
                }}
              >
                {/* Tarjeta Ultra-Minimalista: Solo Foto + Nombre con altura proporcionada */}
                <div 
                  className={`rounded-3xl bg-white border overflow-hidden flex flex-col justify-between h-[420px] sm:h-[480px] lg:h-[520px] xl:h-[540px] transform-gpu ${
                    isCenter 
                      ? 'border-slate-300 shadow-xl ring-1 ring-slate-900/5' 
                      : 'border-slate-200/80 shadow-md'
                  }`}
                  style={{
                    boxShadow: isCenter 
                      ? `0 20px 35px -10px ${member.shadowColor}, 0 0 0 1px rgba(0,0,0,0.04)` 
                      : '0 8px 20px -4px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {/* Área de Fotografía Nítida al 100% */}
                  <div className={`relative w-full flex-1 bg-gradient-to-b ${member.lightBg} flex items-end justify-center overflow-hidden pt-4 transform-gpu`}>
                    <div className="relative w-full h-full flex items-end justify-center">
                      <Image
                        src={member.imageSrc}
                        alt={`Foto de ${member.name}`}
                        fill
                        sizes="(max-width: 640px) 75vw, (max-width: 1024px) 380px, 450px"
                        quality={85}
                        className="object-contain object-bottom pointer-events-none transform-gpu"
                        priority={isCenter}
                      />
                    </div>
                  </div>

                  {/* Nombre Único y Limpio */}
                  <div className="py-3.5 sm:py-5 lg:py-6 px-3 sm:px-4 text-center bg-white border-t border-slate-100/80">
                    <h3 className="text-lg sm:text-2xl lg:text-2xl font-black text-slate-900 tracking-tight leading-snug truncate">
                      {member.name}
                    </h3>
                    {member.partnerBadge && (
                      <div className="mt-1.5 inline-flex items-center justify-center gap-1.5">
                        <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap shrink-0">
                          {member.partnerBadge.label}
                        </span>
                        <div className="relative h-3.5 w-16 shrink-0 flex items-center">
                          <Image
                            src={member.partnerBadge.logoSrc}
                            alt={member.partnerBadge.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controles de Navegación y Paginación */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Anterior especialista"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots indicadores */}
          <div className="flex items-center gap-2 px-2">
            {TEAM_MEMBERS.map((m, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleSelectIndex(idx)}
                  aria-label={`Ver ${m.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'w-8 bg-slate-900 shadow-xs' 
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente especialista"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-xs hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Modal de Vista Detallada del Especialista */}
      <Modal
        opened={!!selectedMemberForModal}
        onClose={() => setSelectedMemberForModal(null)}
        centered
        radius="28px"
        size="880px"
        padding={0}
        withCloseButton={true}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 6,
        }}
        styles={{
          content: {
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          },
          body: {
            padding: 0,
            overflow: 'hidden',
          },
          header: {
            position: 'absolute',
            top: 18,
            right: 18,
            zIndex: 50,
            backgroundColor: 'transparent',
          },
          close: {
            color: '#1E293B',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            borderRadius: '9999px',
            width: '38px',
            height: '38px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
            transition: 'all 200ms ease',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              transform: 'scale(1.05)',
            },
          }
        }}
      >
        {selectedMemberForModal && (
          <div className="flex flex-col md:flex-row bg-white text-slate-800 max-h-[90vh] overflow-hidden">
            {/* Columna Izquierda: Imagen a Full Espacio sin bordes blancos */}
            <div className={`w-full md:w-1/2 relative h-72 sm:h-80 md:h-auto md:min-h-[520px] bg-gradient-to-b ${selectedMemberForModal.lightBg} overflow-hidden shrink-0`}>
              <Image
                src={selectedMemberForModal.imageSrc}
                alt={`Foto de ${selectedMemberForModal.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                quality={95}
                unoptimized={true}
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Columna Derecha: Contenido y Espaciados Amplios */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto max-h-[90vh] md:max-h-[85vh] flex-1">
              <div className="space-y-3">
                {/* Cargo */}
                <p 
                  className="text-xs font-extrabold uppercase tracking-wider"
                  style={{ color: selectedMemberForModal.accentColor }}
                >
                  {selectedMemberForModal.role}
                </p>

                {/* Nombre Completo y Convenio */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    {selectedMemberForModal.fullName}
                  </h3>
                  {selectedMemberForModal.partnerBadge && (
                    <div className="mt-2.5 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs max-w-full">
                      <span className="text-xs font-semibold text-slate-500 whitespace-nowrap shrink-0">
                        {selectedMemberForModal.partnerBadge.label}
                      </span>
                      <div className="relative h-5 w-20 shrink-0 flex items-center">
                        <Image
                          src={selectedMemberForModal.partnerBadge.logoSrc}
                          alt={selectedMemberForModal.partnerBadge.alt}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Área de Enfoque */}
                <p 
                  className="text-xs sm:text-sm font-semibold leading-relaxed"
                  style={{ color: selectedMemberForModal.accentColor }}
                >
                  {selectedMemberForModal.focus}
                </p>

                {/* Párrafos de Enfoque y Trabajo con Familias */}
                <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-2">
                  <p>{selectedMemberForModal.descriptionParagraph1}</p>
                  <p>{selectedMemberForModal.descriptionParagraph2}</p>
                </div>
              </div>

              {/* Botón CTA con margen inferior holgado */}
              <div className="pt-6 sm:pt-8 mt-auto">
                <button
                  type="button"
                  onClick={() => {
                    const service = selectedMemberForModal.service;
                    setSelectedMemberForModal(null);
                    openBookingModal({ service });
                  }}
                  style={{
                    backgroundColor: selectedMemberForModal.accentColor,
                    boxShadow: `0 10px 25px -5px ${selectedMemberForModal.shadowColor}`,
                  }}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-white font-bold text-sm sm:text-base shadow-lg hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <CalendarCheck className="w-5 h-5 shrink-0" />
                  <span>Agendar Valoración con {selectedMemberForModal.shortName}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
