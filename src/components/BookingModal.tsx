'use client';

import React, { useState, useEffect } from 'react';
import { Modal, Progress, TextInput, Button } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  MessageCircle, 
  MapPin, 
  Video, 
  ChevronLeft, 
  Baby, 
  GraduationCap, 
  Check, 
  BookOpen, 
  Heart,
  UserCheck
} from 'lucide-react';
import { useBookingModal, ModalityType } from '@/context/BookingModalContext';

// Pasos del Wizard
type StepNumber = 1 | 2 | 3 | 4;

type AgeRangeId = 'range_3_5' | 'range_6_9' | 'range_10_14' | 'adult';
type SpecialistId = 'leidy' | 'amma' | 'kevin' | 'orientacion';

const AGE_OPTIONS: { id: AgeRangeId; label: string; badge: string; desc: string; icon: typeof Baby }[] = [
  {
    id: 'range_3_5',
    label: '3 a 5 años',
    badge: 'Primera infancia',
    desc: 'Dificultades iniciales de lenguaje, atención, adaptación escolar o conducta',
    icon: Baby,
  },
  {
    id: 'range_6_9',
    label: '6 a 9 años',
    badge: 'Primaria / Lectoescritura',
    desc: 'Tropiezos en lectura, escritura, dislexia, atención o matemática básica',
    icon: BookOpen,
  },
  {
    id: 'range_10_14',
    label: '10 a 14 años',
    badge: 'Desarrollo avanzado',
    desc: 'Funciones ejecutivas, hábitos de estudio, TDAH, memoria y autonomía',
    icon: GraduationCap,
  },
  {
    id: 'adult',
    label: 'Adulto / Consulta general',
    badge: 'Consulta General',
    desc: 'Orientación a padres, docentes o consulta pedagógica para un adulto',
    icon: UserCheck,
  },
];

const SPECIALIST_OPTIONS: { id: SpecialistId; name: string; badge: string; desc: string; color: string }[] = [
  {
    id: 'leidy',
    name: 'Leidy Rocío Adrada Varona',
    badge: 'Directora & Neuroeducación',
    desc: '+24 años de experiencia en desarrollo cognitivo y orientación familiar.',
    color: '#F28C4E',
  },
  {
    id: 'amma',
    name: 'Amma',
    badge: 'Especialista en Lectoescritura',
    desc: 'Dislexia, comprensión lectora, fluidez y habilidades fonológicas.',
    color: '#A88CCF',
  },
  {
    id: 'kevin',
    name: 'Kevin Vargas',
    badge: 'Neuroentrenamiento & TDAH',
    desc: 'Funciones ejecutivas, atención, memoria de trabajo y autorregulación.',
    color: '#F2B31A',
  },
  {
    id: 'orientacion',
    name: 'Necesito Orientación',
    badge: 'Recomendación Personalizada',
    desc: 'No estoy seguro/a de cuál especialista o área es la indicada.',
    color: '#8EDB83',
  },
];

export const BookingModal: React.FC = () => {
  const { isOpen, closeBookingModal, initialSpecialistId, selectedService, selectedModality: ctxModality } = useBookingModal();

  const [currentStep, setCurrentStep] = useState<StepNumber>(1);
  const [selectedAgeId, setSelectedAgeId] = useState<AgeRangeId>('range_6_9');
  const [specialistId, setSpecialistId] = useState<SpecialistId>('leidy');
  const [modality, setModality] = useState<ModalityType>('presencial');
  const [parentName, setParentName] = useState('');
  const [childInfo, setChildInfo] = useState('');

  // Sincronizar estado cuando se abre el modal
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      if (initialSpecialistId) {
        setSpecialistId(initialSpecialistId);
      } else if (selectedService === 'lectura') {
        setSpecialistId('amma');
      } else if (selectedService === 'atencion') {
        setSpecialistId('kevin');
      } else {
        setSpecialistId('leidy');
      }
      if (ctxModality) {
        setModality(ctxModality);
      }
    }
  }, [isOpen, initialSpecialistId, selectedService, ctxModality]);

  const handleSelectAge = (id: AgeRangeId) => {
    setSelectedAgeId(id);
    setCurrentStep(2);
  };

  const handleSelectSpecialist = (id: SpecialistId) => {
    setSpecialistId(id);
    setCurrentStep(3);
  };

  const handleSelectModality = (mod: ModalityType) => {
    setModality(mod);
    setCurrentStep(4);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as StepNumber);
    }
  };

  const handleSendWhatsApp = () => {
    const ageObj = AGE_OPTIONS.find((a) => a.id === selectedAgeId);
    const specObj = SPECIALIST_OPTIONS.find((s) => s.id === specialistId);
    const modalityLabel = modality === 'presencial' 
      ? 'Presencial (Pereira - Barrio Corales)' 
      : 'Virtual (Online)';

    const esAdulto = selectedAgeId === 'adult';
    const nombre = parentName.trim();
    const notas = childInfo.trim();

    let message = '';

    if (esAdulto) {
      if (nombre) {
        message += `Hola Leidy Rocío y equipo NEUROLER, un gusto saludarlos. Mi nombre es ${nombre}.\n\n`;
      } else {
        message += `Hola Leidy Rocío y equipo NEUROLER, un gusto saludarlos.\n\n`;
      }

      message += `Me comunico porque me gustaría solicitar una consulta / orientación`;
      message += modality === 'presencial' ? ` presencial en su sede de Pereira.\n\n` : ` en modalidad virtual.\n\n`;

      message += `Te comparto los datos de mi solicitud:\n`;
      message += `• *Consulta:* Adulto / Orientación personal\n`;

      if (specialistId === 'orientacion') {
        message += `• *Línea de interés:* Orientación personalizada según mi caso\n`;
      } else {
        message += `• *Especialista:* ${specObj?.name || 'Orientación'} (${specObj?.badge || ''})\n`;
      }

      message += `• *Modalidad:* ${modalityLabel}\n`;

      if (notas) {
        message += `• *Motivo o inquietud:* ${notas}\n`;
      }

      message += `\n¿Me podrían indicar qué horarios o espacios tienen disponibles para coordinar la cita? Quedo atento/a, muchas gracias.`;
    } else {
      if (nombre) {
        message += `Hola Leidy Rocío y equipo NEUROLER, un gusto saludarlos. Mi nombre es ${nombre}.\n\n`;
      } else {
        message += `Hola Leidy Rocío y equipo NEUROLER, un gusto saludarlos.\n\n`;
      }

      const childMention = notas ? `para mi hijo/a (${notas})` : `para mi hijo/a`;
      message += `Me gustaría agendar una valoración neuroeducativa ${childMention}`;
      message += modality === 'presencial' ? ` de manera presencial en Pereira.\n\n` : ` en modalidad virtual.\n\n`;

      message += `Te comparto los datos principales:\n`;
      message += `• *Etapa / Rango de edad:* ${ageObj?.label || '3 a 5 años'} (${ageObj?.badge || ''})\n`;

      if (specialistId === 'orientacion') {
        message += `• *Enfoque:* Orientación personalizada según su necesidad\n`;
      } else {
        message += `• *Especialista / Área:* ${specObj?.name || 'Orientación'} (${specObj?.badge || ''})\n`;
      }

      message += `• *Modalidad:* ${modalityLabel}\n`;

      if (notas) {
        message += `• *Detalle o motivo:* ${notas}\n`;
      }

      message += `\n¿Podrían indicarme qué fechas o espacios tienen disponibles para agendarnos? Quedo muy atento/a, muchas gracias.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/573127930898?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    closeBookingModal();
  };

  const progressPercentage = currentStep * 25;

  return (
    <Modal
      opened={isOpen}
      onClose={closeBookingModal}
      title={
        <div className="flex items-center justify-between w-full pr-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#6d9ae3]/15 text-[#6d9ae3]">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-black text-lg sm:text-xl text-slate-800 tracking-tight">
              Agendar Valoración
            </span>
          </div>
          <span className="text-xs font-bold text-[#6d9ae3] bg-[#6d9ae3]/10 px-3 py-1 rounded-full border border-[#6d9ae3]/20">
            Paso {currentStep} de 4
          </span>
        </div>
      }
      centered
      radius="xl"
      padding="lg"
      size="lg"
      overlayProps={{
        backgroundOpacity: 0.35,
        blur: 4,
      }}
      styles={{
        header: {
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '1rem',
        },
        content: {
          backgroundColor: '#FFFFFF',
          color: '#1E293B',
          border: '1px solid #E2E8F0',
          boxShadow: '0 20px 40px -15px rgba(109, 154, 227, 0.2), 0 10px 25px -5px rgba(0, 0, 0, 0.08)',
          borderRadius: '1.75rem',
          overflow: 'hidden',
        },
        body: {
          backgroundColor: '#FFFFFF',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
        },
        close: {
          color: '#64748B',
          '&:hover': {
            backgroundColor: '#F1F5F9',
            color: '#0F172A',
          },
        },
      }}
    >
      <div className="space-y-5">
        {/* Barra de Progreso Mantine UI */}
        <div className="space-y-1">
          <Progress
            value={progressPercentage}
            color="#6d9ae3"
            size="sm"
            radius="xl"
            animated
            styles={{
              root: {
                backgroundColor: '#F1F5F9',
              },
            }}
          />
        </div>

        {/* Formulario Wizard Animado con Framer Motion */}
        <div className="min-h-[320px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* PASO 1: Selección de Rango de Edad */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight">
                    1. ¿Para qué rango de edad solicitas la atención?
                  </h3>
                  <p className="text-xs text-slate-500">
                    Selecciona una de las siguientes opciones:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {AGE_OPTIONS.map((opt) => {
                    const IconComponent = opt.icon;
                    const isSelected = selectedAgeId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectAge(opt.id)}
                        className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all duration-200 cursor-pointer group ${
                          isSelected
                            ? 'bg-[#6d9ae3]/10 border-2 border-[#6d9ae3] text-slate-900 shadow-md ring-2 ring-[#6d9ae3]/20'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80 hover:border-slate-300'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 transition-colors ${
                          isSelected ? 'bg-[#6d9ae3] text-white shadow-sm' : 'bg-white text-[#6d9ae3] border border-slate-200 shadow-2xs'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-800 leading-tight">
                              {opt.label}
                            </span>
                            {isSelected && <Check className="w-4 h-4 text-[#6d9ae3]" />}
                          </div>
                          <p className="text-xs text-slate-500 mt-1.5 leading-snug font-normal">
                            {opt.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* PASO 2: Selección de Especialista / Línea de Atención */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight">
                    2. Selecciona la Especialista o Línea de Atención
                  </h3>
                  <p className="text-xs text-slate-500">
                    Elige con quién o en qué área deseas solicitar la valoración:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SPECIALIST_OPTIONS.map((spec) => {
                    const isSelected = specialistId === spec.id;
                    return (
                      <button
                        key={spec.id}
                        type="button"
                        onClick={() => handleSelectSpecialist(spec.id)}
                        className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#6d9ae3]/10 border-2 border-[#6d9ae3] text-slate-900 shadow-md ring-2 ring-[#6d9ae3]/20'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2 gap-1">
                            <span 
                              className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-white border border-slate-200 shadow-2xs"
                              style={{ color: spec.color }}
                            >
                              {spec.badge}
                            </span>
                            {isSelected && <Check className="w-4 h-4 text-[#6d9ae3]" />}
                          </div>

                          <div className="text-xs sm:text-sm font-bold text-slate-800 mb-1">
                            {spec.name}
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                            {spec.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* PASO 3: Selección de Modalidad */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight">
                    3. ¿En qué modalidad prefieres la atención?
                  </h3>
                  <p className="text-xs text-slate-500">
                    Contamos con sede presencial en Pereira y servicio virtual para todo Colombia.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSelectModality('presencial')}
                    className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all duration-200 cursor-pointer ${
                      modality === 'presencial'
                        ? 'bg-[#6d9ae3]/10 border-2 border-[#6d9ae3] text-slate-900 shadow-md ring-2 ring-[#6d9ae3]/20'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-[#6d9ae3] text-white shrink-0 mt-0.5 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 mb-1 flex items-center justify-between">
                        <span>Presencial en Pereira</span>
                        {modality === 'presencial' && <Check className="w-4 h-4 text-[#6d9ae3]" />}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        Sede Barrio Corales &bull; Espacio tranquilo, cálido y equipado para niños y familias.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectModality('virtual')}
                    className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all duration-200 cursor-pointer ${
                      modality === 'virtual'
                        ? 'bg-[#6d9ae3]/10 border-2 border-[#6d9ae3] text-slate-900 shadow-md ring-2 ring-[#6d9ae3]/20'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-[#9d7fe6] text-white shrink-0 mt-0.5 shadow-sm">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 mb-1 flex items-center justify-between">
                        <span>Modalidad Virtual</span>
                        {modality === 'virtual' && <Check className="w-4 h-4 text-[#6d9ae3]" />}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        Atención Online &bull; Acompañamiento a cualquier ciudad de Colombia y familias en el exterior.
                      </p>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* PASO 4: Datos de Contacto & Botón Final a WhatsApp */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-800 tracking-tight">
                    4. Datos de Contacto y Confirmación
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ingresa tus datos para generar el mensaje prellenado a WhatsApp:
                  </p>
                </div>

                {/* Resumen de opciones elegidas */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Edad:</span>
                    <strong className="text-slate-800">
                      {AGE_OPTIONS.find((a) => a.id === selectedAgeId)?.label}
                    </strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Especialista:</span>
                    <strong className="text-[#6d9ae3]">
                      {SPECIALIST_OPTIONS.find((s) => s.id === specialistId)?.name}
                    </strong>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Modalidad:</span>
                    <strong className="text-slate-800">
                      {modality === 'presencial' ? 'Presencial Pereira' : 'Virtual'}
                    </strong>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {selectedAgeId === 'adult' ? 'Tu nombre completo:' : 'Nombre del acudiente (Mamá, Papá o Tutor):'}
                    </label>
                    <TextInput
                      placeholder={selectedAgeId === 'adult' ? 'Ej: Andrés Gómez' : 'Ej: María Fernanda Gómez'}
                      value={parentName}
                      onChange={(e) => setParentName(e.currentTarget.value)}
                      styles={{
                        input: {
                          backgroundColor: '#F8FAFC',
                          borderColor: '#CBD5E1',
                          color: '#0F172A',
                          borderRadius: '0.75rem',
                          fontSize: '0.875rem',
                          '&:focus': {
                            borderColor: '#6d9ae3',
                          },
                        },
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {selectedAgeId === 'adult' ? 'Motivo de consulta o notas (Opcional):' : 'Nombre de tu hijo/a y curso o notas (Opcional):'}
                    </label>
                    <TextInput
                      placeholder={selectedAgeId === 'adult' ? 'Ej: Orientación pedagógica / hábitos de estudio' : 'Ej: Camilo, 8 años - 3° de primaria'}
                      value={childInfo}
                      onChange={(e) => setChildInfo(e.currentTarget.value)}
                      styles={{
                        input: {
                          backgroundColor: '#F8FAFC',
                          borderColor: '#CBD5E1',
                          color: '#0F172A',
                          borderRadius: '0.75rem',
                          fontSize: '0.875rem',
                          '&:focus': {
                            borderColor: '#6d9ae3',
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={handleSendWhatsApp}
                    fullWidth
                    size="lg"
                    radius="xl"
                    leftSection={<MessageCircle className="w-5 h-5 text-white" />}
                    styles={{
                      root: {
                        backgroundColor: '#6d9ae3',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '0.9375rem',
                        height: '3.25rem',
                        boxShadow: '0 10px 25px -5px rgba(109, 154, 227, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        '&:hover': {
                          backgroundColor: '#5a87ce',
                        },
                      },
                    }}
                  >
                    Confirmar y Enviar a WhatsApp
                  </Button>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Se abrirá WhatsApp con el resumen de tu solicitud para coordinar tu cita.
                  </p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Botones de Navegación Inferior (Atrás) */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Atrás</span>
              </button>
            ) : (
              <div />
            )}

            <span className="text-[11px] text-slate-400 font-medium">
              NEUROLER &bull; Neuroeducación Pereira
            </span>
          </div>

        </div>
      </div>
    </Modal>
  );
};
