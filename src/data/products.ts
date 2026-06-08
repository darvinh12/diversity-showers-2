export type ProductCategory = "hinges" | "clips" | "handles" | "doors";

export type Product = {
  slug: string;
  code: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  finishes: string[];
  description: string;
  specs: { label: string; value: string }[];
  images: string[];
};

export const FINISH_COLORS: Record<string, { name: string; hex: string }> = {
  BN: { name: "Brushed Nickel", hex: "#B4B4B4" },
  CH: { name: "Chrome", hex: "#D9D9D9" },
  MB: { name: "Matte Black", hex: "#1F1F1F" },
  ORB: { name: "Oil Rubbed Bronze", hex: "#3A2519" },
  BBRZ: { name: "Brushed Bronze", hex: "#8B5A2B" },
};

export const CATEGORIES: Record<ProductCategory, string> = {
  hinges: "Hinges",
  clips: "Clips and Clamps",
  handles: "Handles",
  doors: "Doors",
};

export const products: Product[] = [
  {
    slug: "dr037",
    code: "DR037",
    name: 'Adj Beveled Standard Hinge "H" plate',
    category: "hinges",
    categoryLabel: "Hinges",
    finishes: ["BN", "CH", "MB", "ORB", "BBRZ"],
    description:
      'The DR037 Hinge has radius corners and beveled edges for a sleek appearance. Accommodates 3/8" (10 mm) to 1/2" (12 mm) thick tempered safety glass, self-centering within 15 degrees of the closed position. Solid brass construction.',
    specs: [
      { label: "Code", value: "DR037" },
      { label: "Glass Thickness", value: '3/8" – 1/2" (10–12 mm)' },
      { label: "Load (2 Hinges)", value: "80 lbs (36 kg)" },
      { label: "Load (3 Hinges)", value: "120 lbs (54 kg)" },
      { label: "Max Door Width", value: '28" – 32" (711–813 mm)' },
      { label: "Self-Centering", value: "Within 15° of closed" },
      { label: "Material", value: "Solid Brass" },
    ],
    images: ["/images/portafolios/hinges-DR037/DR037-principal.webp"],
  },
  {
    slug: "dsq037",
    code: "DSQ037",
    name: "Adj Square Standard Hinge Short Plate",
    category: "hinges",
    categoryLabel: "Hinges",
    finishes: ["BN", "CH", "MB", "ORB", "BBRZ"],
    description:
      'The DSQ037 Hinge has square corners for a sleek modern appearance. Accommodates 3/8" (10 mm) to 1/2" (12 mm) thick tempered safety glass, self-centering within 15 degrees of the closed position. Solid brass.',
    specs: [
      { label: "Code", value: "DSQ037" },
      { label: "Glass Thickness", value: '3/8" – 1/2" (10–12 mm)' },
      { label: "Load (2 Hinges)", value: "80 lbs (36 kg)" },
      { label: "Load (3 Hinges)", value: "120 lbs (54 kg)" },
      { label: "Max Door Width", value: '28" – 32" (711–813 mm)' },
      { label: "Self-Centering", value: "Within 15° of closed" },
      { label: "Material", value: "Solid Brass" },
    ],
    images: [
      "/images/portafolios/hinges-DSQ037/DSQ037-1.webp",
      "/images/portafolios/hinges-DSQ037/DSQ037-2.webp",
    ],
  },
  {
    slug: "dh037",
    code: "DH037",
    name: "HD Adj Beveled Hinge Full Plate",
    category: "hinges",
    categoryLabel: "Hinges",
    finishes: ["BN", "CH", "MB", "ORB"],
    description:
      'Heavy Duty hinge with radius corners and beveled edges. Higher load capacity than the standard line. Accommodates 3/8" to 1/2" tempered glass, self-centering within 15° of closed.',
    specs: [
      { label: "Code", value: "DH037" },
      { label: "Glass Thickness", value: '3/8" – 1/2" (10–12 mm)' },
      { label: "Load (2 Hinges)", value: "110 lbs (50 kg)" },
      { label: "Load (3 Hinges)", value: "140 lbs (63 kg)" },
      { label: "Max Door Width", value: '28" – 32" (711–813 mm)' },
      { label: "Self-Centering", value: "Within 15° of closed" },
      { label: "Material", value: "Solid Brass (HD)" },
    ],
    images: [
      "/images/portafolios/hinges-DH037/DH037-1.webp",
      "/images/portafolios/hinges-DH037/DH037-2.webp",
    ],
  },
  {
    slug: "drh180",
    code: "DRH180",
    name: "GL to GL 180° Standard Beveled Hinge",
    category: "hinges",
    categoryLabel: "Hinges",
    finishes: ["BN", "CH", "MB", "ORB"],
    description:
      'Designed for glass-to-glass 180° applications. Beveled edges with radius corners. Accommodates 3/8" to 1/2" tempered glass.',
    specs: [
      { label: "Code", value: "DRH180" },
      { label: "Glass Thickness", value: '3/8" – 1/2" (10–12 mm)' },
      { label: "Load (2 Hinges)", value: "80 lbs (36 kg)" },
      { label: "Load (3 Hinges)", value: "120 lbs (54 kg)" },
      { label: "Max Door Width", value: '28" – 32" (711–813 mm)' },
      { label: "Application", value: "Glass to Glass 180°" },
      { label: "Material", value: "Solid Brass" },
    ],
    images: [
      "/images/portafolios/hinges-DRH180/DRH180-1.webp",
      "/images/portafolios/hinges-DRH180/DRH180-2.webp",
    ],
  },
  {
    slug: "drc01",
    code: "DRC01",
    name: "Wall to Glass Beveled Clips",
    category: "clips",
    categoryLabel: "Clips and Clamps",
    finishes: ["BN", "CH", "MB", "ORB", "BBRZ"],
    description:
      'Mount directly to wall, ceiling or floor to secure vertical fixed glass panels. Clearance from 1/16" to 3/16". Clear silicone provides clean, water-resistant seal.',
    specs: [
      { label: "Code", value: "DRC01" },
      { label: "Style", value: "Beveled" },
      { label: "Mount", value: "Wall / Ceiling / Floor" },
      { label: "Glass Clearance", value: '1/16" – 3/16"' },
      { label: "Material", value: "Solid Brass" },
    ],
    images: [
      "/images/portafolios/clips-DRC01/DRC01-1.webp",
      "/images/portafolios/clips-DRC01/DRC01-2.webp",
    ],
  },
  {
    slug: "drsq01",
    code: "DRSQ01",
    name: "Wall to Glass Square Clips",
    category: "clips",
    categoryLabel: "Clips and Clamps",
    finishes: ["BN", "CH", "MB", "ORB", "BBRZ"],
    description:
      'Mounts directly to wall, ceiling or floor to secure vertical fixed glass panels. Square modern profile. Clearance varies from 1/16" to 3/16".',
    specs: [
      { label: "Code", value: "DRSQ01" },
      { label: "Style", value: "Square" },
      { label: "Mount", value: "Wall / Ceiling / Floor" },
      { label: "Glass Clearance", value: '1/16" – 3/16"' },
      { label: "Material", value: "Solid Brass" },
    ],
    images: [
      "/images/portafolios/clips-DRSQ01/DRSQ01-1.webp",
      "/images/portafolios/clips-DRSQ01/DRSQ01-2.webp",
    ],
  },
  {
    slug: "drc180",
    code: "DRC180",
    name: "GL to GL 180° Beveled Clamp",
    category: "clips",
    categoryLabel: "Clips and Clamps",
    finishes: ["BN", "CH", "MB", "ORB"],
    description:
      'Beveled edges, used to connect two fixed 3/8" to 1/2" glass fixed transom or inline panel installations in frameless shower enclosures. Solid brass.',
    specs: [
      { label: "Code", value: "DRC180" },
      { label: "Style", value: "Beveled" },
      { label: "Application", value: "Glass to Glass 180°" },
      { label: "Glass Thickness", value: '3/8" – 1/2" (10–12 mm)' },
      { label: "Material", value: "Solid Brass" },
    ],
    images: [
      "/images/portafolios/clips-DRC180/DRC180-1.webp",
      "/images/portafolios/clips-DRC180/DRC180-2.webp",
    ],
  },
  {
    slug: "dso90",
    code: "DSO90",
    name: "90° Sleeve Over Notchless Clamp",
    category: "clips",
    categoryLabel: "Clips and Clamps",
    finishes: ["BN", "CH", "MB", "ORB", "BBRZ"],
    description:
      "Secures glass panels in position while silicone sealant cures. Clamps secured by nylon-tipped Allen set screws. Notchless — no special fabrication of the glass required.",
    specs: [
      { label: "Code", value: "DSO90" },
      { label: "Angle", value: "90°" },
      { label: "Style", value: "Sleeve Over / Notchless" },
      { label: "Set Screws", value: "Nylon Tipped Allen" },
      { label: "Material", value: "Solid Brass" },
    ],
    images: [
      "/images/portafolios/clips-DSO90/DSO90-1.webp",
      "/images/portafolios/clips-DSO90/DSO90-2.webp",
    ],
  },
  {
    slug: "dp8",
    code: "DP8",
    name: '8" Back-to-Back Standard Handle',
    category: "handles",
    categoryLabel: "Handles",
    finishes: ["BN", "CH", "MB", "ORB", "BBRZ"],
    description:
      'D-shaped pull for each side of the door (back-to-back). Solid brass, five finishes.',
    specs: [
      { label: "Code", value: "DP8" },
      { label: "Length", value: '8"' },
      { label: "Style", value: "D-Shape Back-to-Back" },
      { label: "Material", value: "Solid Brass" },
    ],
    images: ["/images/portafolios/handles-DP8/DP8-principal.webp"],
  },
  {
    slug: "dlp8",
    code: "DLP8",
    name: '8" Ladder Style Handle',
    category: "handles",
    categoryLabel: "Handles",
    finishes: ["BN", "CH", "MB", "ORB", "BBRZ"],
    description:
      'Ladder-shaped pull for each side of the door (back-to-back). Modern alternative to the D-shape with cleaner sightlines.',
    specs: [
      { label: "Code", value: "DLP8" },
      { label: "Length", value: '8"' },
      { label: "Style", value: "Ladder Back-to-Back" },
      { label: "Material", value: "Solid Brass" },
    ],
    images: [
      "/images/portafolios/handles-DLP8/DLP8-principal.webp",
      "/images/portafolios/handles-DLP8/DLP8-detalle.webp",
    ],
  },
  {
    slug: "dsq8",
    code: "DSQ8",
    name: '8" Square Style Handle',
    category: "handles",
    categoryLabel: "Handles",
    finishes: ["BN", "CH", "MB", "ORB"],
    description:
      'Square-style pull for each side of the door (back-to-back). Sharp geometric profile for contemporary installations.',
    specs: [
      { label: "Code", value: "DSQ8" },
      { label: "Length", value: '8"' },
      { label: "Style", value: "Square Back-to-Back" },
      { label: "Material", value: "Solid Brass" },
    ],
    images: ["/images/portafolios/handles-DSQ8/DSQ8-principal.webp"],
  },
  {
    slug: "catalina",
    code: "CATALINA",
    name: 'Catalina Slider — Door & Panel 60×80 with 8" Handle',
    category: "doors",
    categoryLabel: "Doors",
    finishes: ["BN", "CH", "MB", "ORB"],
    description:
      'Complete sliding door unit custom-made to specifications. Standard size 60×80 inches with 8" handle, 3/8" clear tempered glass for door and panel, L-shaped vinyl, sweep, and strike P990.',
    specs: [
      { label: "Standard Size", value: '60" × 80"' },
      { label: "Glass", value: '3/8" Clear Tempered' },
      { label: "Handle", value: '8" included' },
      { label: "Vinyl", value: "L-Shaped" },
      { label: "Hardware", value: "Strike P990 + Sweep" },
      { label: "Customizable", value: "Yes" },
    ],
    images: [
      "/images/portafolios/doors-CATALINA/CATALINA-1.jpg",
      "/images/portafolios/doors-CATALINA/CATALINA-2.webp",
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productsByCategory = (cat: ProductCategory | "all") =>
  cat === "all" ? products : products.filter((p) => p.category === cat);
export const relatedProducts = (current: Product, limit = 3) =>
  products.filter((p) => p.category === current.category && p.slug !== current.slug).slice(0, limit);
