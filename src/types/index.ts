export interface NavRoute {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SolutionItem {
  id: string;
  iconName: 'BookOpen' | 'Focus' | 'MessageCircle' | 'Brain' | 'Sparkles' | 'Lightbulb';
  title: string;
  shortDescription: string;
  signs: string[];
  howWeHelp: string;
  badge: string;
  href: string;
  accentColor?: string;
  tagColor?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  shortDescription: string;
  tagline: string;
  duration?: string;
  isHighlight?: boolean;
  accentColor?: string;
}

export interface SpecialistHighlight {
  number: string;
  label: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  email: string;
  city: string;
  neighborhood: string;
  addressDetails: string;
  schedules: {
    weekdays: string;
    saturdays: string;
  };
  modalities: string[];
}
