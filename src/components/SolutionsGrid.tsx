'use client';

import React from 'react';
import { TeamSection } from './TeamSection';
import { AboutFocusSection } from './AboutFocusSection';

export const SolutionsGrid: React.FC = () => {
  return (
    <>
      {/* Sección 2: Nuestro Equipo / Colaboradores */}
      <TeamSection />

      {/* Sección 3: Sobre la Especialista y Nuestro Enfoque */}
      <AboutFocusSection />
    </>
  );
};
