import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden bg-gradient-to-br from-[#6d9ae3] via-[#9d7fe6] to-[#e8845e]">
      
      {/* Orbes de luz de fondo para el efecto Glassmorphism */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-neuroler-teal/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
          
          {/* Mascota oficial de NEUROLER */}
          <div className="relative w-48 sm:w-56 h-48 sm:h-56 mx-auto mb-6">
            <Image
              src="/mascota-neuroler-error.svg"
              alt="Mascota NEUROLER"
              width={240}
              height={240}
              className="mx-auto drop-shadow-2xl  object-contain h-full w-full"
              priority
            />
          </div>

          {/* Badge de Error */}
          <span className="inline-block text-xs font-black uppercase tracking-widest text-neuroler-yellow bg-white/10 px-3.5 py-1 rounded-full border border-white/15 mb-3 shadow-sm">
            Error 404
          </span>

          {/* Título Empático */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
            ¡Ups! Esta página se distrajo un poco...
          </h1>

          {/* Subtítulo Cálido */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 font-normal">
            No te preocupes, la ruta que buscas no existe o cambió de lugar. Vamos a llevarte de regreso a un lugar seguro.
          </p>

          {/* Botón CTA Principal al Home */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-neuroler-teal via-[#29ba97] to-neuroler-blue text-white font-bold hover:scale-105 transition-all shadow-lg hover:shadow-glass-glow border border-white/30"
          >
            <Home className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </Link>

        </div>
      </div>
    </main>
  );
}
