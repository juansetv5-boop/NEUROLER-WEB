'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '@mantine/core';

const FAQS = [
  {
    value: 'comprension-lectora',
    question: '¿Por qué mi hijo no comprende lo que lee?',
    answer: 'Cuando la decodificación auditiva y fonológica no está automatizada, el cerebro del niño gasta toda su energía cognitiva intentando pronunciar cada sílaba, quedándose sin recursos mentales para interpretar el significado global. Al entrenar la discriminación auditiva y la memoria de trabajo, la lectura deja de ser un esfuerzo mecánico y la comprensión surge de forma natural.',
  },
  {
    value: 'no-quiere-leer',
    question: '¿Cómo ayudo a un niño que no quiere leer?',
    answer: 'El rechazo a la lectura rara vez es falta de interés o rebeldía; casi siempre es un mecanismo de defensa ante la frustración y el miedo al error. En NEUROLER sustituimos la presión por dinámicas neuroeducativas y multisensoriales que le permiten experimentar pequeños éxitos desde la primera sesión, reconstruyendo su autoestima y devolviéndole el gusto genuino por los libros.',
  },
  {
    value: 'concentracion-clase',
    question: '¿Por qué mi hijo no se puede concentrar en clase?',
    answer: 'La atención sostenida depende directamente del desarrollo de las funciones ejecutivas y del freno inhibitorio (la capacidad neurológica de ignorar ruidos, movimientos y pensamientos distractores). Mediante estimulación neuropsicopedagógica entrenamos estos circuitos para que el estudiante aprenda a autorregularse y mantener el foco en el aula sin sentirse abrumado.',
  },
  {
    value: 'terapia-ocupacional',
    question: 'Mi hijo es muy inquieto, ¿necesita terapia ocupacional?',
    answer: 'La inquietud motriz constante suele indicar que el sistema sensorial (vestibular y propioceptivo) necesita madurar para regular la energía corporal. En nuestro equipo interdisciplinario evaluamos si requiere terapia ocupacional o fisioterapia para integrar el movimiento, modular la postura y facilitar la atención durante el estudio.',
  },
  {
    value: 'diagnostico-dislexia',
    question: '¿Es un método solo para niños con diagnóstico como dislexia o TDAH?',
    answer: 'No. Nuestro acompañamiento está diseñado para cualquier niño o adolescente que enfrente dificultades o frustración con la lectura, la atención o el rendimiento escolar, tenga o no un diagnóstico médico formal. No tratamos etiquetas; entendemos cómo procesa la información cada mente única para brindarle los andamios exactos que necesita.',
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Respuestas claras y sinceras a las dudas más comunes de las familias que nos consultan.
          </p>
        </motion.div>

        {/* Acordeón Mantine con animación de entrada */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                padding: '1.25rem 1.5rem',
                borderRadius: '1.25rem',
              },
              label: {
                color: '#0F172A',
                fontWeight: 700,
                fontSize: '1.05rem',
                lineHeight: 1.4,
              },
              content: {
                padding: '0 1.5rem 1.25rem 1.5rem',
                color: '#475569',
                fontSize: '0.9375rem',
                lineHeight: 1.65,
              },
            }}
          >
            {FAQS.map((faq) => (
              <Accordion.Item key={faq.value} value={faq.value}>
                <Accordion.Control>
                  {faq.question}
                </Accordion.Control>
                <Accordion.Panel>
                  {faq.answer}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
};
