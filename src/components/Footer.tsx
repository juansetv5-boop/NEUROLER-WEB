'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Phone, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { contactData } from '@/data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F9FA] text-slate-700 pt-14 pb-10 border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid de 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-6">
          
          {/* Columna 1: Marca y Propósito (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo-neuroler-oficial.svg"
                  alt="NEUROLER - Neuroeducación & Aprendizaje"
                  width={190}
                  height={55}
                  className="h-10 sm:h-11 w-auto object-contain"
                  priority
                />
              </Link>
              
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6 max-w-sm">
                Acompañamos a tu hijo a descubrir cómo aprende su cerebro, devolviéndole la seguridad y la tranquilidad a tu hogar.
              </p>
            </div>

            {/* Canales de Contacto Directo */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <a 
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-[#25D366] font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {contactData.phoneDisplay}</span>
              </a>

              <a 
                href={`tel:${contactData.phone}`}
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#6d9ae3] shrink-0" />
                <span>{contactData.phoneDisplay}</span>
              </a>

              <a 
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-[#9d7fe6] shrink-0" />
                <span>{contactData.email}</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Padres
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Colegios
                </Link>
              </li>
              <li>
                <Link href="/proceso" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Cómo trabajamos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                  Nuestro Equipo
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ubicación y Horarios (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Sede Pereira
            </h4>
            
            <div className="space-y-3.5 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F28C4E] shrink-0 mt-0.5" />
                <span>Cra. 23 # 82-57, Pereira, Risaralda</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs sm:text-sm">
                  <p>Lunes a Viernes: 8:00 AM – 6:00 PM</p>
                  <p className="text-slate-500">Atención presencial y virtual</p>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Cra.+23+%23+82-57,+Pereira,+Risaralda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6d9ae3] hover:text-[#527fc8] transition-colors"
                >
                  <span>Ver ubicación en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna 4: Mapa Embebido Minimalista (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Ubicación
            </h4>
            
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs h-[140px] w-full relative bg-slate-100">
              <iframe
                title="Mapa Ubicación NEUROLER Pereira Cra. 23 # 82-57"
                src="https://maps.google.com/maps?q=Cra.+23+%23+82-57,+Pereira,+Risaralda&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(0.95) saturate(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

        {/* Barra Inferior (Legal y Derechos) */}
        <div className="border-t border-slate-200/60 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NEUROLER. Todos los derechos reservados.</p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <Link href="/contacto" className="hover:text-slate-800 transition-colors">
              Política de Privacidad
            </Link>
            <span>·</span>
            <Link href="/contacto" className="hover:text-slate-800 transition-colors">
              Términos y Condiciones
            </Link>
            <span>·</span>
            <Link href="/contacto" className="hover:text-slate-800 transition-colors">
              Tratamiento de Datos Personales
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
