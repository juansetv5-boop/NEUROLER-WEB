'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Inicializar instancia de Lenis con aceleración y amortiguación fluida
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Suavizado para enlaces ancla internos (#id)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (
        anchor &&
        anchor.hash &&
        anchor.origin === window.location.origin &&
        anchor.pathname === window.location.pathname
      ) {
        const el = document.querySelector(anchor.hash);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -80 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  // Al cambiar de ruta, restablecer el scroll arriba de forma inmediata
  useEffect(() => {
    const globalLenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (globalLenis) {
      globalLenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}
