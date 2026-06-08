---
name: Technical Elegance — Diversity Showers (Carpeta 2 · Showroom Contrast)
stitchProjectId: "15953020499310216772"
stitchDesignSystem: "assets/a6c90d48f8cc458d9538be015a25c6a7"
colors:
  charcoal-base: '#1A1D21'      # hero + dark bands
  light-base: '#F5F6F7'         # primary light canvas
  glass-tint: '#E9EEF1'         # secondary fills, low-iron glass cue
  chrome: '#C7CDD2'             # hairlines, dividers, finish swatches
  ink-dark: '#1A1D21'           # text on light
  ink-dark-muted: '#5C6168'     # muted text on light
  ink-light: '#F5F6F7'          # text on charcoal
  ink-light-muted: '#9AA3AB'    # muted text on charcoal
  accent-water: '#2E7FA6'       # CTA + links ONLY (<=8% surface)
  accent-water-deep: '#23647F'  # CTA hover
  success: '#1A7F4E'
  error: '#BA1A1A'
  warning: '#C97E1F'
typography:
  display-lg:   { fontFamily: Inter, fontSize: 72px, fontWeight: '700', lineHeight: '1.1', letterSpacing: -0.04em }
  headline-lg:  { fontFamily: Inter, fontSize: 48px, fontWeight: '700', lineHeight: '1.2', letterSpacing: -0.03em }
  headline-mob: { fontFamily: Inter, fontSize: 32px, fontWeight: '700', lineHeight: '1.2', letterSpacing: -0.02em }
  body-lg:      { fontFamily: Inter, fontSize: 18px, fontWeight: '400', lineHeight: 28px }
  body-md:      { fontFamily: Inter, fontSize: 16px, fontWeight: '400', lineHeight: 24px }
  eyebrow-mono: { fontFamily: Space Mono, fontSize: 12px, fontWeight: '700', lineHeight: 16px, letterSpacing: 0.2em }
  product-code: { fontFamily: Space Mono, fontSize: 14px, fontWeight: '400', lineHeight: 20px, letterSpacing: 0.02em }
  label-sm:     { fontFamily: Inter, fontSize: 13px, fontWeight: '600', lineHeight: 18px }
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem      # 24px — cards/containers (16–20px target)
  full: 9999px    # buttons, chips, swatches
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  gutter: 24px
  margin-desktop: 80px
  container-max: 1280px
---

# DESIGN.md — Diversity Showers · Carpeta 2 "Showroom Contrast"

> **Dirección — "Technical Elegance: a modern glass showroom"**
>
> Esta es la SEGUNDA de tres direcciones visuales para reconstruir
> diversityshowers.com. Es deliberadamente DISTINTA de la Carpeta 1 ("Aqua",
> dark petrol + champán + atelier boutique). Aquí el objetivo es que la web
> **se lea de inmediato como una empresa de duchas de vidrio**: showroom
> moderno, alto contraste, producto y baños reales como protagonistas,
> comercial y vendedora.
>
> **Sistema generado con Google Stitch** (proyecto `15953020499310216772`,
> design system "Technical Elegance" `assets/a6c90d48f8cc458d9538be015a25c6a7`).
> Pantallas de referencia en `.stitch/designs/`.
>
> **Stack al codear:** mismo que Carpeta 1 → Astro + React islands + Tailwind v4
> (CSS-first `@theme`) + GSAP 3.12 + Lenis.

---

## 1. Atmósfera

Una frase: **"Entrar a un showroom moderno de vidrio templado — paredes grafito,
vidrio que refleja la luz, una sola línea azul-agua que te dice dónde tocar."**

Mood words: `SHOWROOM` · `TÉCNICO-ELEGANTE` · `ALTO CONTRASTE` · `METÁLICO` ·
`CRISTALINO` · `COMERCIAL` · `RESPIRADO`.

Anti-mood: boutique abstracto (eso es la Carpeta 1), atelier cálido, warm/sepia,
DIY suburban, plantilla Elementor genérica.

**Diferenciador clave pedido por el cliente:** el HÉROE es un **slider con
autoplay** (carrusel cinematográfico de duchas frameless y baños modernos
rotando). Nota: esto contradice a propósito el viejo DESIGN.md "Industrial Mono
Cristal" que prohibía carruseles — aquí el slider autoplay es deliberado.

---

## 2. Paleta — "Showroom Contrast"

Arquitectura material: bandas grafito alternando con bandas claras, separadas
por hairlines de cromo. El azul-agua es el único color saturado y solo en CTAs.

| Token | Hex | Rol |
|---|---|---|
| `--charcoal-base` | `#1A1D21` | Fondo hero + bandas oscuras (NO negro puro) |
| `--light-base` | `#F5F6F7` | Lienzo claro principal |
| `--glass-tint` | `#E9EEF1` | Fills secundarios, cue de vidrio low-iron |
| `--chrome` | `#C7CDD2` | Hairlines, divisores, swatches de acabado |
| `--ink-dark` | `#1A1D21` | Texto sobre claro |
| `--ink-dark-muted` | `#5C6168` | Texto muted sobre claro |
| `--ink-light` | `#F5F6F7` | Texto sobre charcoal |
| `--ink-light-muted` | `#9AA3AB` | Texto muted sobre charcoal |
| `--accent-water` | `#2E7FA6` | CTA + links ÚNICAMENTE |
| `--accent-water-deep` | `#23647F` | Hover del CTA |
| `--success` | `#1A7F4E` | Confirmaciones form |
| `--error` | `#BA1A1A` | Errores form |
| `--warning` | `#C97E1F` | Avisos |

**Reglas**
- **El azul-agua `#2E7FA6` es el único saturado**, máx ~8% de cualquier viewport,
  solo en botones primarios y links. Jamás como fondo grande.
- **Separación por bandas, no por sombras.** Alternar charcoal ↔ light/glass-tint.
- **Sin sombras blurreadas.** Profundidad por materialidad: hairlines de cromo
  (1px `#C7CDD2` sobre claro / blanco al 10% sobre charcoal) + tonal stacking.
- **Glass blur** (`backdrop-filter: blur` ~20px) en header sticky y overlays de
  imagen — refuerza el tema "vidrio".

---

## 3. Tipografía

Dos familias: **Inter** (display + body) y **Space Mono** (eyebrows + códigos).

```css
--font-display: "Inter", system-ui, sans-serif;
--font-body:    "Inter", system-ui, sans-serif;
--font-mono:    "Space Mono", "JetBrains Mono", ui-monospace, monospace;
```

| Token | Size | Line | Weight | Tracking | Uso |
|---|---|---|---|---|---|
| `display-lg` | 72px | 1.1 | 700 | −0.04em | Hero H1 |
| `headline-lg` | 48px | 1.2 | 700 | −0.03em | Section heads |
| `headline-mob` | 32px | 1.2 | 700 | −0.02em | Heads en móvil |
| `body-lg` | 18px | 28px | 400 | 0 | Lead paragraphs |
| `body-md` | 16px | 24px | 400 | 0 | Body |
| `eyebrow-mono` | 12px | 16px | 700 | 0.2em UPPER | Eyebrow labels `[ OUR SERVICES ]` |
| `product-code` | 14px | 20px | 400 | 0.02em | Códigos (DR037, DP8) |
| `label-sm` | 13px | 18px | 600 | 0 | Labels UI |

### Reglas
- **Eyebrows SIEMPRE** en Space Mono, mayúsculas, tracking 0.2em, formato
  `[ OUR PORTFOLIO ]`. Marca de la casa.
- **Headlines weight 700** con tracking negativo (lock-up comercial e impactante).
  Diferencia con Carpeta 1 (que usa serif italic fino) — aquí es sans bold.
- **Códigos de producto SIEMPRE en mono** (DR037, DSQ8, DRC180, CATALINA…).
- Body line-height generoso (24–28px).

---

## 4. Layout, Radius y Formas

### Container
- **Max-width:** 1280px.
- **Margin lateral desktop:** 80px (sensación showroom exclusivo). Tablet 32px, móvil 16px.
- **Regla 8px:** todo padding/margin múltiplo de 8.
- **Ritmo vertical:** 120px entre secciones (desktop) → 64px (móvil).

### Radius
| Token | Value | Uso |
|---|---|---|
| `full` | 9999px | Botones, chips, swatches, filtros |
| `xl` | 24px | Cards/containers (target 16–20px) |
| `lg` | 16px | Cards de producto |
| `md` | 12px | Inputs grandes |
| `DEFAULT` | 8px | Inputs, tags |
| `sm` | 4px | Detalles |

Botones/chips = **pill**. Containers = esquinas redondeadas 16–20px. Nada a 0px.

### Composición
- **Bandas full-width alternas** charcoal ↔ light: el patrón rítmico que ordena
  toda la página.
- **Asimetría editorial** en bloques about/servicios (texto a un lado, foto al otro).
- **Hairlines de cromo** como elemento de diseño (entre stats, entre cards).

---

## 5. Easings & Motion

```css
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);   /* entradas */
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);   /* hovers */
--ease-snap:      cubic-bezier(0.85, 0, 0.15, 1);  /* slider */
```

**Recetas:**
- **HERO — slider autoplay** (centerpiece): 3–4 slides de duchas/baños, autoplay
  ~5s, fade o slide suave, leve ken-burns (scale 1→1.05), dots + flechas.
  Pausa en hover. **Bajo `prefers-reduced-motion`: sin autoplay, primer slide fijo.**
- **Reveal on scroll:** fade-up 8px + scale 0.98→1, 400ms, stagger 60ms.
- **Cards de servicio:** invierten color en hover (charcoal↔light), 150ms.
- **Cards de producto:** aparece outline cromo 2px en hover, sin scale/shadow.
- **CTA primario:** hover invierte/oscurece a `--accent-water-deep`.

**Prohibido:** parallax > 5%, gradientes animados, sombras blandas, bouncy springs.

**Obligatorio:** todo GSAP con `gsap.context()` + scope + `matchMedia` +
fallback `prefers-reduced-motion`.

---

## 6. Iconografía

- **Lucide React**, `stroke-[1.5]`, `size-*`.
- Default tint `--ink-light-muted` / `--ink-dark-muted` → `--accent-water` en hover.

---

## 7. Imagery

### Qué mostrar (literal, producto-first)
- **Duchas frameless instaladas** en baños modernos reales (vidrio en contexto,
  sin personas) — protagonistas del hero slider.
- **Hardware en estudio** sobre fondo claro limpio (bisagras, manijas, clips),
  estilo catálogo Boffi/Kohler — para el portfolio.
- **Detalle macro** de acabado en cromo captando luz.

### Tratamiento
- Sin warm/sepia. Limpio, frío-neutro, alto contraste.
- Esquinas redondeadas siempre (24px hero, 16px contenido).
- Aspect ratios producto: 1:1 / 4:5. Hero: full-bleed wide.

### File map (al codear, mover a `/public/`)
- `imagenes/paginas/home/*` → escenas de baño para el hero slider
- `imagenes/paginas/servicios/*` → escenas de servicios
- `imagenes/portafolios/{cat}-{code}/*` → catálogo (12 productos existentes)
- `imagenes/logos/*` → logos

> Nota: las pantallas Stitch usan fotos generadas por IA como placeholder. Al
> codear, sustituir por las imágenes reales del inventario (sección 17 de
> `INFORMACION-SITIO.md`).

---

## 8. Voice & Copy

Comercial, claro, confiado. Público: dueño de casa DFW + contractor.

| ✅ | ❌ |
|---|---|
| `Where we redefine the possibilities of glass` | `Wholesale tempered glass B2B` |
| `Custom frameless shower doors, made in Carrollton` | `The best doors you'll ever buy!` |
| `View our work` / `Start a project` / `Get a quote` | `Browse` / `Submit` |

Eyebrows reales del sitio: `[ WELCOME TO DIVERSITY SHOWERS ]`, `[ ABOUT DIVERSITY SHOWERS ]`,
`[ OUR SERVICES ]`, `[ OUR PORTFOLIO ]`, `[ OUR CREATIVE PROCESS ]`,
`[ TESTIMONIALS ]`, `[ GET IN TOUCH ]`, `[ OUR BENEFITS ]`, `[ FAQ ]`.

Idioma público: **inglés (USA)**. Todo el contenido real está en `INFORMACION-SITIO.md`.

---

## 9. Accesibilidad

- WCAG AA. Azul `#2E7FA6` sobre charcoal `#1A1D21` y sobre blanco — validar
  contraste de texto (usar para texto solo en tamaños grandes / iconos; el CTA
  lleva texto blanco sobre el azul, que sí pasa).
- Focus ring: `2px solid var(--accent-water)` + 2px offset. Nunca `outline:none`.
- Tap targets ≥ 44×44px.
- `prefers-reduced-motion`: desactiva GSAP y autoplay del slider, deja primer slide.
- Skip-link a `#main`.

---

## 10. Estructura de páginas (referencia Stitch en `.stitch/designs/`)

| Página | Desktop | Mobile |
|---|---|---|
| **Home** (hero slider autoplay) | ✅ `home-desktop.*` | ✅ `home-mobile.*` |
| **Our Services** | ✅ `our-services-desktop.*` | ✅ `our-services-mobile.*` |
| **Portfolio** | ✅ `portfolio-desktop.*` | ✅ `portfolio-mobile.*` |
| **FAQ** | ✅ `faq-desktop.*` | ✅ `faq-mobile.*` |
| **Contact Us** | ✅ `contact-desktop.*` | ✅ `contact-mobile.*` |

> Set completo: 10 pantallas (5 desktop + 5 mobile) en `.stitch/designs/`,
> cada una con `.png` (preview) y `.html` (referencia).

### Home — secciones (en orden)
1. Header sticky glass-blur + nav + CTA "Start a project"
2. **Hero slider autoplay** (full-bleed) — "Where we redefine the possibilities of glass"
3. Stats bar — 180+ / 15+ / 99%
4. About — "Transforming Bathrooms with Innovation and Style"
5. Services — "What we can offer" (cards charcoal)
6. Portfolio — `[ OUR PORTFOLIO ]` + filtros + cards de producto
7. Creative Process — 01–04
8. Testimonials — "What People Say"
9. Final CTA — "Let's start a project" + datos de contacto
10. Footer 4 columnas + bottom bar

---

## 11. Checklist de validación

- [ ] Hero es un slider con autoplay (dots + flechas, pausa en hover)
- [ ] Bandas alternan charcoal `#1A1D21` ↔ light `#F5F6F7`
- [ ] El azul `#2E7FA6` solo en CTAs/links (≤ 8% superficie)
- [ ] Hairlines de cromo visibles como separadores (no sombras blandas)
- [ ] Eyebrows en Space Mono UPPER tracking 0.2em
- [ ] Headlines Inter 700 con tracking negativo
- [ ] Códigos de producto en mono
- [ ] Cards 16–20px radius, botones pill
- [ ] Se lee de inmediato como empresa de duchas de vidrio
- [ ] Slider funciona sin autoplay bajo reduced-motion
- [ ] Footer: © 2026 Diversity Showers LLC + Terms · Privacy
- [ ] Lighthouse Performance ≥ 90 móvil
