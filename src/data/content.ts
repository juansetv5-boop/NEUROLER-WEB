import { NavRoute, SolutionItem, ProcessStep, SpecialistHighlight, ContactInfo } from '@/types';

export const navigationRoutes: NavRoute[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Metodología', href: '/proceso' },
  { label: 'Contacto', href: '/contacto' },
];

export const contactData: ContactInfo = {
  phone: '+573116340453',
  phoneDisplay: '+57 311 634 0453',
  whatsappUrl: 'https://wa.me/573116340453?text=Hola%20Leidy%20Roc%C3%ADo%20y%20equipo%20NEUROLER,%20deseo%20agendar%20la%20orientaci%C3%B3n%20gratuita%20de%2015%20minutos%20para%20mi%20hijo/a.',
  email: 'neuroler.oficial@gmail.com',
  city: 'Pereira, Risaralda, Colombia',
  neighborhood: 'Barrio Corales',
  addressDetails: 'Cra. 23 # 82-57, Pereira, Risaralda - Espacio tranquilo, cálido y adaptado para el bienestar de tu familia.',
  schedules: {
    weekdays: 'Lunes a Viernes: 8:00 AM - 6:30 PM',
    saturdays: 'Sábados: 8:00 AM - 1:00 PM',
  },
  modalities: [
    'Presencial en Pereira (Barrio Corales)',
    'Virtual (Colombia y Familias en el Exterior)'
  ]
};

export const heroData = {
  headline: '¿A tu hijo le cuesta concentrarse, leer o seguir el ritmo en el colegio?',
  subheadline: 'Ayudamos a niños y adolescentes a fortalecer la atención, la lectura, la comprensión y el lenguaje para que aprendan con seguridad y confianza.',
  badges: [
    { text: '+24 años de experiencia', highlight: true },
    { text: 'Atención en Pereira (Barrio Corales) y Virtual', highlight: false },
    { text: 'Enfoque empático y sin etiquetas', highlight: false }
  ],
  ctaPrimary: {
    text: 'Agendar Orientación Gratuita 15 min',
    href: '/contacto',
  },
  ctaSecondary: {
    text: 'Ver nuestros servicios',
    href: '/servicios',
  },
  trustPoints: [
    'Acompañamiento 100% personalizado',
    'Integración activa familia y colegio',
    'Metodología lúdica basada en neurociencia'
  ]
};

export const solutionsData = {
  sectionEyebrow: '¿En qué te podemos ayudar?',
  sectionTitle: 'Acompañamiento especializado adaptado a cada etapa de tu hijo',
  sectionSubtitle: 'Identificamos la raíz de las dificultades de aprendizaje para brindar herramientas prácticas que devuelvan la motivación y la tranquilidad al hogar.',
  items: [
    {
      id: 'lectura-escritura',
      iconName: 'BookOpen' as const,
      title: 'Dificultades en Lectura y Escritura',
      badge: 'Fluidez y Comprensión',
      accentColor: 'border-neuroler-blue/40 text-neuroler-teal',
      tagColor: 'text-neuroler-teal bg-neuroler-teal/10',
      shortDescription: 'Ayudamos a superar tropiezos con la decodificación, comprensión lectora, dislexia y producción de textos.',
      signs: [
        'Confusión u omisión de letras o sílabas',
        'Lectura lenta o silábica sin entender el texto',
        'Resistencia o frustración con las tareas de lectura'
      ],
      howWeHelp: 'Entrenamos rutas fonológicas y visuales mediante dinámicas multisensoriales para que leer sea fluido y placentero.',
      href: '/servicios#lectura-escritura'
    },
    {
      id: 'atencion-concentracion',
      iconName: 'Focus' as const,
      title: 'Falta de Atención y Concentración',
      badge: 'Enfoque y TDAH',
      accentColor: 'border-neuroler-teal/40 text-neuroler-teal',
      tagColor: 'text-neuroler-teal bg-neuroler-teal/10',
      shortDescription: 'Estrategias de autorregulación y estimulación cognitiva para niños que se dispersan fácilmente o con diagnóstico TDA/TDAH.',
      signs: [
        'Olvidos frecuentes de materiales o instrucciones',
        'Se distrae con facilidad ante cualquier estímulo',
        'Dificultad para terminar actividades a tiempo'
      ],
      howWeHelp: 'Desarrollamos el control inhibitorio, la atención sostenida y rutinas de autocontrol sin sobrecargar al estudiante.',
      href: '/servicios#atencion-concentracion'
    },
    {
      id: 'lenguaje-comunicacion',
      iconName: 'MessageCircle' as const,
      title: 'Lenguaje y Comunicación',
      badge: 'Expresión y Vocabulario',
      accentColor: 'border-neuroler-purple/40 text-neuroler-purple',
      tagColor: 'text-neuroler-purple bg-neuroler-purple/10',
      shortDescription: 'Fortalecimiento de la articulación, vocabulario, estructura gramatical y expresión verbal fluida y segura.',
      signs: [
        'Dificultad para pronunciar ciertos sonidos o palabras',
        'Le cuesta organizar ideas para explicarse claramente',
        'Vocabulario reducido para su edad cronológica'
      ],
      howWeHelp: 'Estimulamos las habilidades comunicativas y pragmáticas para que participe en clase y socialice con confianza.',
      href: '/servicios#lenguaje-comunicacion'
    },
    {
      id: 'funciones-ejecutivas',
      iconName: 'Brain' as const,
      title: 'Memoria y Funciones Ejecutivas',
      badge: 'Organización y Autonomía',
      accentColor: 'border-neuroler-green/40 text-neuroler-lightgreen',
      tagColor: 'text-neuroler-lightgreen bg-neuroler-green/10',
      shortDescription: 'Herramientas para planificar tareas, memorizar conceptos clave, gestionar el tiempo y ganar independencia académica.',
      signs: [
        'Dependencia excesiva de los padres para iniciar el estudio',
        'Desorganización con cuadernos, fechas y prioridades',
        'Olvidos rápidos de temas que ya habían repasado'
      ],
      howWeHelp: 'Entrenamos la memoria de trabajo, la flexibilidad cognitiva y métodos prácticos de estudio adaptados a su ritmo.',
      href: '/servicios#funciones-ejecutivas'
    }
  ]
};

export const aboutPreviewData = {
  eyebrow: 'Sobre la Especialista y Nuestro Enfoque',
  title: 'Más que una terapia, una alianza cercana entre Familia, Colegio y Especialista',
  name: 'Lic. Leidy Rocío Adrada Varona',
  role: 'Licenciada en Educación & Neuropsicóloga Educativa',
  experience: '+24 años transformando vidas en Pereira y Colombia',
  quote: '"No trabajamos con etiquetas que limiten al niño; descubrimos su potencial único y le brindamos los andamios necesarios para que vuelva a creer en sí mismo."',
  descriptionParagraphs: [
    'Con más de 24 años de trayectoria guiando a familias, niños y adolescentes en Pereira, la Lic. Leidy Rocío Adrada Varona ha consolidado un modelo de neuroeducación cálido, científico y profundamente humano.',
    'Creemos firmemente que el progreso escolar no se logra aislando al estudiante en un consultorio frío, sino tejiendo un puente armónico con los padres en casa y los docentes en el aula escolar.'
  ],
  pillars: [
    {
      title: 'Mirada Integral (Sin Etiquetas)',
      desc: 'Comprendemos la mente infantil desde sus fortalezas y emociones, nunca encasillando.',
      accent: 'border-neuroler-purple/40 bg-neuroler-purple/10'
    },
    {
      title: 'Tríada Colaborativa',
      desc: 'Articulamos pautas claras para el hogar y recomendaciones adaptativas para el colegio.',
      accent: 'border-neuroler-teal/40 bg-neuroler-teal/10'
    },
    {
      title: 'Metodología Científica y Lúdica',
      desc: 'Ejercicios de neuroplasticidad presentados como retos motivantes y significativos.',
      accent: 'border-neuroler-green/40 bg-neuroler-green/10'
    }
  ],
  stats: [
    { number: '+24', label: 'Años de Trayectoria', desc: 'Experiencia pedagógica y clínica' },
    { number: '+1.200', label: 'Familias Apoyadas', desc: 'Procesos exitosos y duraderos' },
    { number: '100%', label: 'Personalizado', desc: 'Planes únicos para cada niño' }
  ],
  cta: {
    text: 'Conoce más sobre nuestra historia y equipo',
    href: '/nosotros'
  }
};

export const processQuickData = {
  eyebrow: 'Metodología Paso a Paso',
  title: 'Un camino claro, transparente y sin complicaciones',
  subtitle: 'Desde el primer contacto sabrás exactamente cómo acompañaremos a tu hijo hacia su autonomía y éxito escolar.',
  steps: [
    {
      stepNumber: 1,
      title: 'Contacto Inicial',
      tagline: 'Escucha sensible',
      shortDescription: 'Escríbenos o déjanos tus datos. Cuéntanos qué inquietud tienes con tu hijo sin ningún compromiso.',
      duration: 'Inmediato'
    },
    {
      stepNumber: 2,
      title: 'Charla Gratuita 15 Min',
      tagline: 'Orientación sin costo',
      shortDescription: 'Videollamada breve con la especialista para resolver tus primeras dudas y definir si nuestro enfoque es el indicado.',
      duration: '15 minutos',
      isHighlight: true
    },
    {
      stepNumber: 3,
      title: 'Entrevista y Valoración',
      tagline: 'Diagnóstico pedagógico',
      shortDescription: 'Sesión integral para evaluar habilidades cognitivas, lectura, atención y estilo de aprendizaje del estudiante.',
      duration: 'Sesión inicial'
    },
    {
      stepNumber: 4,
      title: 'Plan de Entrenamiento',
      tagline: 'Estrategias lúdicas',
      shortDescription: 'Sesiones semanales con ejercicios de neuroplasticidad, técnicas de estudio y pautas para aplicar en casa.',
      duration: 'Continuo'
    },
    {
      stepNumber: 5,
      title: 'Seguimiento Permanente',
      tagline: 'Alianza con el colegio',
      shortDescription: 'Informes periódicos de evolución, reuniones con orientadores escolares y fortalecimiento de la autonomía.',
      duration: 'Monitoreo constante'
    }
  ],
  cta: {
    text: 'Ver el detalle completo de nuestro proceso',
    href: '/proceso'
  }
};

export const ctaBannerData = {
  title: '¿Listo para que tu hijo deje de temerle a la lectura?',
  subtitle: 'No permitas que la frustración apague su potencial. Da el primer paso hoy mismo hacia un aprendizaje tranquilo y con sentido.',
  benefitPills: [
    'Orientación inicial 100% personalizada',
    'Sin etiquetas ni trámites complejos',
    'Atención presencial en Pereira y virtual'
  ],
  buttonText: 'Hablar con Leidy por WhatsApp',
  buttonHref: '/contacto',
  footnote: 'Te responderemos a la mayor brevedad para coordinar la evaluación inicial.'
};

export const footerData = {
  tagline: 'Neuroeducación cálida y especializada para potenciar el aprendizaje y la confianza de tu hijo.',
  copyright: '© 2026 NEUROLER. Todos los derechos reservados.',
  specialistTitle: 'Lic. Leidy Rocío Adrada Varona | Pereira, Colombia'
};
