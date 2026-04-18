/**
 * US Hydrations content — real facts scraped from ushydrations.com
 * (home, /our-capabilities, /our-credentials, /our-leaders, /our-location, /our-story).
 *
 * This file is the single source of truth. Sections import from here;
 * no hardcoded copy in components.
 */

export const brand = {
  name: "US Hydrations",
  wordmark: "USHydrations",
  established: 1996,
  yearsBottling: "25+",
  tagline: "Everything from drink development to delivery.",
  mission:
    "At USHydrations, we make your brand. We are dedicated to fostering a culture of excellence, where every team member takes pride in producing products of the highest quality.",
  hero: {
    kicker: "Est. 1996 · Pittston, Pennsylvania",
    headline: "Premier Beverage Manufacturer",
    headlineItalic: "Everything",
    headlineTail: "from drink development to delivery",
    script: "since 1996",
    support:
      "Decades of expertise. One-stop, high-volume beverage manufacturing for the brands you know — built in Pittston, shipped nationwide.",
  },
  contact: {
    address1: "164 Commerce Road",
    address2: "Pittston, PA 18640",
    phone: "(570) 655-7755",
    phoneHref: "tel:+15706557755",
    email: "info@ushydrations.com",
    emailHref: "mailto:info@ushydrations.com",
  },
  assets: {
    heroVideo:
      "https://www.ushydrations.com/wp-content/uploads/2020/01/US-Hydrations-V7.mp4",
    logo: "https://www.ushydrations.com/wp-content/uploads/2019/05/USH-Logo-RGB-LARGE-e1556735933681.png",
  },
} as const;

export type NavLink = { label: string; href: string };
export const navLinks: NavLink[] = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#products" },
  { label: "Leadership", href: "#leadership" },
  { label: "Credentials", href: "#credentials" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

/* ============================================================
   HERO STATS — real numbers from /our-capabilities
   ============================================================ */
export type HeroStat = {
  target?: number;
  suffix?: string;
  staticValue?: string;
  label: string;
};
export const heroStats: HeroStat[] = [
  { target: 25, suffix: "+", label: "Years bottling" },
  { target: 1000000, suffix: "", label: "Sq ft production & warehouse" },
  { staticValue: "4", label: "High-speed PET lines" },
  { staticValue: "250K", label: "Gal water storage" },
];

/* ============================================================
   MARQUEE — product formats + package configurations
   ============================================================ */
export const marqueeTerms = [
  "Purified",
  "Distilled",
  "Alkaline",
  "Enhanced",
  "Flavored",
  "Carbonated",
  "PET 10oz \u2014 1.5L",
  "28 / 38 mm closures",
  "Aptar Sports Cap",
  "6 · 12 · 15 · 18 · 24 Pack",
  "Shrink-tray & Boxes",
  "Cold-fill",
];

/* ============================================================
   CAPABILITIES — 4 real capability groups from /our-capabilities
   ============================================================ */
export type CapabilityGroup = {
  num: string;
  title: string;
  copy: string;
  bullets: string[];
};
export const capabilityGroups: CapabilityGroup[] = [
  {
    num: "01",
    title: "Water Processing",
    copy: "Six-stage purification, treatment, and batching under one roof.",
    bullets: [
      "Reverse Osmosis",
      "Ozonation & UV Light",
      "In-line Filtration",
      "Carbonation",
      "Advanced Batching",
      "Automated CIP",
    ],
  },
  {
    num: "02",
    title: "Bottling & Packaging",
    copy: "Four high-speed blow & fill PET lines with full package flexibility.",
    bullets: [
      "10oz \u2014 1.5L bottles",
      "28 / 38 mm closures",
      "Aptar Sports Cap & Overcap",
      "6, 12, 15, 18, 24 pack configurations",
      "Shrink-tray & boxes",
    ],
  },
  {
    num: "03",
    title: "Quality & Lab",
    copy: "Onsite micro and product testing. Every batch verified before it ships.",
    bullets: [
      "In-house testing laboratory",
      "Meticulous water & formula testing",
      "Quality-focused management team",
      "Continuous improvement culture",
    ],
  },
  {
    num: "04",
    title: "Warehouse & Logistics",
    copy: "1,000,000 sq ft of production and warehouse. 50 bays so trucks load quickly.",
    bullets: [
      "1 production facility + 3 distribution centers",
      "50 loading bays",
      "Within 500 mi of 120M+ consumers",
      "I-81 & I-80 direct access",
      "2 mi from AVP airport",
    ],
  },
];

/* ============================================================
   PRODUCTS — 6 real water/beverage types
   ============================================================ */
export type Product = {
  slug: "purified" | "distilled" | "alkaline" | "enhanced" | "flavored" | "carbonated";
  label: string;
  tag: string;
  format: string;
  image: string;
  description: string;
};
export const products: Product[] = [
  {
    slug: "purified",
    label: "Purified",
    tag: "Still · Reverse Osmosis",
    format: "PET 10oz \u2014 1.5L",
    image:
      "https://www.ushydrations.com/wp-content/uploads/2019/05/HALF_2-5-19_USH_Additional_Location_DSC1155.jpg",
    description:
      "Multi-stage RO, ozonation, and UV. The baseline bottled-water format — clean, neutral, private-label ready.",
  },
  {
    slug: "distilled",
    label: "Distilled",
    tag: "Still · Distilled",
    format: "PET 1L · 1.5L",
    image:
      "https://www.ushydrations.com/wp-content/uploads/2019/04/HALF_2-5-19-USH-Additional-Location_DSC1017.jpg",
    description:
      "Zero-mineral distilled water. Preferred for CPAP, specialty food applications, and medical-adjacent brands.",
  },
  {
    slug: "alkaline",
    label: "Alkaline",
    tag: "Still · Alkaline",
    format: "PET 500ml · 1L",
    image:
      "https://www.ushydrations.com/wp-content/uploads/2019/05/HALF_2-5-19_USH_Additional_Location_DSC0995.jpg",
    description:
      "pH-balanced alkaline water. Wellness-category private label with growing retail shelf space.",
  },
  {
    slug: "enhanced",
    label: "Enhanced",
    tag: "Still · Minerals / Vitamins",
    format: "PET 16.9oz · 1L",
    image:
      "https://www.ushydrations.com/wp-content/uploads/2019/05/HALF_1-23-19_USH_Session_DSC0383.jpg",
    description:
      "Fortified with electrolytes, minerals, or vitamin blends. Custom batching for functional hydration brands.",
  },
  {
    slug: "flavored",
    label: "Flavored",
    tag: "Still · Flavored",
    format: "PET 10oz \u2014 1L",
    image:
      "https://www.ushydrations.com/wp-content/uploads/2019/04/HALF_2-5-19-USH-Additional-Location_DSC1001.jpg",
    description:
      "Cold-fill flavored still water. Natural and artificial flavor systems batched to formula.",
  },
  {
    slug: "carbonated",
    label: "Carbonated",
    tag: "Sparkling",
    format: "PET 12oz \u2014 1L",
    image:
      "https://www.ushydrations.com/wp-content/uploads/2019/04/2-15-19-USH-Addl_DSC1735.jpg",
    description:
      "Carbonated still and flavored formats. Pressure-controlled for shelf stability and crisp mouthfeel.",
  },
];

/* ============================================================
   LEADERSHIP — 6 real bios + Chairman quote
   ============================================================ */
export type Leader = {
  name: string;
  title: string;
  bio: string;
  headshot: string;
  email?: string;
};
export const leaders: Leader[] = [
  {
    name: "Joseph Lapchak",
    title: "President & CEO",
    bio: "Extensive experience in banking and finance; 17+ years in the beverage industry. Oversees all phases of operations and serves on the Board of Directors and Executive Committee.",
    headshot:
      "https://www.ushydrations.com/wp-content/uploads/2019/04/Joe-Lapchak.jpg",
    email: "JLapchak@www.ushydrations.com",
  },
  {
    name: "Michael Sowinski",
    title: "Senior Vice President",
    bio: "Oversees finance and accounting. 30+ years in banking, with leadership roles across strategic planning, budgeting, forecasting, and managing a $50M investment portfolio.",
    headshot:
      "https://www.ushydrations.com/wp-content/uploads/2021/12/Michael-Sowinkski.jpg",
    email: "MSowinski@www.ushydrations.com",
  },
  {
    name: "Tiffanie Driscole",
    title: "VP of Quality",
    bio: "Over a decade in pharmaceutical and fresh-food manufacturing. BS Biology, MS Biochemistry. Oversees compliance, quality, batching, and sanitation operations.",
    headshot:
      "https://www.ushydrations.com/wp-content/uploads/2021/07/t-driscole.jpg",
    email: "tdriscole@www.ushydrations.com",
  },
  {
    name: "Joseph McGeer",
    title: "VP of Inventory & Logistics",
    bio: "Longest-serving employee \u2014 began at USHydrations' inception in 1999. Oversees warehouse operations, fleet management, and inventory control.",
    headshot:
      "https://www.ushydrations.com/wp-content/uploads/2019/04/Joseph-McGeer.jpg",
    email: "JMcGeer@www.ushydrations.com",
  },
  {
    name: "Jennifer Verry",
    title: "Director of Human Resources",
    bio: "Leads HR strategy, personnel, recruitment, training, policy, benefits administration, and payroll. Previously HR Manager for a private Federal-government sub-contractor.",
    headshot:
      "https://www.ushydrations.com/wp-content/uploads/2019/12/Jennifer_Verry.jpeg",
    email: "JVerry@www.ushydrations.com",
  },
  {
    name: "Joseph Desmarteau",
    title: "Director of Process Improvement",
    bio: "Leads process improvement and training. 35+ years of manufacturing, supply-chain, and teaching experience. Facilitates Lean and Six Sigma initiatives across the organization.",
    headshot:
      "https://www.ushydrations.com/wp-content/uploads/2021/07/Joseph.jpg",
    email: "JDesmarteau@www.ushydrations.com",
  },
];

export const chairmanQuote = {
  text: "Having built several mega businesses, including a retail chain, I fully understand how important it is to our customers to always have their product on shelves. We are completely committed to taking away our customers\u2019 pain.",
  attribution: "Sandy Insalaco Sr., Chairman of the Board",
};
export const ceoQuote = {
  text: "We plan and invest in our future, so we can grow right along with our customers.",
  attribution: "Joe Lapchak, President & CEO",
};

/* ============================================================
   CREDENTIALS — 7 real certifications
   ============================================================ */
export type Credential = {
  short: string;
  full: string;
};
export const credentials: Credential[] = [
  { short: "FDA", full: "FDA registered & inspected" },
  { short: "SQF Level 3", full: "Safe Quality Food \u2014 highest audit level" },
  { short: "Orthodox Union", full: "Kosher food production certification" },
  { short: "FMI", full: "Food Marketing Institute" },
  { short: "U.S. Army", full: "Military supply-chain approved" },
  { short: "AIB", full: "American Institute of Baking" },
  {
    short: "PepsiCo GOLD",
    full: "2019 Caleb Bradham Quality & Food Safety Excellence",
  },
];

/* ============================================================
   STORY — real 1996/2000 origin
   ============================================================ */
export const story = {
  heading: "From a spring-water route to a million-sq-ft plant.",
  paragraphs: [
    "Founded in 1996 as Nature\u2019s Way Purewater Systems \u2014 a regional bottling and delivery route for natural spring water.",
    "In 2000, Sandy Insalaco Sr. acquired majority ownership. He\u2019d already built a 14-store grocery chain with his brothers, and he knew what running it out meant.",
    "That retail instinct \u2014 the one that says never let the shelf go empty \u2014 became the operating principle. The company relocated into a 400,000+ sq ft facility, invested in advanced equipment, and grew into the plant that bottles for national and global brands today.",
  ],
};
