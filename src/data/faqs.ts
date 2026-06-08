export type FAQ = {
  question: string;
  answer: string;
  topic?: string;
};

export const FAQ_TOPICS = [
  "All",
  "Products",
  "Ordering",
  "Custom Orders",
  "Services",
  "Payment",
  "Hours & Location",
] as const;

export const faqs: FAQ[] = [
  {
    question: "What glass products does Diversity Showers sell?",
    topic: "Products",
    answer:
      "Diversity Showers supplies all glass materials including shower doors (frameless, semi-frameless, framed), mirrors, glass shelving, storefront glass, tabletops, railings, and custom-cut glass for various applications. We offer wholesale pricing to contractors, installers, and businesses. Visit our showroom at 1711 Briercroft Ct, Carrollton, Suite 140, or call 214-731-6421 for inventory information.",
  },
  {
    question: "Do you sell frameless shower door kits?",
    topic: "Products",
    answer:
      "Yes, Diversity Showers stocks complete frameless shower door kits from major brands. Our kits include all necessary hardware, glass panels, and installation guides. We carry standard sizes in stock and can special order custom configurations with a 3-4 day turnaround.",
  },
  {
    question: "Can I buy just the glass without hardware?",
    topic: "Products",
    answer:
      'Yes, Diversity Showers sells glass panels separately for contractors and DIY customers. We stock tempered safety glass in various thicknesses (3/8", 1/2") and can cut to size in our facility. Clear, frosted, and tinted options are available with wholesale pricing for orders of 5+ pieces.',
  },
  {
    question: "Do you carry shower door replacement parts?",
    topic: "Products",
    answer:
      "Diversity Showers maintains a full inventory of replacement parts including handles, hinges, seals, sweeps, rollers, clips, and brackets for all major shower door brands.",
  },
  {
    question: "Do you make custom shower doors?",
    topic: "Custom Orders",
    answer:
      "Yes, Diversity Showers offers complete custom shower door manufacturing. We can create doors in any size, glass thickness, or hardware configuration.",
  },
  {
    question: "Do you offer glass tempering services?",
    topic: "Services",
    answer:
      "Diversity Showers partners with local tempering facilities to provide complete tempered glass solutions. We can arrange tempering for custom orders, typically with a 3-5 day turnaround.",
  },
  {
    question: "Do you work with property management companies?",
    topic: "Services",
    answer:
      "Diversity Showers is a preferred supplier for many Dallas-area property management companies. We offer master service agreements, consolidated billing, emergency replacement stock, and dedicated account management for property maintenance needs.",
  },
  {
    question: "Can you supply materials for large commercial projects?",
    topic: "Services",
    answer:
      "Yes, Diversity Showers handles large commercial supply contracts. Recent projects include 100+ unit apartment complexes, hotels, and office buildings. We offer project-specific pricing, scheduled deliveries, and dedicated project management for orders exceeding $10,000.",
  },
  {
    question: "Do you sell tempered safety glass?",
    topic: "Products",
    answer:
      "All Diversity Showers tempered glass meets ANSI Z97.1 safety standards. We stock various sizes and can custom temper to specifications.",
  },
  {
    question: "Do you carry low-iron ultra-clear glass?",
    topic: "Products",
    answer:
      "Yes, Diversity Showers stocks Starphire and other ultra-clear low-iron glass options. This premium glass eliminates the green tint of standard glass and is ideal for high-end residential and commercial projects. Available in custom sizes with approximately 30% price premium over standard glass.",
  },
  {
    question: "What are your hours of operation?",
    topic: "Hours & Location",
    answer:
      "Diversity Showers hours: Monday – Friday 7:30 AM – 4:00 PM, Saturday 8:00 AM – 11:00 AM, Sunday Closed. Extended hours available for large commercial projects by appointment.",
  },
  {
    question: "Do you have a showroom?",
    topic: "Hours & Location",
    answer:
      "Yes, Diversity Showers operates a full showroom at 1711 Briercroft Ct, Suite 140, Carrollton. View samples of all glass types, hardware finishes, and complete shower door displays during business hours.",
  },
  {
    question: "What makes Diversity Showers different from other glass suppliers?",
    topic: "Services",
    answer:
      "Diversity Showers stands out through our combination of local Dallas presence, immediate inventory access, same-day cutting and fabrication services, technical expertise for complex installations, Freedom Glass installer network, wholesale-only pricing structure, and dedicated support for our network of 100+ contractor partners.",
  },
  {
    question: "What payment methods do you accept?",
    topic: "Payment",
    answer:
      "Diversity Showers accepts cash, business checks, all major credit cards (Visa, MasterCard, American Express, Discover), NET 30 terms for established accounts, wire transfers, and ACH payments for large orders.",
  },
  {
    question: "Do you price match competitors?",
    topic: "Payment",
    answer:
      "Diversity Showers maintains competitive wholesale pricing across our product lines.",
  },
  {
    question: "How do I place a wholesale order?",
    topic: "Ordering",
    answer:
      "Diversity Showers accepts wholesale orders through multiple channels: visit our showroom at 1711 Briercroft Ct, Suite 140, Carrollton for pickup orders; call 214-731-6421 for phone orders and immediate availability; email orders for documentation and tracking; or use our quick-reorder system for repeat customers.",
  },
  {
    question: "Can I pick up materials same day?",
    topic: "Ordering",
    answer:
      "Yes, Diversity Showers offers same-day pickup for in-stock items. Our facility maintains extensive inventory of common shower door hardware, standard glass sizes, and replacement parts. Call ahead to confirm availability and we'll have your order ready when you arrive.",
  },
  {
    question: "What's your return policy?",
    topic: "Ordering",
    answer:
      "Diversity Showers accepts returns within 30 days for unopened, undamaged stock items with original receipt. Custom-cut glass and special orders are non-returnable due to their custom nature.",
  },
  {
    question: "Do you maintain inventory for regular customers?",
    topic: "Ordering",
    answer:
      "Diversity Showers offers inventory reservation programs for high-volume customers, ensuring your needed materials are always available. We track your usage patterns and can automatically reorder common items.",
  },
  {
    question: "Can I buy materials and arrange my own installation?",
    topic: "Ordering",
    answer:
      "Absolutely, Diversity Showers sells to contractors, installers, and DIY customers. Our wholesale model means you can purchase any materials needed.",
  },
  {
    question: "Can installers purchase directly from you?",
    topic: "Ordering",
    answer:
      "Yes, Diversity Showers welcomes professional installers as direct customers. We offer contractor pricing, NET 30 terms for established accounts, and technical support for complex installations.",
  },
  {
    question: "What thickness of glass do you stock?",
    topic: "Products",
    answer:
      'Diversity Showers stocks the most common glass thicknesses for various applications: shower doors (3/8", 1/2"), windows (single pane, double pane), tabletops (1/4" through 3/4"), shelving (1/4", 3/8"), and mirrors (1/8", 1/4").',
  },
  {
    question: "What types of glass edges do you offer?",
    topic: "Products",
    answer:
      "Diversity Showers provides various edge finishes: polished edges (standard for shower doors), beveled edges (decorative), pencil polish, flat polish, and seamed edges for industrial applications. Custom edge work available for special projects.",
  },
  {
    question: "Where is Diversity Showers located?",
    topic: "Hours & Location",
    answer:
      "Diversity Showers is conveniently located at 1711 Briercroft Ct #140, Carrollton, TX 75006. Our location provides easy access from I-35E and George Bush Tollway, serving the entire DFW Metroplex with quick delivery times and easy pickup access.",
  },
  {
    question: "Is there parking for trucks and trailers?",
    topic: "Hours & Location",
    answer:
      "Yes, Diversity Showers has dedicated commercial parking with loading dock access for trucks and trailers. Our facility accommodates large vehicles with easy maneuvering space, and we have forklift capability for heavy or oversized orders. Drive-through bay available for quick loading.",
  },
  {
    question: "Why should I buy from Diversity Showers instead of big box stores?",
    topic: "Services",
    answer:
      "Diversity Showers offers significant advantages over big box retailers: wholesale pricing typically 15-35% less than retail, larger inventory of specialty items, custom cutting services not available at big box stores, NET 30 payment terms, and contractor-focused service.",
  },
  {
    question: "Do you provide technical support for installations?",
    topic: "Services",
    answer:
      "Yes, Diversity Showers offers technical consultation for complex projects. Our team provides installation guides, hardware specification sheets, and phone support for installer questions.",
  },
  {
    question: "How do I check my account balance?",
    topic: "Payment",
    answer:
      "Diversity Showers customers can check account balances by calling 214-731-6421 during business hours, emailing for account statements, or requesting current balance information at the showroom. Monthly statements are sent to all account customers automatically.",
  },
  {
    question: "Do you offer financing for large purchases?",
    topic: "Payment",
    answer:
      "Diversity Showers offers payment plans for large commercial purchases over $5,000 through our third-party financing partners.",
  },
  {
    question: "Do you carry shower door replacement glass for older units?",
    topic: "Products",
    answer:
      "Yes, we can source or fabricate replacement glass panels for older shower doors. Bring the dimensions or the panel itself to the showroom and we'll quote a replacement matched to thickness and finish.",
  },
];
