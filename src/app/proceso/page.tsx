import type { Metadata } from 'next';
import { ProcessClient } from './ProcessClient';

export const metadata: Metadata = {
  title: 'Cómo Trabajamos | NEUROLER - Neuroeducación en Pereira',
  description: 'Conoce el viaje de transformación en NEUROLER: desde la valoración sin etiquetas y la estimulación auditiva hasta la articulación con el colegio y el hogar en Pereira.',
  openGraph: {
    title: 'Cómo Trabajamos | NEUROLER Pereira',
    description: 'El camino de tu hijo en NEUROLER: descubrimos cómo aprende su cerebro y lo acompañamos paso a paso con amor y ciencia.',
  },
};

export default function ProcesoPage() {
  return <ProcessClient />;
}
