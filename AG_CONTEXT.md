# CONTEXTO DEL PROYECTO NEUROLER

## 1. Naturaleza y Enfoque del Proyecto
- **Propósito:** Núcleo digital de NEUROLER (Neuroeducación y acompañamiento pedagógico).
- **Referencia Visual Directa:** ammare.co (Hero con gradiente azul, pestañas en cápsula, tarjetas Glassmorphic y mascota flotante).
- **Regla de Componentes UI:** REGLA MANTINE UI OBLIGATORIA. Utilizar componentes nativos de Mantine UI (`SegmentedControl`, `Tabs`, `Card`, `Badge`, `Button`, `Carousel`) en lugar de maquetarlos desde cero con HTML/Tailwind puro.

## 2. Paleta de Colores Oficial
- **Fondo Unificado (Gradiente):** `bg-gradient-to-b from-[#1E4A7A] via-[#183B61] to-[#0F2640]`
- **Naranja Oficial:** `#F28C4E` (CTAs y opción activa de SegmentedControl)
- **Texto:** `#FFFFFF`

## 3. Guía de Uso de Mantine UI
- **Pestañas del Hero / Filtros:** Usar `SegmentedControl` de `@mantine/core` con `radius="xl"`, usando `#F28C4E` para la opción activa y fondo translúcido.
- **Mascota (`mark-pet`):** Debe flotar libremente sobre el fondo gradiente sin contenedores cuadrados alrededor.
- **Tarjetas:** Utilizar `Paper` o `Card` de Mantine con estilos Glassmorphic (`bg-white/10`, `backdrop-blur-md`, `border-white/20`).

## 4. Tech Stack
- **Framework:** Next.js (App Router) + Mantine UI (`@mantine/core`) + Tailwind CSS.