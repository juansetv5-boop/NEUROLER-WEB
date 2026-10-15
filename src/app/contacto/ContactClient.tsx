'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Laptop, 
  School, 
  CalendarCheck, 
  Send, 
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { contactData } from '@/data/content';
import { useBookingModal, ServiceType } from '@/context/BookingModalContext';
import { CTABanner } from '@/components/CTABanner';

export const ContactClient: React.FC = () => {
  const { openBookingModal } = useBookingModal();

  // Form state
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [serviceNeed, setServiceNeed] = useState<ServiceType>('neuroeducacion');
  const [notes, setNotes] = useState('');

  // Handle direct WhatsApp submit with structured message
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabels: Record<ServiceType, string> = {
      neuroeducacion: 'Valoración Neurocognitiva / Neuroeducación',
      lectura: 'Dificultades en Lectura y Comprensión',
      atencion: 'Atención, Concentración y Funciones Ejecutivas',
    };

    let msg = `Hola Leidy Rocío y equipo NEUROLER,\n\n`;
    msg += `Mi nombre es ${parentName || 'un padre de familia'}`;
    if (phone) msg += ` (Tel: ${phone})`;
    msg += `.\n`;

    if (childName || childAge) {
      msg += `Deseo consultar por mi hijo/a ${childName || ''} de ${childAge ? `${childAge} años` : ''}.\n`;
    }

    msg += `Área de mayor interés: ${serviceLabels[serviceNeed] || 'Orientación general'}.\n`;

    if (notes) {
      msg += `Detalles o inquietudes: ${notes}\n`;
    }

    msg += `\n¿Podrían indicarme disponibilidad para una orientación o valoración? Gracias.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/573127930898?text=${encoded}`, '_blank');
  };

  const handleB2BWhatsApp = () => {
    const msg = encodeURIComponent(
      'Hola Leidy Rocío y equipo NEUROLER, soy directivo/orientador escolar y deseo información sobre alianzas institucionales, remisión de estudiantes o talleres para docentes.'
    );
    window.open(`https://wa.me/573127930898?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 pt-28 sm:pt-36">
      
      {/* 1. ENCABEZADO DE PÁGINA (Sin tags) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14 sm:mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-5"
        >
          Contacto y Ubicación
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Estamos listos para escuchar la historia de tu hijo y acompañar a tu familia hacia la tranquilidad y el éxito escolar.
        </motion.p>
      </section>

      {/* 2. GRID PRINCIPAL: Canales Directos (Izq) vs Formulario de Contacto (Der) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Columna Izquierda: Tarjetas de Información Directa */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Tarjeta Destacada WhatsApp */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border-2 border-[#25D366]/30 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 fill-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    WhatsApp Oficial
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Respuesta rápida y directa
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Escríbenos para resolver dudas iniciales, consultar disponibilidad o solicitar la valoración de tu hijo.
              </p>

              <a
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chatear al +57 312 793 0898</span>
              </a>
            </motion.div>

            {/* Teléfono y Correo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5"
            >
              {/* Llamada Directa */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E4A7A] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    Llamadas Directas
                  </div>
                  <a 
                    href={`tel:${contactData.phone}`} 
                    className="text-base font-bold text-slate-900 hover:text-[#1E4A7A] transition-colors"
                  >
                    {contactData.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Atención telefónica en jornada de consulta
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Correo Electrónico */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F28C4E] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    Correo Electrónico
                  </div>
                  <a 
                    href={`mailto:${contactData.email}`} 
                    className="text-base font-bold text-slate-900 hover:text-[#F28C4E] transition-colors"
                  >
                    {contactData.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Envío de informes escolares y solicitudes formales
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sede Presencial & Horarios */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#5B3794] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    Sede Presencial
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Cra. 23 # 82-57, Barrio Corales
                  </div>
                  <div className="text-xs text-slate-500">
                    Pereira, Risaralda, Colombia
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F28C4E] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    Horario de Atención
                  </div>
                  <p className="text-xs text-slate-700 font-medium">
                    {contactData.schedules.weekdays}
                  </p>
                  <p className="text-xs text-slate-700 font-medium">
                    {contactData.schedules.saturdays}
                  </p>
                </div>
              </div>

              {/* Modalidad Virtual */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    Atención Virtual
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">
                    Acompañamiento a distancia para familias en otras ciudades de Colombia y en el exterior.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Columna Derecha: Formulario Rápido y Acciones */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-10 shadow-xs"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2">
                Escríbenos sobre tu caso
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Completa este formulario breve y te contactaremos por WhatsApp o llamada para orientarte sin compromiso.
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                
                {/* Nombre del Acudiente */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Tu nombre (Padre, Madre o Acudiente) *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Ej. Carolina Gómez"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#1E4A7A] focus:bg-white transition-all"
                  />
                </div>

                {/* Teléfono / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Teléfono o WhatsApp de contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 312 000 0000"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#1E4A7A] focus:bg-white transition-all"
                  />
                </div>

                {/* Nombre y Edad del Hijo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nombre de tu hijo/a (Opcional)
                    </label>
                    <input
                      type="text"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="Ej. Mateo"
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#1E4A7A] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Edad
                    </label>
                    <input
                      type="text"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      placeholder="Ej. 7 años"
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#1E4A7A] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Área de Interés */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    ¿Qué dificultad o área deseas consultar? *
                  </label>
                  <select
                    value={serviceNeed}
                    onChange={(e) => setServiceNeed(e.target.value as ServiceType)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#1E4A7A] focus:bg-white transition-all"
                  >
                    <option value="neuroeducacion">Valoración Integral / Neuroeducación (Recomendado)</option>
                    <option value="lectura">Lectoescritura, dislexia o comprensión lectora</option>
                    <option value="atencion">Atención sostenida, concentración y tareas</option>
                  </select>
                </div>

                {/* Mensaje o inquietud */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    ¿Qué situación o preocupación notas hoy? (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Cuéntanos brevemente qué notas en el colegio, con las tareas o en casa..."
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#1E4A7A] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Botones de Envío y Agendamiento */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-white" />
                    <span>Enviar consulta directa por WhatsApp</span>
                  </button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="flex-shrink mx-4 text-xs font-medium text-slate-400">o también puedes</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openBookingModal({ service: serviceNeed })}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#F28C4E] hover:bg-[#df7738] text-white font-bold text-sm shadow-xs hover:shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Abrir Asistente de Agendamiento Online</span>
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Tus datos son 100% confidenciales. No compartimos tu información.</span>
                </div>

              </form>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. MAPA Y CÓMO LLEGAR (Sede Barrio Corales, Pereira) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Información de Ubicación y Puntos de Referencia */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 text-[#1E4A7A] font-bold text-xs uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>Cómo Llegar a Nuestra Sede</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Un entorno seguro, silencioso y tranquilo
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Ubicados en el <strong>Barrio Corales de Pereira</strong>, en un sector residencial cálido y de fácil acceso que evita el estrés del tráfico y las batas de consultorio clínico.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1E4A7A] mt-1.5 shrink-0" />
                  <span>A pocos minutos de la Avenida de las Américas y la Avenida Sur.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#F28C4E] mt-1.5 shrink-0" />
                  <span>Zona residencial con facilidad para parquear sin complicaciones.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#059669] mt-1.5 shrink-0" />
                  <span>Espacio adaptado sensorialmente para que los niños se sientan en confianza.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Cra.+23+%23+82-57,+Pereira,+Risaralda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#1E4A7A]" />
                  <span>Abrir en Google Maps</span>
                </a>
              </div>
            </div>

            {/* Mapa Interactivo Incrustado */}
            <div className="lg:col-span-7 h-72 sm:h-88 lg:h-96 rounded-2xl overflow-hidden border border-slate-200 relative">
              <iframe
                title="Ubicación NEUROLER Pereira - Barrio Corales"
                src="https://maps.google.com/maps?q=Barrio+Corales+Pereira+Risaralda+Colombia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>
        </motion.div>
      </section>

      {/* 4. CANAL ESPECIAL PARA COLEGIOS Y ORIENTADORES (B2B) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-[#1E4A7A] font-bold text-xs uppercase tracking-wider mb-2">
              <School className="w-4.5 h-4.5" />
              <span>Para Rectores, Orientadores y Docentes de Pereira</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
              Línea de Alianzas Institucionales y Remisiones
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Si perteneces a una institución educativa y deseas coordinar remisiones de estudiantes, pautas de aula o capacitaciones en neuroeducación para tu cuerpo docente, comunícate directamente con nuestra dirección.
            </p>
          </div>

          <button
            type="button"
            onClick={handleB2BWhatsApp}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#1E4A7A] hover:bg-[#153457] text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
          >
            <School className="w-5 h-5 text-white" />
            <span>Contacto para Colegios</span>
          </button>
        </motion.div>
      </section>

      {/* 5. CTA BANNER FINAL (Reutilizado idéntico del Home) */}
      <CTABanner />

    </div>
  );
};
