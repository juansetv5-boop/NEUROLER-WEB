'use client';

import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navigationRoutes } from '@/data/content';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isScrolledOrSubpage = isScrolled || pathname !== '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Navegación Principal: transparente en home inicial, efecto vidrio en subpáginas o al hacer scroll */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolledOrSubpage 
            ? 'bg-[#6d9ae3]/85 backdrop-blur-md border-b border-white/20 shadow-md py-3 sm:py-3.5' 
            : 'bg-transparent border-transparent shadow-none py-4 sm:py-5'
        }`} 
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Oficial de NEUROLER */}
            <NextLink 
              href="/" 
              className="flex items-center shrink-0 group focus:outline-none focus:ring-2 focus:ring-neuroler-teal rounded-lg py-0.5"
              onClick={closeMenu}
            >
              <Image
                src="/logo-neuroler-oficial.svg"
                alt="NEUROLER - Neuroeducación & Aprendizaje"
                width={220}
                height={70}
                className={`${
                  isScrolledOrSubpage 
                    ? 'h-10 sm:h-12 md:h-14' 
                    : 'h-11 sm:h-13 md:h-16'
                } w-auto object-contain transition-all duration-300 drop-shadow-md group-hover:scale-105`}
                priority
              />
            </NextLink>

            {/* Enlaces de Escritorio en Contenedor Glassmorphic */}
            <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
              {navigationRoutes.map((route) => {
                const isActive = pathname === route.href;
                return (
                  <NextLink
                    key={route.href}
                    href={route.href}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'text-white bg-[#F28C4E] font-bold shadow-md border border-white/20' 
                        : 'text-white/90 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    {route.label}
                  </NextLink>
                );
              })}
            </div>

            {/* Botón Hamburguesa Móvil */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleMenu}
                className="p-3 rounded-2xl text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md shadow-md focus:outline-none focus:ring-2 focus:ring-neuroler-teal"
                aria-expanded={isOpen}
                aria-label="Abrir menú de navegación"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="lg:hidden bg-[#6d9ae3]/95 backdrop-blur-2xl border-b border-white/20 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navigationRoutes.map((route) => {
              const isActive = pathname === route.href;
              return (
                <NextLink
                  key={route.href}
                  href={route.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-white bg-[#F28C4E] font-bold border border-white/20 shadow-md' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{route.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </NextLink>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <div className="px-3 py-2 text-center text-xs text-slate-300 font-medium">
              📍 Pereira (Barrio Corales) &bull; Modalidad Presencial y Virtual
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
