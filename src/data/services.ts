export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  short: string;
  body: string;
};

export const services: Service[] = [
  {
    slug: "frameless-shower-doors",
    title: "Frameless Shower Doors",
    shortTitle: "Frameless Doors",
    subtitle: "Sophisticated, sleek, and structurally solid.",
    short:
      "Custom frameless tempered glass shower doors with multiple glass types and finishes.",
    body: 'This essential home space deserves a relaxing and sophisticated environment. At Diversity Showers, we design frameless shower doors and enclosures that become the focal point of your bathroom, transforming it into an oasis of beauty and comfort. Our frameless shower doors are made with 3/8" to 1/2" thick tempered glass, making them structurally solid and durable. We offer a variety of glass types, including low iron glass, clear glass, frosted glass, gray glass, and bronze glass.',
  },
  {
    slug: "framed-shower-doors",
    title: "Framed Shower Doors",
    shortTitle: "Framed Doors",
    subtitle: "Custom framed glass for a sleek, modern look.",
    short: "Elegant aluminum and steel framed shower enclosures.",
    body: "We use metals such as aluminum or steel to frame the thin glass, reinforcing its strength and support. Our framed doors are elegant and very stylish. We provide custom shower door replacements in the Dallas-Fort Worth Metroplex area.",
  },
  {
    slug: "wall-mirrors",
    title: "Wall Mirrors",
    shortTitle: "Wall Mirrors",
    subtitle: "A unique and exciting touch to homes and businesses.",
    short:
      "Custom mirrors for residential spaces — vanity, door, wall, and beveled.",
    body: "We offer custom mirrors tailored to customer preferences. Available in various custom sizes for different uses, including vanity mirrors, door mirrors, wall mirrors, and beveled mirrors. We specialize in pure mirror walls.",
  },
  {
    slug: "glass-railing-systems",
    title: "Glass Railing Systems",
    shortTitle: "Glass Railings",
    subtitle: "Largest selection of glass railings in North Texas.",
    short: "Modular and custom glass railings for residential and commercial.",
    body: "Custom fabrication services for glass railings, plus safe and quick replacement services in the DFW Metroplex. We design structural glass railings, aluminum, and stainless steel for residential and commercial spaces.",
  },
  {
    slug: "commercial-wall-mirrors",
    title: "Commercial Wall Mirrors",
    shortTitle: "Commercial Mirrors",
    subtitle: "Custom mirrors for businesses, bathrooms, and gyms.",
    short:
      "Custom-cut commercial mirrors with options for shapes and dimensions.",
    body: "Custom mirrors for businesses such as bathrooms and gyms. Custom options in shapes and dimensions, ensuring you get exactly what you need.",
  },
  {
    slug: "commercial-entry-doors",
    title: "Commercial Entry Doors",
    shortTitle: "Entry Doors",
    subtitle: "Custom entry doors for businesses.",
    short: "Custom-cut entry doors in various shapes and dimensions.",
    body: "Custom entry doors for businesses with a variety of options in custom shapes and dimensions.",
  },
  {
    slug: "residential-glass-repair-and-replacement",
    title: "Residential Glass Repair and Replacement",
    shortTitle: "Repair & Replacement",
    subtitle: "Comprehensive repair for windows, doors, and sliding glass.",
    short:
      "Repair broken windows, replace damaged glass, adjust sliding doors.",
    body: "Comprehensive residential glass repair and replacement services. Includes repairing broken windows, replacing damaged glass, and adjusting sliding glass doors. We work with tempered and laminated glass meeting safety and durability standards.",
  },
  {
    slug: "office-glass-partitions-and-commercial-glass",
    title: "Office Glass Partitions and Commercial Glass",
    shortTitle: "Office Partitions",
    subtitle: "Modern partitions for efficient work environments.",
    short:
      "Tempered glass partitions and commercial glass solutions for modern offices.",
    body: "Custom solutions for office partitions, including tempered glass partitions, glass walls, and sliding glass doors. Designed to maximize natural light and create open, inviting spaces.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
