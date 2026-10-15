import React from 'react';
import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { ValuePropSection } from '@/components/ValuePropSection';
import { AuditoryDifferentiator } from '@/components/AuditoryDifferentiator';
import { Team } from '@/components/Team';
import { StatsSocialProof } from '@/components/StatsSocialProof';
import { AlliancesSection } from '@/components/AlliancesSection';
import { FAQSection } from '@/components/FAQSection';
import { StorySection } from '@/components/StorySection';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'NEUROLER | Neuroeducación y Dificultades de Aprendizaje en Pereira',
  description: 'Acompañamiento especializado para niños y adolescentes con dificultades de lectura, atención, concentración, lenguaje y funciones ejecutivas. Leidy Rocío Adrada Varona (+24 años de experiencia en Pereira).',
  keywords: [
    'neuroeducación Pereira',
    'dificultades de aprendizaje Pereira',
    'neuropsicología infantil Pereira',
    'problemas de atención y concentración niños',
    'dislexia Pereira',
    'TDAH Pereira',
    'Leidy Rocio Adrada Varona',
    'apoyo escolar Pereira Barrio Corales'
  ],
  openGraph: {
    title: 'NEUROLER | Neuroeducación y Dificultades de Aprendizaje en Pereira',
    description: 'Ayudamos a niños y adolescentes a fortalecer la atención, lectura y lenguaje para que aprendan con seguridad y confianza.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'NEUROLER',
  }
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. HERO INTACTO (Selector de pestañas, fondo dinámico, mascota y botones) */}
      <Hero />

      {/* 2-10. Contenido vertical del Hero hacia abajo (Fondo general en blanco hueso #F8F9FA) */}
      <div className="bg-[#F8F9FA] text-slate-800 relative z-10 transition-colors duration-300">
        
        {/* 1. EL PROBLEMA (Empatía y Validación) */}
        <ProblemSection />

        {/* 2. PROPUESTA DE VALOR (4 Bloques claros) */}
        <ValuePropSection />

        {/* 3. DIFERENCIADOR CLAVE (La lectura empieza en el oído, no en el ojo) */}
        <AuditoryDifferentiator />

        {/* 4. MÁS ALLÁ DE LA LECTURA (Equipo Interdisciplinario Propio - Carrusel 3D) */}
        <Team />

        {/* 5. PRUEBA SOCIAL Y CIFRAS (+1.000 niños, 20 años aula, 6 años magíster) */}
        <StatsSocialProof />

        {/* 6. SECCIÓN COLEGIOS (Alianzas institucionales, logos y CTA WhatsApp) */}
        <AlliancesSection />

        {/* 7. PREGUNTAS FRECUENTES (FAQ de objeciones reales) */}
        <FAQSection />

        {/* 8. HISTORIA DE LEIDY (Voz personal y cercana) */}
        <StorySection />

        {/* 9. CTA FINAL DE CIERRE (¿Listo para que tu hijo deje de temerle a la lectura?) */}
        <CTABanner />

      </div>
    </main>
  );
}
