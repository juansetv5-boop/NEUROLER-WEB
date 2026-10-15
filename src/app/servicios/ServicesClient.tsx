'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '@mantine/core';
import { 
  BookOpen, 
  Brain, 
  Search, 
  Users, 
  School, 
  HeartHandshake, 
  CalendarCheck, 
  MessageSquare,
  Check
} from 'lucide-react';
import { useBookingModal, ServiceType } from '@/context/BookingModalContext';
import { CTABanner } from '@/components/CTABanner';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  serviceType: ServiceType;
  accentColor: string;
  lightBg: string;
  isB2B?: boolean;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'lectoescritura',
    icon: BookOpen,
    title: 'Estimulación Neurolingüística & Lectoescritura',
    subtitle: 'La lectura empieza en el oído, no en el ojo',
    description: 'Trabajamos la discriminación auditiva y la conciencia fonológica antes de exigir repetición visual. Acompañamos dificultades en lectura, escritura y comprensión para devolver la confianza escolar.',
    points: [
      'Entrenamiento de la base auditiva previa a la decodificación de letras',
      'Comprensión lectora profunda y fluidez verbal sin frustración',
      'Rutas multisensoriales respetuosas con el ritmo y singularidad de tu hijo',
    ],
    serviceType: 'lectura',
    accentColor: '#5B3794',
    lightBg: 'bg-purple-50/70',
  },
  {
    id: 'funciones-ejecutivas',
    icon: Brain,
    title: 'Neuroeducación & Funciones Ejecutivas',
    subtitle: 'Atención sostenida, memoria de trabajo y autorregulación',
    description: 'Entrenamos la capacidad de planificar, sostener la concentración y modular impulsos en el aula y en casa, fortaleciendo el autocontrol y la autonomía frente a las exigencias académicas.',
    points: [
      'Estrategias para disminuir la dispersión y la frustración ante retos escolares',
      'Fortalecimiento de la memoria de trabajo y el seguimiento de instrucciones',
      'Desarrollo del freno inhibitorio y autorregulación conductual',
    ],
    serviceType: 'atencion',
    accentColor: '#C45116',
    lightBg: 'bg-orange-50/70',
  },
  {
    id: 'valoracion-integral',
    icon: Search,
    title: 'Valoración Neurocognitiva Integral',
    subtitle: 'Evaluación científica del mapa de desarrollo sin etiquetas frías',
    description: 'Identificamos con precisión el punto exacto de desarrollo neurocognitivo antes de exigir más esfuerzo. Entregamos un mapa claro de fortalezas y necesidades para orientar a la familia y a los docentes.',
    points: [
      'Evaluación de procesamiento auditivo, lenguaje, atención y motricidad',
      'Pautas claras y aplicables en la rutina diaria del hogar y del aula',
      'Proceso cálido y respetuoso, sin diagnósticos alarmantes ni estigmas',
    ],
    serviceType: 'neuroeducacion',
    accentColor: '#1E4A7A',
    lightBg: 'bg-blue-50/70',
  },
  {
    id: 'equipo-interdisciplinario',
    icon: Users,
    title: 'Equipo Interdisciplinario Propio',
    subtitle: 'Un solo proceso coordinado, no una fila de consultorios aislados',
    description: 'Contamos con profesionales en Fonoaudiología, Psicología infantil (en convenio con Ammare), Terapia Ocupacional y Fisioterapia que intervienen articulados bajo una sola metodología.',
    points: [
      'Fonoaudiología: desarrollo del lenguaje oral y procesamiento auditivo',
      'Psicología clínica e infantil: regulación emocional y vínculo seguro',
      'Terapia ocupacional y fisioterapia: integración sensorial y motricidad',
    ],
    serviceType: 'neuroeducacion',
    accentColor: '#2563EB',
    lightBg: 'bg-indigo-50/70',
  },
  {
    id: 'alianzas-colegios',
    icon: School,
    title: 'Programas y Alianzas para Colegios',
    subtitle: 'Acompañamiento institucional, capacitación docente y datos claros',
    description: 'Hacemos equipo con departamentos de orientación y docentes de Pereira. No reemplazamos al equipo del colegio: lo capacitamos con herramientas de neuroeducación y hacemos seguimiento coordinado.',
    points: [
      'Evaluación e intervención de estudiantes remitidos con seguimiento objetivo',
      'Capacitación a docentes (presencial o virtual) en herramientas de aula',
      'Reportes de avance periódicos y coordinados con coordinación académica',
    ],
    serviceType: 'neuroeducacion',
    accentColor: '#059669',
    lightBg: 'bg-emerald-50/70',
    isB2B: true,
  },
  {
    id: 'orientacion-familias',
    icon: HeartHandshake,
    title: 'Orientación Familiar y Pautas para Casa',
    subtitle: 'Herramientas prácticas para transformar la hora de las tareas',
    description: 'Guiamos a padres y cuidadores para eliminar la hostilidad y las batallas diarias por el estudio en el hogar, construyendo dinámicas de apoyo claras que devuelven la tranquilidad.',
    points: [
      'Pautas de estudio ajustadas a cómo procesa información su cerebro',
      'Manejo de la frustración y comunicación asertiva entre padres e hijos',
      'Acompañamiento continuo y cercano durante todo el proceso',
    ],
    serviceType: 'neuroeducacion',
    accentColor: '#F28C4E',
    lightBg: 'bg-amber-50/70',
  },
];

export const ServicesClient: React.FC = () => {
  const { openBookingModal } = useBookingModal();

  const handleB2BWhatsApp = () => {
    const msg = encodeURIComponent('Hola Leidy Rocío y equipo NEUROLER, soy directivo/orientador escolar y deseo información sobre sus programas y alianzas institucionales.');
    window.open(`https://wa.me/573127930898?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 pt-28 sm:pt-36">
      
      {/* 1. ENCABEZADO MINIMALISTA (Sin tags ornamentales) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14 sm:mb-18">
        <motion.h1 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-5"
        >
          Nuestras áreas de servicio
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Haz clic en cada área para conocer cómo abordamos el proceso de tu hijo o institución educativa.
        </motion.p>
      </section>

      {/* 2. LISTA DESPLEGABLE TIPO FAQ (Estilo limpio con Acordeón Mantine) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-200/80 rounded-3xl p-4 sm:p-8 shadow-xs"
        >
          <Accordion
            variant="separated"
            radius="xl"
            chevronPosition="right"
            styles={{
              item: {
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '1.25rem',
                marginBottom: '1rem',
                transition: 'all 200ms ease',
              },
              control: {
                padding: '1.15rem 1.4rem',
                borderRadius: '1.25rem',
              },
              label: {
                padding: 0,
              },
              content: {
                padding: '0 1.5rem 1.5rem 1.5rem',
                color: '#475569',
                fontSize: '0.9375rem',
                lineHeight: 1.65,
              },
            }}
          >
            {SERVICES_LIST.map((service) => {
              const Icon = service.icon;
              return (
                <Accordion.Item key={service.id} value={service.id}>
                  <Accordion.Control>
                    <div className="flex items-center gap-3.5 sm:gap-4 py-0.5">
                      <div 
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 ${service.lightBg}`}
                      >
                        <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" style={{ color: service.accentColor }} />
                      </div>
                      <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {service.title}
                      </span>
                    </div>
                  </Accordion.Control>

                  <Accordion.Panel>
                    <div className="pt-2 pb-2 space-y-4 text-slate-600 border-t border-slate-100">
                      
                      <p 
                        className="text-xs sm:text-sm font-semibold pt-2"
                        style={{ color: service.accentColor }}
                      >
                        {service.subtitle}
                      </p>

                      <p className="text-sm sm:text-base leading-relaxed font-normal">
                        {service.description}
                      </p>

                      <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-600">
                        {service.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <span 
                              className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                              style={{ backgroundColor: `${service.accentColor}15`, color: service.accentColor }}
                            >
                              <Check className="w-3 h-3" />
                            </span>
                            <span className="leading-snug">{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        {service.isB2B ? (
                          <button
                            type="button"
                            onClick={handleB2BWhatsApp}
                            style={{ backgroundColor: service.accentColor }}
                            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-xs hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                          >
                            <MessageSquare className="w-4 h-4" />
                            <span>Alianzas para Colegios</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => openBookingModal({ service: service.serviceType })}
                            style={{ backgroundColor: service.accentColor }}
                            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-xs hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                          >
                            <CalendarCheck className="w-4 h-4" />
                            <span>Agendar Valoración</span>
                          </button>
                        )}
                      </div>

                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </motion.div>
      </section>

      {/* 3. CTA BANNER FINAL (Reutilizado idéntico del Home) */}
      <CTABanner />

    </div>
  );
};
