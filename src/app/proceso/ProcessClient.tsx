'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Search, 
  BookOpen, 
  Users, 
  School, 
  CalendarCheck, 
  MessageSquare, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';
import { CTABanner } from '@/components/CTABanner';

interface StoryStep {
  step: string;
  badgeTitle: string;
  title: string;
  subtitle: string;
  narrative: string[];
  takeaways: string[];
  icon: React.ElementType;
  color: string;
  bgLight: string;
  borderColor: string;
  ctaText?: string;
  ctaService?: 'lectura' | 'atencion' | 'neuroeducacion';
  isB2B?: boolean;
}

const STORY_STEPS: StoryStep[] = [
  {
    step: '01',
    badgeTitle: 'El Punto de Partida',
    title: 'Comprendemos lo que vive tu familia',
    subtitle: 'Las tardes de peleas por las tareas y el miedo a que pierda el año',
    narrative: [
      'Todo comienza cuando una familia o colegio nos contacta con angustia: el niño se frustra al sentarse a hacer las tareas, dice que odia leer, le da sueño, se distrae con facilidad o siente que no es capaz de seguir el ritmo en el salón.',
      'Los padres ya han intentado que practique más horas en casa o han probado tutorías sueltas, pero la frustración solo aumenta. En NEUROLER partimos de una verdad transformadora: no es falta de esfuerzo ni de voluntad; es que nadie le ha enseñado desde la forma en que su cerebro realmente procesa la información.',
    ],
    takeaways: [
      'Validamos la emoción de tu hijo sin culparlo ni regañarlo',
      'Despejamos la culpa y la incertidumbre de los padres',
      'Cambiamos la exigencia de repetición por comprensión real',
    ],
    icon: HeartHandshake,
    color: '#1E4A7A',
    bgLight: 'bg-blue-50/60',
    borderColor: 'border-blue-100',
  },
  {
    step: '02',
    badgeTitle: 'La Evaluación',
    title: 'Mapeamos su cerebro sin etiquetas frías',
    subtitle: 'Identificar con precisión el punto de partida antes de intervenir',
    narrative: [
      'Antes de pedirle a un niño que lea más rápido o que se concentre por más tiempo, necesitamos saber con exactitud en qué punto de su mapa de desarrollo está. Nunca nos saltamos este paso.',
      'En un espacio cálido, tranquilo y sin batas blancas, realizamos una valoración neurocognitiva integral donde exploramos atención auditiva, funciones ejecutivas, lenguaje, memoria y motricidad. Le explicamos a los padres el por qué de cada dificultad con total claridad, sin tecnicismos complejos ni diagnósticos alarmantes que desesperancen.',
    ],
    takeaways: [
      'Evaluación personalizada basada en neuropsicología educativa',
      'Cero etiquetas limitantes ni estigmas que frenen su autoestima',
      'Mapa de ruta claro con pautas inmediatas para casa y colegio',
    ],
    icon: Search,
    color: '#F28C4E',
    bgLight: 'bg-orange-50/60',
    borderColor: 'border-orange-100',
    ctaText: 'Agendar Valoración Inicial',
    ctaService: 'neuroeducacion',
  },
  {
    step: '03',
    badgeTitle: 'La Estimulación',
    title: 'Estimulamos la raíz del aprendizaje',
    subtitle: 'La lectura empieza en el oído, no en el ojo',
    narrative: [
      'La mayoría de los métodos tradicionales enseñan a decodificar letras a la fuerza. Nosotros intervenimos donde la ciencia demuestra que nace la lectura: en la atención y discriminación auditiva.',
      'A través de sesiones de estimulación neurolingüística y neuroeducación, el niño entrena el oído, la memoria de trabajo y el control inhibitorio mediante retos y dinámicas lúdicas adaptadas a sus gustos. Al trabajar la base correcta, la lectura deja de ser un castigo y el niño experimenta que sí puede avanzar con fluidez y comprensión.',
    ],
    takeaways: [
      'Estimulación auditiva previa a la decodificación visual de letras',
      'Entrenamiento de funciones ejecutivas (atención, memoria y autorregulación)',
      'Estrategias sensoriales adaptadas a su ritmo singular',
    ],
    icon: BookOpen,
    color: '#5B3794',
    bgLight: 'bg-purple-50/60',
    borderColor: 'border-purple-100',
    ctaText: 'Acompañamiento en Lectura y Atención',
    ctaService: 'lectura',
  },
  {
    step: '04',
    badgeTitle: 'El Equipo',
    title: 'Un equipo propio, no una fila de consultorios aislados',
    subtitle: 'Fonoaudiología, Psicología con Ammare, Terapia Ocupacional y Fisioterapia',
    narrative: [
      'Cuando un niño necesita un apoyo más amplio, no dejamos a la familia sola recorriendo la ciudad para coordinar cuatro especialistas que nunca se hablan entre sí.',
      'NEUROLER cuenta con un equipo interdisciplinario propio coordinado bajo una misma dirección clínica y pedagógica: Fonoaudiología para el lenguaje y procesamiento auditivo; Psicología infantil en convenio con Ammare para la regulación emocional, autoestima y vínculo seguro; y Terapia Ocupacional y Fisioterapia para la integración sensorial y motricidad.',
    ],
    takeaways: [
      'Un solo proceso coordinado sin trámites ni derivaciones desconectadas',
      'Articulación integral entre desarrollo emocional, motor y cognitivo',
      'Seguimiento continuo con un único equipo de referencia',
    ],
    icon: Users,
    color: '#2563EB',
    bgLight: 'bg-indigo-50/60',
    borderColor: 'border-indigo-100',
    ctaText: 'Consultar con el Equipo',
    ctaService: 'neuroeducacion',
  },
  {
    step: '05',
    badgeTitle: 'La Articulación',
    title: 'Hacemos equipo con el colegio y el hogar',
    subtitle: 'Pautas claras para el aula y tranquilidad en las tardes de casa',
    narrative: [
      'El proceso no se queda encerrado en una sesión semanal. Construimos un puente real entre el centro, la escuela y el hogar para que todos hablemos el mismo lenguaje.',
      'Coordinamos con los docentes y departamentos de orientación de los colegios en Pereira, dándoles pautas concretas para el aula sin sobrecargarlos con tareas extras. Al mismo tiempo, orientamos a los padres para que las tardes de estudio dejen de ser una batalla campal y vuelvan a ser un espacio de tranquilidad y conexión familiar.',
    ],
    takeaways: [
      'Pautas de aula coordinadas con los profesores y directivos',
      'Herramientas prácticas para manejar tareas sin peleas en el hogar',
      'Reportes de avance periódicos con métricas objetivas de evolución',
    ],
    icon: School,
    color: '#059669',
    bgLight: 'bg-emerald-50/60',
    borderColor: 'border-emerald-100',
    ctaText: 'Alianzas para Colegios',
    isB2B: true,
  },
];

export const ProcessClient: React.FC = () => {
  const { openBookingModal } = useBookingModal();

  const handleB2BWhatsApp = () => {
    const msg = encodeURIComponent('Hola Leidy Rocío y equipo NEUROLER, soy directivo/orientador escolar y deseo información sobre sus programas y alianzas institucionales.');
    window.open(`https://wa.me/573127930898?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 pt-28 sm:pt-36">
      
      {/* 1. ENCABEZADO DE PÁGINA (Sin tags ornamentales) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-5"
        >
          Cómo trabajamos
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          No añadimos más presión ni tareas repetitivas: descubrimos cómo aprende su cerebro y lo acompañamos paso a paso hacia la seguridad y la tranquilidad.
        </motion.p>
      </section>

      {/* 2. EL VIAJE PASO A PASO (Storytelling en 5 Capítulos) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="space-y-12 sm:space-y-16 relative">
          
          {/* Línea conectora central vertical en desktop */}
          <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-0.5 bg-slate-200 -z-0" />

          {STORY_STEPS.map((stepItem, idx) => {
            const Icon = stepItem.icon;
            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="relative z-10"
              >
                <div className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    
                    {/* Columna Izquierda: Identificador de Paso e Ícono */}
                    <div className="lg:col-span-4 flex flex-col items-start space-y-4">
                      
                      {/* Número y Etapa */}
                      <div className="flex items-center gap-3">
                        <span 
                          className="text-3xl sm:text-4xl font-black tracking-tight"
                          style={{ color: stepItem.color }}
                        >
                          {stepItem.step}
                        </span>
                        <div className="h-6 w-px bg-slate-200" />
                        <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                          {stepItem.badgeTitle}
                        </span>
                      </div>

                      {/* Contenedor del Ícono */}
                      <div 
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stepItem.bgLight} border ${stepItem.borderColor}`}
                      >
                        <Icon className="w-7 h-7" style={{ color: stepItem.color }} />
                      </div>

                      {/* Botón CTA Contextual si existe */}
                      {stepItem.ctaText && (
                        <div className="pt-2 w-full hidden lg:block">
                          {stepItem.isB2B ? (
                            <button
                              type="button"
                              onClick={handleB2BWhatsApp}
                              style={{ backgroundColor: stepItem.color }}
                              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-xs hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                            >
                              <MessageSquare className="w-4 h-4" />
                              <span>{stepItem.ctaText}</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => openBookingModal({ service: stepItem.ctaService || 'neuroeducacion' })}
                              style={{ backgroundColor: stepItem.color }}
                              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-xs hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                            >
                              <CalendarCheck className="w-4 h-4" />
                              <span>{stepItem.ctaText}</span>
                            </button>
                          )}
                        </div>
                      )}

                    </div>

                    {/* Columna Derecha: Título, Narrativa y Puntos Clave */}
                    <div className="lg:col-span-8 space-y-5">
                      
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-1.5">
                          {stepItem.title}
                        </h2>
                        <p 
                          className="text-xs sm:text-sm font-semibold"
                          style={{ color: stepItem.color }}
                        >
                          {stepItem.subtitle}
                        </p>
                      </div>

                      {/* Texto de la Historia */}
                      <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                        {stepItem.narrative.map((par, pIdx) => (
                          <p key={pIdx}>{par}</p>
                        ))}
                      </div>

                      {/* Puntos Clave de lo que Sucede */}
                      <div className="pt-4 border-t border-slate-100">
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                          {stepItem.takeaways.map((point, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 
                                className="w-4.5 h-4.5 shrink-0 mt-0.5" 
                                style={{ color: stepItem.color }} 
                              />
                              <span className="leading-snug">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Botón CTA para pantallas móviles (< lg) */}
                      {stepItem.ctaText && (
                        <div className="pt-3 block lg:hidden">
                          {stepItem.isB2B ? (
                            <button
                              type="button"
                              onClick={handleB2BWhatsApp}
                              style={{ backgroundColor: stepItem.color }}
                              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-white font-bold text-sm shadow-xs hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                            >
                              <MessageSquare className="w-4 h-4" />
                              <span>{stepItem.ctaText}</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => openBookingModal({ service: stepItem.ctaService || 'neuroeducacion' })}
                              style={{ backgroundColor: stepItem.color }}
                              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-white font-bold text-sm shadow-xs hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                            >
                              <CalendarCheck className="w-4 h-4" />
                              <span>{stepItem.ctaText}</span>
                            </button>
                          )}
                        </div>
                      )}

                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* 3. BLOQUE DE CIERRE: El Desenlace en 3 Meses */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28 text-center">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F28C4E] flex items-center justify-center mx-auto mb-2">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Resultados reales y duraderos a su propio ritmo
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Trabajando <strong>2 horas por semana</strong>, en promedio observamos cambios profundos y sostenibles a los <strong>tres meses</strong>: niños que recuperan el gusto por aprender, familias que vuelven a disfrutar las tardes en casa y docentes con herramientas claras para acompañarlos.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openBookingModal({ service: 'neuroeducacion' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-2xl bg-[#F28C4E] hover:bg-[#e07d3f] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              >
                <CalendarCheck className="w-4.5 h-4.5" />
                <span>Agendar Valoración Inicial</span>
              </button>
              <a
                href="https://wa.me/573127930898?text=Hola%20Leidy%20Roc%C3%ADo%20y%20equipo%20NEUROLER,%20deseo%20conocer%20m%C3%A1s%20sobre%20su%20m%C3%A9todo."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER FINAL (Reutilizado idéntico del Home) */}
      <CTABanner />

    </div>
  );
};
