// Single source of truth for service → hero image.
// 6 real photos available; mapped to the 8 services so no two adjacent cards
// repeat and each photo fits its service theme.
const FALLBACK = "/images/paginas/servicios/shower-box-scaled.webp";

export const SERVICE_IMAGES: Record<string, string> = {
  "frameless-shower-doors": "/images/paginas/servicios/shower-box-scaled.webp",
  "framed-shower-doors": "/images/paginas/servicios/470.webp",
  "wall-mirrors": "/images/paginas/servicios/tidy-bathroom-with-shiny-tiles.webp",
  "glass-railing-systems": "/images/paginas/servicios/bathroom-8368662_1920.webp",
  "commercial-wall-mirrors": "/images/paginas/servicios/faucet-bathroom.webp",
  "commercial-entry-doors": "/images/paginas/servicios/small-bathroom-with-modern-style-decor.webp",
  // The two below reuse the closest-fitting photo (no perfect own image yet).
  "residential-glass-repair-and-replacement": "/images/paginas/servicios/470.webp",
  "office-glass-partitions-and-commercial-glass": "/images/paginas/servicios/bathroom-8368662_1920.webp",
};

export const serviceImage = (slug: string) => SERVICE_IMAGES[slug] ?? FALLBACK;
