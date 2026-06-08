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

## Deploy — Cloudflare Pages

El sitio es 100% estático (`output: 'static'`). Cloudflare Pages sirve `dist/`.

### Opción A — Conectar el repo (recomendado, deploy automático en cada push)

1. En el [dashboard de Cloudflare](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git**.
2. Autoriza GitHub y elige el repo **`diversity-showers-2`**.
3. Configura el build:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `22` (variable de entorno `NODE_VERSION=22`)
4. **Save and Deploy.** Cada `git push` a `main` redeploya solo.

### Opción B — Wrangler CLI (deploy manual)

```sh
npm i -g wrangler
npm run build
wrangler pages deploy dist --project-name=diversity-showers-2
```

### Incluido para Cloudflare Pages

- `public/_headers` — security headers + cache largo para `/_astro/*` e imágenes.
- `public/_redirects` — redirecciones de slugs viejos de WordPress (`/contacts` → `/contact`, etc.).
- `public/robots.txt` + `sitemap-index.xml` (generado por `@astrojs/sitemap`).
- CF Pages sirve `404.html` automáticamente en rutas no encontradas.

> **Dominio:** tras el primer deploy, en **Pages → Custom domains** añade
> `diversityshowers.com`. El `site:` en `astro.config.mjs` ya apunta a ese dominio
> (cámbialo si usarás otro). Si el dominio aún no está en Cloudflare, primero
> agrégalo como zona y apunta los nameservers.

## Pendiente para producción

- Reemplazar el endpoint del formulario de contacto (placeholder `formsubmit.co`) y
  configurar un reCAPTCHA nuevo.
- Sustituir las fotos de hero/servicios por fotografía propia de Diversity (las de
  catálogo de los 12 productos ya son reales).
