# Diversity Showers — Showroom Contrast (v2)

Segunda dirección visual del sitio de **Diversity Showers LLC** (Carrollton, TX) —
distribuidor e instalador de vidrio templado para baño en el DFW Metroplex.

Dirección de diseño: **"Showroom Contrast / Technical Elegance"** — grafito + off‑white +
cromo, con azul‑agua solo en CTAs. Hero con slider autoplay, producto‑first.

## Stack

- **Astro 6** (output estático, listo para HostGator)
- **React 19** (islands: hero slider, smooth scroll)
- **Tailwind CSS v4** (CSS‑first `@theme`)
- **GSAP 3** + **Lenis** (smooth scroll, reveals vía IntersectionObserver)
- Fuentes: Inter + Space Mono

## Desarrollo

```sh
npm ci          # instala desde el lockfile (Vite 7 — NO usar npm install fresco)
npm run dev     # http://localhost:4321
npm run build   # genera /dist (29 páginas estáticas)
npm run preview
```

> **Nota de dependencias:** usa `npm ci`. Un `npm install` sin lockfile resuelve
> Vite 8 (rolldown‑vite), que rompe `@tailwindcss/vite@4.3`.

## Estructura

```
src/
├── components/   Header, Footer, Logo, HeroSlider, ProductCard, PageHero, Reveal, ...
├── data/         products, services, testimonials, faqs
├── lib/          site (datos de contacto), gsap, service-images
├── layouts/      Layout.astro
├── pages/        home, our-services, services/[slug], portfolio, portfolio/[slug],
│                 faq, contact, our-projects, terms-of-use, privacy-policy, 404
└── styles/       global.css (@theme Showroom Contrast)
.stitch/          DESIGN.md + mockups de referencia (Google Stitch)
```

## Pendiente para producción

- Reemplazar el endpoint del formulario de contacto (placeholder `formsubmit.co`) y
  configurar un reCAPTCHA nuevo.
- Sustituir las fotos de hero/servicios por fotografía propia de Diversity (las de
  catálogo de los 12 productos ya son reales).
