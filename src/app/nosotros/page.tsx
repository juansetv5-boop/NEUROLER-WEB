import type { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | NEUROLER - Neuroeducación en Pereira',
  description: 'Conoce el propósito, método y trayectoria de NEUROLER en Pereira. Estimulación neurolingüística sin etiquetas frías y en equipo con familias y colegios.',
  openGraph: {
    title: 'Sobre Nosotros | NEUROLER Pereira',
    description: 'Cada cerebro tiene su mapa. Nosotros lo seguimos. Estimulación neurocognitiva integral en Pereira.',
  },
};

export default function NosotrosPage() {
  return <AboutClient />;
}
