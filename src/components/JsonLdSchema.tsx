import React from 'react';
import { contactData } from '@/data/content';

export const JsonLdSchema: React.FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neuroler.com';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Entidad Negocio / Organización Educativa Local
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': `${baseUrl}/#organization`,
        name: 'NEUROLER',
        alternateName: 'NEUROLER Pereira - Centro de Neuroeducación',
        url: baseUrl,
        logo: `${baseUrl}/logo-neuroler-oficial.svg`,
        image: `${baseUrl}/kevin-vargas.webp`,
        description:
          'Acompañamiento especializado para niños y adolescentes en dificultades de aprendizaje, lectura, atención, concentración y funciones ejecutivas en Pereira, Colombia.',
        email: contactData.email,
        telephone: contactData.phone,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Cra. 23 # 82-57, Barrio Corales',
          addressLocality: 'Pereira',
          addressRegion: 'Risaralda',
          postalCode: '660001',
          addressCountry: 'CO',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '4.8087',
          longitude: '-75.7360',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '08:00',
            closes: '13:00',
          },
        ],
        founder: {
          '@type': 'Person',
          name: 'Leidy Rocío Adrada Varona',
          jobTitle: 'Especialista en Neuroeducación y Dificultades de Aprendizaje',
          description:
            'Licenciada con más de 24 años de experiencia acompañando a niños y familias en el desarrollo de lectura, atención y funciones ejecutivas.',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Pereira',
          },
          {
            '@type': 'Country',
            name: 'Colombia',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios de Neuroeducación y Acompañamiento Escolar',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Superación de Dificultades de Lectura y Comprensión',
                description:
                  'Acompañamiento para automatizar la decodificación auditivo-fonológica y despertar la fluidez y comprensión natural.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Entrenamiento en Atención, Concentración y Funciones Ejecutivas',
                description:
                  'Fortalecimiento de la memoria de trabajo, freno inhibitorio y autorregulación escolar para niños con o sin TDAH.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Estimulación del Lenguaje y Neurocomunicación',
                description:
                  'Intervención cálida en articulación, fluidez léxica y comunicación oral y escrita.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Alianzas y Capacitación Pedagógica para Colegios',
                description:
                  'Pautas adaptativas para el aula y detección temprana en equipo con orientadores y docentes.',
              },
            },
          ],
        },
      },
      // 2. Schema de Preguntas Frecuentes (FAQPage) para fragmentos enriquecidos en Google e IA
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Por qué mi hijo no comprende lo que lee?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cuando la decodificación auditiva y fonológica no está automatizada, el cerebro del niño gasta toda su energía cognitiva intentando pronunciar cada sílaba, quedándose sin recursos para interpretar el significado. Entrenar la discriminación auditiva y la memoria de trabajo hace que la comprensión surja naturalmente.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo ayudo a un niño que no quiere leer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El rechazo suele ser un mecanismo de defensa ante la frustración. En NEUROLER sustituimos la presión por dinámicas neuroeducativas y multisensoriales que le permiten experimentar pequeños éxitos desde la primera sesión, reconstruyendo su autoestima.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Por qué mi hijo no se puede concentrar en clase?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La atención sostenida depende del desarrollo de las funciones ejecutivas y del freno inhibitorio. Mediante estimulación neuropsicopedagógica entrenamos estos circuitos para que el estudiante aprenda a autorregularse y mantener el foco.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Es un método solo para niños con diagnóstico como dislexia o TDAH?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Nuestro acompañamiento está diseñado para cualquier niño o adolescente que enfrente dificultades o frustración escolar, tenga o no un diagnóstico médico formal.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
