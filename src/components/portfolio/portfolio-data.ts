export type PortfolioMediaType = "image" | "pdf";

export type PortfolioStat = {
  value: string;
  label: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  type: PortfolioMediaType;
  summary: string;
  tags: string[];
  format: string;
  preview?: string;
  images?: string[];
};

export type PortfolioFeature = {
  id: string;
  title: string;
  category: string;
  type: PortfolioMediaType;
  summary: string;
  highlight: string;
  tags: string[];
  format: string;
  preview?: string;
};

export type PortfolioCapability = {
  title: string;
  description: string;
  icon: string;
};

export type PortfolioTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export type PortfolioClient = {
  name: string;
  industry: string;
};

export type PortfolioStep = {
  title: string;
  description: string;
};

export const portfolioStats: PortfolioStat[] = [
  {
    value: "120+",
    label: "Assets delivered across branding, ads, web, and print",
  },
  {
    value: "40+",
    label: "Active clients served across service niches",
  },
  {
    value: "3×",
    label: "Average conversion lift on full-funnel retainer builds",
  },
];

export const featuredWork: PortfolioFeature[] = [
  {
    id: "brand-playbook",
    title: "Brand Playbook Kit",
    category: "Branding",
    type: "pdf",
    summary: "Full identity guide with fonts, color system, and usage rules.",
    highlight: "Cut brand inconsistency by 100% — one guide, every channel.",
    tags: ["Identity", "Guidelines", "Collateral"],
    format: "PDF • 18 pages",
  },
  {
    id: "service-ads",
    title: "Service Ad Creative Set",
    category: "Paid Ads",
    type: "image",
    summary: "High-contrast creatives built for scroll-stopping results.",
    highlight: "+43% CTR vs. previous creative on the same ad spend.",
    tags: ["Meta", "Google", "Retargeting"],
    format: "PNG • 6 variations",
  },
  {
    id: "seo-proof",
    title: "SEO Growth Snapshot",
    category: "SEO Proof",
    type: "pdf",
    summary: "Rankings, traffic lift, and visibility highlights.",
    highlight: "Page 1 rankings for 12 target keywords within 90 days.",
    tags: ["Rankings", "Traffic", "Reporting"],
    format: "PDF • 10 pages",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "branding-collateral",
    title: "Brand Collateral Bundle",
    category: "Branding",
    type: "pdf",
    summary: "Letterheads, brochure layout, and client-facing templates.",
    tags: ["Brochure", "Print", "Templates"],
    format: "PDF • 14 pages",
  },
  {
    id: "brochure-design",
    title: "Brochure Design Series",
    category: "Print",
    type: "image",
    summary: "Cover, interior spread, and client-ready mockups for a full print package.",
    tags: ["Brochure", "Print", "Mockup"],
    format: "PNG • 4 views",
    preview:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517601/Brochure_design_new_front_hgfoae.png",
    images: [
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517601/Brochure_design_new_front_hgfoae.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517603/Brochure_design_new_ieqmwq.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517599/Mockup_foufoe.png",
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1774517601/Mockup2_uixazo.png",
    ],
  },
  {
    id: "business-cards",
    title: "Business Card Series",
    category: "Branding",
    type: "image",
    summary: "Modern, service-forward layouts with clear hierarchy.",
    tags: ["Print", "Identity"],
    format: "JPG • 3 layouts",
  },
  {
    id: "facebook-ads",
    title: "Facebook Ad Variations",
    category: "Paid Ads",
    type: "image",
    summary: "Headline-driven visuals for lead capture campaigns.",
    tags: ["Meta", "Lead Gen"],
    format: "PNG • 8 creatives",
  },
  {
    id: "google-display",
    title: "Google Display Pack",
    category: "Paid Ads",
    type: "image",
    summary: "Responsive display layouts for retargeting.",
    tags: ["Display", "Retargeting"],
    format: "PNG • 5 sizes",
  },
  {
    id: "seo-report",
    title: "SEO Performance Report",
    category: "SEO Proof",
    type: "pdf",
    summary: "Monthly visibility and ranking highlights.",
    tags: ["Reporting", "Traffic"],
    format: "PDF • 9 pages",
  },
  {
    id: "social-series",
    title: "Social Content Series",
    category: "Social Media",
    type: "image",
    summary: "Consistent brand templates for weekly posts.",
    tags: ["Instagram", "Facebook"],
    format: "PNG • 12 posts",
  },
  {
    id: "review-cards",
    title: "Review Request Cards",
    category: "Social Media",
    type: "image",
    summary: "Lightweight graphics for follow-up campaigns.",
    tags: ["Reputation", "Automation"],
    format: "PNG • 4 variations",
  },
  {
    id: "landing-wireframe",
    title: "Landing Page Wireframes",
    category: "Web",
    type: "pdf",
    summary: "Page flow built for short-form booking funnels.",
    tags: ["UX", "Conversion"],
    format: "PDF • 6 pages",
  },
  {
    id: "service-one-pager",
    title: "Service One-Pager",
    category: "Print",
    type: "pdf",
    summary: "Clear service breakdown with pricing anchors.",
    tags: ["Print", "Sales"],
    format: "PDF • 2 pages",
  },
  {
    id: "case-study",
    title: "Client Success One-Sheet",
    category: "Sales",
    type: "pdf",
    summary: "Quick proof asset for outbound and onboarding.",
    tags: ["Case Study", "Proof"],
    format: "PDF • 1 page",
  },
  {
    id: "email-banners",
    title: "Email Banner Pack",
    category: "Lifecycle",
    type: "image",
    summary: "On-brand banners for automated nurture sequences.",
    tags: ["Email", "Nurture"],
    format: "PNG • 5 banners",
  },
  {
    id: "proposal-deck",
    title: "Proposal Deck",
    category: "Sales",
    type: "pdf",
    summary: "Confidence-building deck for decision calls.",
    tags: ["Pitch", "Deck"],
    format: "PDF • 16 pages",
  },
];

export const portfolioCapabilities: PortfolioCapability[] = [
  {
    title: "Conversion-Ready Design",
    description:
      "Every asset is built to guide attention and trigger the next action.",
    icon: "Target",
  },
  {
    title: "Operational Support",
    description:
      "Dedicated VA coverage keeps every lead moving with clean follow-ups.",
    icon: "Users",
  },
  {
    title: "Continuous Optimization",
    description:
      "We monitor results and keep refining the creative stack.",
    icon: "TrendingUp",
  },
];

export const portfolioTestimonials: PortfolioTestimonial[] = [
  {
    id: "t1",
    quote:
      "The ad creatives they delivered doubled our click-through rate in the first two weeks. The team understood our brand immediately — no back-and-forth, just results.",
    name: "Marcus Rivera",
    role: "Marketing Director",
    company: "Apex Home Services",
    initials: "MR",
  },
  {
    id: "t2",
    quote:
      "We finally have a brand that looks as professional as our service. The playbook they built made it easy to stay consistent across every channel.",
    name: "Sandra Okafor",
    role: "Founder",
    company: "Okafor Legal Group",
    initials: "SO",
  },
  {
    id: "t3",
    quote:
      "SEO used to feel like a black box. Their reporting made it crystal clear — 12 keywords on page one in under 90 days. Our pipeline has never been fuller.",
    name: "David Chen",
    role: "Operations Lead",
    company: "Pacific Med Clinics",
    initials: "DC",
  },
];

export const portfolioClients: PortfolioClient[] = [
  { name: "Apex Home Services", industry: "Home Services" },
  { name: "Okafor Legal Group", industry: "Legal" },
  { name: "Pacific Med Clinics", industry: "Healthcare" },
  { name: "Crestline Realty", industry: "Real Estate" },
  { name: "NovaTech Solutions", industry: "Technology" },
  { name: "Sunrise Dental Co.", industry: "Dental" },
  { name: "Evergreen Finance", industry: "Finance" },
];

export const portfolioSteps: PortfolioStep[] = [
  {
    title: "Audit the Funnel",
    description:
      "We map traffic sources and identify drop-offs that creative can fix.",
  },
  {
    title: "Build the Asset Stack",
    description:
      "Design the visuals, copy, and proof pieces that match each stage.",
  },
  {
    title: "Deploy with VA Support",
    description:
      "Dedicated staff handles scheduling, inbox coverage, and routing.",
  },
  {
    title: "Measure and Refine",
    description:
      "Weekly reviews keep the portfolio evolving with performance data.",
  },
];
