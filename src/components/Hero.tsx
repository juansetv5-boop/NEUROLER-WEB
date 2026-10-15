'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SegmentedControl } from '@mantine/core';
import { ArrowRight, CalendarCheck, MessageSquare } from 'lucide-react';
import { useBookingModal, ServiceType } from '@/context/BookingModalContext';

type HeroTab = 'neuroler' | 'padres' | 'colegios';

interface TabConfigItem {
  label: string;
  title: string;
  description: string;
  ctaText: string;
  bgColor: string;
  indicatorBg: string;
  shadowColor: string;
  mascot: string;
  serviceMap: ServiceType;
  isWhatsApp?: boolean;
  hasFrame?: boolean;
}

const TAB_CONFIG: Record<HeroTab, TabConfigItem> = {
  neuroler: {
    label: 'Neuroler',
    title: 'Tu hijo sí puede aprender feliz. Solo necesita que entendamos su cerebro.',
    description: 'Evaluamos sin etiquetas frías para descubrir cómo procesa la información tu hijo. Diseñamos un camino a su medida para que fortalezca su lectura, atención y autonomía con amor y base científica.',
    ctaText: 'Agendar Valoración',
    bgColor: '#6d9ae3', // Azul solicitado para fondo y pestaña
    indicatorBg: '#6d9ae3',
    shadowColor: 'rgba(109, 154, 227, 0.5)',
    mascot: '/mascota-neuroler-neuroler.png',
    serviceMap: 'neuroeducacion',
  },
  padres: {
    label: 'Padres',
    title: 'Te entiendo como especialista, pero sobre todo como mamá.',
    description: 'Respira tranquila. Sé el cansancio de las batallas diarias con las tareas. Neuroler nació en casa con mi hijo Juan Sebastián: cuando un niño sufre en el colegio, no es por falta de ganas, es porque nadie le ha enseñado desde cómo aprende su cerebro.',
    ctaText: 'Hablemos de tu hijo',
    bgColor: '#9d7fe6', // Lila/morado armónico para fondo y pestaña
    indicatorBg: '#9d7fe6',
    shadowColor: 'rgba(157, 127, 230, 0.5)',
    mascot: '/mascota-neuroler-padres.png',
    serviceMap: 'lectura',
  },
  colegios: {
    label: 'Colegios',
    title: 'Una alianza real entre el aula, la familia y los especialistas.',
    description: 'No reemplazamos al equipo docente; hacemos equipo con ustedes. Brindamos capacitación, pautas adaptativas y seguimiento con datos concretos para potenciar a los estudiantes que necesitan apoyo.',
    ctaText: 'Alianza Institucional',
    bgColor: '#e8845e', // Melocotón/coral armónico para fondo y pestaña
    indicatorBg: '#e8845e',
    shadowColor: 'rgba(232, 132, 94, 0.5)',
    mascot: '/mascota-neuroler-colegios.jpg',
    serviceMap: 'atencion',
    isWhatsApp: true,
    hasFrame: true,
  },
};

export const Hero: React.FC = () => {
  const { openBookingModal } = useBookingModal();
  const [selectedTab, setSelectedTab] = useState<HeroTab>('neuroler');
  const activeTabContent = TAB_CONFIG[selectedTab] || TAB_CONFIG.neuroler;

  const handleTabChange = (val: string) => {
    const key = val as HeroTab;
    setSelectedTab(key);
  };

  const handleCtaClick = () => {
    if (activeTabContent.isWhatsApp) {
      const msg = encodeURIComponent('Hola Leidy Rocío y equipo NEUROLER, soy directivo/orientador escolar y deseo información sobre alianzas institucionales.');
      window.open(`https://wa.me/573116340453?text=${msg}`, '_blank');
    } else {
      openBookingModal({ service: activeTabContent.serviceMap });
    }
  };

  return (
    <section 
      style={{ 
        backgroundColor: activeTabContent.bgColor,
        transition: 'background-color 500ms ease'
      }}
      className="relative overflow-hidden pt-28 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 text-white"
    >
      {/* Resplandor decorativo suave de profundidad */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-white/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div 
        className="absolute top-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-500 opacity-30" 
        style={{ backgroundColor: activeTabContent.indicatorBg }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Columna Izquierda: Mensaje Principal, SegmentedControl Armonizado, y Botones */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Ilustración solo en Móvil (< lg): Ubicada arriba del selector de pestañas */}
            <div className="flex lg:hidden w-full justify-center mb-4">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 aspect-square flex items-center justify-center">
                {/* Resplandor suave detrás de la ilustración en móvil */}
                <div 
                  className="absolute inset-0 rounded-full blur-2xl pointer-events-none -z-10 transition-colors duration-500 opacity-25" 
                  style={{ backgroundColor: activeTabContent.indicatorBg }}
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`mobile-${selectedTab}`}
                    initial={{ opacity: 0, scale: 0.92, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className={`relative w-full h-full flex items-center justify-center ${
                      activeTabContent.hasFrame
                        ? 'p-2 bg-white/40 backdrop-blur-md rounded-3xl border-2 sm:border-4 border-white/80 shadow-2xl'
                        : ''
                    }`}
                  >
                    <div className={`relative w-full h-full flex items-center justify-center ${
                      activeTabContent.hasFrame ? 'rounded-2xl overflow-hidden' : ''
                    }`}>
                      <Image
                        src={activeTabContent.mascot}
                        alt={`Ilustración NEUROLER - ${activeTabContent.label}`}
                        width={300}
                        height={300}
                        quality={100}
                        unoptimized={true}
                        className={`w-full h-full pointer-events-none ${
                          activeTabContent.hasFrame
                            ? 'object-cover rounded-2xl'
                            : 'object-contain drop-shadow-xl animate-float-slow'
                        }`}
                        priority
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* SegmentedControl Mantine UI con pestañas ('Neuroler', 'Padres', 'Colegios') */}
            <div className="mb-6 lg:mb-8 w-full max-w-full overflow-x-auto pb-1 flex justify-center lg:justify-start">
              <SegmentedControl
                radius="xl"
                size="sm"
                fullWidth
                withItemsBorders={false}
                value={selectedTab}
                onChange={handleTabChange}
                data={[
                  { 
                    label: (
                      <span 
                        style={{ color: selectedTab === 'neuroler' ? '#FFFFFF' : '#334155' }}
                        className="inline-block font-bold transition-colors duration-200"
                      >
                        Neuroler
                      </span>
                    ), 
                    value: 'neuroler' 
                  },
                  { 
                    label: (
                      <span 
                        style={{ color: selectedTab === 'padres' ? '#FFFFFF' : '#334155' }}
                        className="inline-block font-bold transition-colors duration-200"
                      >
                        Padres
                      </span>
                    ), 
                    value: 'padres' 
                  },
                  { 
                    label: (
                      <span 
                        style={{ color: selectedTab === 'colegios' ? '#FFFFFF' : '#334155' }}
                        className="inline-block font-bold transition-colors duration-200"
                      >
                        Colegios
                      </span>
                    ), 
                    value: 'colegios' 
                  },
                ]}
                styles={{
                  root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.85)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    padding: '4px',
                    borderRadius: '9999px',
                    maxWidth: '100%',
                  },
                  indicator: {
                    backgroundColor: activeTabContent.indicatorBg,
                    boxShadow: `0 3px 12px ${activeTabContent.shadowColor}`,
                    borderRadius: '9999px',
                    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  label: {
                    color: '#334155',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    padding: '7px 14px',
                    transition: 'all 300ms ease',
                  },
                  control: {
                    border: 'none',
                  }
                }}
              />
            </div>

            {/* Titular y Subtítulo Dinámicos con Transición Fluida */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${selectedTab}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                className="w-full"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-5 sm:mb-6 max-w-2xl drop-shadow-sm min-h-0 lg:min-h-[140px] flex items-center">
                  {activeTabContent.title}
                </h1>

                <p className="text-base sm:text-xl text-white/95 leading-relaxed mb-8 max-w-xl font-normal min-h-0 lg:min-h-[110px]">
                  {activeTabContent.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dos Botones Principales de Acción con micro-animaciones */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleCtaClick}
                style={{ 
                  backgroundColor: activeTabContent.indicatorBg,
                  boxShadow: `0 10px 25px -5px ${activeTabContent.shadowColor}`
                }}
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 border border-white/30 hover:brightness-110 cursor-pointer text-sm sm:text-base"
              >
                {activeTabContent.isWhatsApp ? (
                  <MessageSquare className="w-5 h-5 shrink-0" />
                ) : (
                  <CalendarCheck className="w-5 h-5 shrink-0" />
                )}
                <span>{activeTabContent.ctaText}</span>
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contacto"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300 border border-white/25 backdrop-blur-md text-sm sm:text-base"
                >
                  <span>CONTACTANOS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Columna Derecha (Solo en PC/Desktop lg:): Ilustración Dinámica con Transición Suave */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-end relative overflow-visible">
            {/* Luz tenue de fondo */}
            <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-white/15 rounded-full blur-3xl pointer-events-none -z-10" />
            <div 
              className="absolute w-56 h-56 rounded-full blur-2xl pointer-events-none -z-10 transition-colors duration-500 opacity-25" 
              style={{ backgroundColor: activeTabContent.indicatorBg }}
            />

            <div 
              id="mascota-neuroler-bienvenida"
              className="relative w-64 sm:w-88 lg:w-[460px] aspect-square flex items-center justify-center max-w-full"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desktop-${selectedTab}`}
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className={`relative w-full h-full flex items-center justify-center ${
                    activeTabContent.hasFrame
                      ? 'p-3 bg-white/40 backdrop-blur-md rounded-[36px] border-4 border-white/80 shadow-2xl'
                      : ''
                  }`}
                >
                  <div className={`relative w-full h-full flex items-center justify-center ${
                    activeTabContent.hasFrame ? 'rounded-[28px] overflow-hidden' : ''
                  }`}>
                    <Image
                      src={activeTabContent.mascot}
                      alt={`Ilustración NEUROLER - ${activeTabContent.label}`}
                      width={480}
                      height={480}
                      quality={100}
                      unoptimized={true}
                      className={`w-full h-full pointer-events-none ${
                        activeTabContent.hasFrame
                          ? 'object-cover rounded-[28px]'
                          : 'object-contain drop-shadow-2xl animate-float-slow'
                      }`}
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Capa de desvanecimiento suave hacia el blanco hueso (#F8F9FA) en la base del Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#F8F9FA]/40 to-[#F8F9FA] pointer-events-none z-20" />
    </section>
  );
};
