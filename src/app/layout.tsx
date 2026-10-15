import type { Metadata } from 'next';
import '@mantine/core/styles.css';
import './globals.css';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookingModalProvider } from '@/context/BookingModalContext';
import { BookingModal } from '@/components/BookingModal';
import { SmoothScroll } from '@/components/SmoothScroll';

import { JsonLdSchema } from '@/components/JsonLdSchema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neuroler.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NEUROLER | Neuroeducación y Dificultades de Aprendizaje en Pereira',
    template: '%s | NEUROLER'
  },
  description: 'Acompañamiento cálido y especializado para niños y adolescentes en dificultades de aprendizaje, lectura, atención y funciones ejecutivas en Pereira, Colombia.',
  authors: [{ name: 'Leidy Rocío Adrada Varona' }],
  creator: 'NEUROLER',
  publisher: 'NEUROLER',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'NEUROLER',
    title: 'NEUROLER | Neuroeducación y Dificultades de Aprendizaje en Pereira',
    description: 'Acompañamiento especializado para niños y adolescentes en lectura, atención y funciones ejecutivas en Pereira. Lic. Leidy Rocío Adrada.',
    images: [
      {
        url: '/kevin-vargas.webp',
        width: 1200,
        height: 630,
        alt: 'NEUROLER - Neuroeducación y Dificultades de Aprendizaje',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEUROLER | Neuroeducación y Dificultades de Aprendizaje en Pereira',
    description: 'Acompañamiento cálido y especializado para niños y adolescentes en Pereira.',
    images: ['/kevin-vargas.webp'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const theme = createTheme({
  primaryColor: 'orange',
  fontFamily: 'var(--font-sans)',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-brand-200 selection:text-brand-900">
        <JsonLdSchema />
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <BookingModalProvider>
            {/* Controlador de scroll suave con clase Lenis */}
            <SmoothScroll />

            {/* Barra de navegación global */}
            <Navbar />

            {/* Contenido dinámico */}
            <div className="flex-grow">
              {children}
            </div>

            {/* Pie de página global */}
            <Footer />

            {/* Modal global de agendamiento */}
            <BookingModal />
          </BookingModalProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
