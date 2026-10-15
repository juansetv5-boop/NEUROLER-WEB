'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Focus, 
  MessageCircle, 
  Brain, 
  Sparkles, 
  Lightbulb, 
  ArrowRight
} from 'lucide-react';
import { SolutionItem } from '@/types';

interface ServiceCardProps {
  item: SolutionItem;
}

const iconMap = {
  BookOpen: BookOpen,
  Focus: Focus,
  MessageCircle: MessageCircle,
  Brain: Brain,
  Sparkles: Sparkles,
  Lightbulb: Lightbulb,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const IconComponent = iconMap[item.iconName] || Brain;

  return (
    <div className="group relative bg-white/[0.12] backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/20 shadow-2xl hover:bg-white/[0.18] hover:border-white/40 hover:shadow-glass-glow-purple transition-all duration-300 flex flex-col justify-between hover:-translate-y-2">
      
      {/* Resplandor decorativo */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

      <div className="relative z-10">
        
        {/* Icono + Badge */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="w-13 h-13 p-3 rounded-2xl bg-white/[0.12] shadow-xs border border-white/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <IconComponent className="w-7 h-7 text-white group-hover:text-neuroler-yellow transition-colors" />
          </div>
          
          <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-white/[0.1] backdrop-blur-sm border border-white/20 text-white/90 shadow-2xs">
            {item.badge}
          </span>
        </div>

        {/* Título */}
        <h3 className="text-xl font-extrabold text-white group-hover:text-neuroler-yellow transition-colors mb-3 leading-snug">
          {item.title}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-white/75 leading-relaxed mb-5">
          {item.shortDescription}
        </p>
      </div>

      {/* Enlace a Servicios */}
      <div className="pt-4 border-t border-white/15 mt-2 relative z-10">
        <Link
          href={item.href}
          className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-neuroler-yellow transition-colors"
        >
          <span>Conocer cómo lo trabajamos</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};
