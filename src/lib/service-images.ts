// Single source of truth for service → hero image.
// 6 real photos available; mapped to the 8 services so no two adjacent cards
// repeat and each photo fits its service theme.
const FALLBACK = "/images/paginas/servicios/shower-box-scaled.webp";

export const SERVICE_IMAGES: Record<string, string> = {
  "frameless-shower-doors": "/images/paginas/servicios/shower-box-scaled.webp",
  "framed-shower-doors": "/images/paginas/servicios/framed-shower-door.jpg",
  "wall-mirrors": "/images/paginas/servicios/wall-mirror.jpg",
  "glass-railing-systems": "/images/paginas/servicios/glass-railing.jpg",
  "commercial-wall-mirrors": "/images/paginas/servicios/commercial-mirror.jpg",
  "commercial-entry-doors": "/images/paginas/servicios/commercial-entry-doors.jpg",
  "residential-glass-repair-and-replacement": "/images/paginas/servicios/470.webp",
  "office-glass-partitions-and-commercial-glass": "/images/paginas/servicios/office-partition.jpg",
};

export const serviceImage = (slug: string) => SERVICE_IMAGES[slug] ?? FALLBACK;
