import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contacto y Ubicación | NEUROLER Pereira',
  description: 'Contáctanos para agendar una valoración o resolver tus dudas. Estamos en el Barrio Corales en Pereira (Cra. 23 # 82-57) y atendemos en modalidad presencial y virtual.',
  openGraph: {
    title: 'Contacto | NEUROLER Pereira',
    description: 'Atención presencial en Pereira y virtual para toda Colombia. Resuelve las dificultades de aprendizaje de tu hijo con amor y ciencia.',
  },
};

export default function ContactoPage() {
  return <ContactClient />;
}
