import type { Metadata } from 'next';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = {
  title: 'Nuestras Áreas de Servicio | NEUROLER - Neuroeducación en Pereira',
  description: 'Conoce nuestras áreas de acompañamiento especializado: lectura, escritura, funciones ejecutivas, neuroeducación y programas para colegios en Pereira.',
  openGraph: {
    title: 'Nuestras Áreas de Servicio | NEUROLER Pereira',
    description: 'Acompañamiento especializado a su ritmo y desde cómo aprende su cerebro. Pereira, Risaralda.',
  },
};

export default function ServiciosPage() {
  return <ServicesClient />;
}
