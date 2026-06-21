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
    question: "What glass products does Diversity Showers offer?",
    topic: "Products",
    answer:
      "We make frameless, semi-frameless and framed shower doors, custom mirrors, glass railings and partitions, plus custom-cut glass for tabletops and shelving. Visit our showroom at 1711 Briercroft Ct #140, Carrollton, or call 214-731-6421 and we'll put together a quote for you.",
  },
  {
    question: "Do you make custom shower doors?",
    topic: "Custom Orders",
    answer:
      "Yes. We design and manufacture shower doors to your exact opening — any size, glass thickness or hardware finish. Bring a photo and the rough dimensions to the showroom, or call us, and we'll quote your project.",
  },
  {
    question: "Can you match a specific design I have in mind?",
    topic: "Custom Orders",
    answer:
      "Absolutely. Send us a photo of the bathroom or the design you saved, along with the measurements, and we'll work out the glass, hardware and finish to match it. Visit us or call for a quote.",
  },
  {
    question: "How long does a custom order take?",
    topic: "Custom Orders",
    answer:
      "Most custom shower doors and mirrors are ready within 3–5 business days after we confirm the measurements and finish. We'll give you a firm timeline when we quote your project.",
  },
  {
    question: "Do you sell tempered safety glass?",
    topic: "Products",
    answer:
      "Yes. All of our tempered glass meets ANSI Z97.1 safety standards. We can cut and temper to the size and thickness your project needs.",
  },
  {
    question: "Do you carry low-iron, ultra-clear glass?",
    topic: "Products",
    answer:
      "Yes. We offer Starphire-type low-iron glass that removes the slight green tint of standard glass — a great choice for showers and mirror walls where you want the clearest possible look.",
  },
  {
    question: "What glass thicknesses do you work with?",
    topic: "Products",
    answer:
      'We work with the most common thicknesses for each application: 3/8" and 1/2" for shower doors, 1/4" to 3/4" for tabletops, and 1/8" to 1/4" for mirrors. If you are not sure what you need, we will help you choose.',
  },
  {
    question: "What edge finishes can I choose from?",
    topic: "Products",
    answer:
      "We offer polished edges (the standard for shower doors), beveled edges, pencil polish and flat polish. Custom edge work is available for special projects — just ask when you visit or call.",
  },
  {
    question: "Can you replace the glass on an older shower door?",
    topic: "Products",
    answer:
      "Yes. Bring the dimensions or the old panel itself to the showroom and we'll fabricate a replacement matched to the thickness and finish.",
  },
  {
    question: "Do you make mirrors and glass railings too?",
    topic: "Services",
    answer:
      "Yes. Beyond showers, we make custom wall mirrors — beveled, framed or full mirror walls — and glass railing systems and partitions for homes and businesses. Visit us or call and we'll quote your space.",
  },
  {
    question: "Do you design and manufacture the glass yourselves?",
    topic: "Services",
    answer:
      "Yes. Everything is designed and manufactured by our own Carrollton team, then fitted to your space — so the people who measure your project are the same ones who make it.",
  },
  {
    question: "How do I get started?",
    topic: "Ordering",
    answer:
      "The easiest way is to visit our showroom or give us a call for a free quote. Bring or send a photo of the space and the rough measurements, and we'll take it from there. Showroom: 1711 Briercroft Ct #140, Carrollton, TX 75006 · 214-731-6421.",
  },
  {
    question: "Can I pick up an in-stock item the same day?",
    topic: "Ordering",
    answer:
      "Yes, many stock items and replacement parts are available for same-day pickup. Call ahead to confirm availability and we'll have it ready when you arrive.",
  },
  {
    question: "What is your return policy?",
    topic: "Ordering",
    answer:
      "Unopened, undamaged stock items can be returned within 30 days with the original receipt. Custom-cut glass and special orders are non-returnable because they're made specifically for your project.",
  },
  {
    question: "What payment methods do you accept?",
    topic: "Payment",
    answer:
      "We accept cash, checks and all major credit cards (Visa, MasterCard, American Express and Discover). We'll go over payment when we confirm your quote.",
  },
  {
    question: "What are your hours of operation?",
    topic: "Hours & Location",
    answer:
      "We're open Monday through Friday, 7:30 AM to 4:30 PM, and closed on weekends. Stop by during business hours or call 214-731-6421.",
  },
  {
    question: "Where are you located, and do you have a showroom?",
    topic: "Hours & Location",
    answer:
      "Yes, we have a full showroom at 1711 Briercroft Ct #140, Carrollton, TX 75006, with easy access from I-35E and the George Bush Tollway. Come see samples of our glass types, hardware finishes and shower door displays.",
  },
];
