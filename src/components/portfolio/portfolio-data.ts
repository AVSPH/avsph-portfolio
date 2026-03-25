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
};

export type PortfolioStep = {
  title: string;
  description: string;
};

export const portfolioStats: PortfolioStat[] = [
  {
    value: "Multi-format",
    label: "Images, PDFs, and long-form visuals ready for delivery",
  },
  {
    value: "Conversion-first",
    label: "Every asset is designed to push visitors to action",
  },
  {
    value: "System-ready",
    label: "Built to fit SOPs, CRMs, and follow-up workflows",
  },
];

export const featuredWork: PortfolioFeature[] = [
  {
    id: "brand-playbook",
    title: "Brand Playbook Kit",
    category: "Branding",
    type: "pdf",
    summary: "Full identity guide with fonts, color system, and usage rules.",
    highlight: "Designed for consistent rollouts across ads and web.",
    tags: ["Identity", "Guidelines", "Collateral"],
    format: "PDF • 18 pages",
  },
  {
    id: "service-ads",
    title: "Service Ad Creative Set",
    category: "Paid Ads",
    type: "image",
    summary: "High-contrast creatives built for scroll-stopping results.",
    highlight: "Optimized for fast testing across platforms.",
    tags: ["Meta", "Google", "Retargeting"],
    format: "PNG • 6 variations",
  },
  {
    id: "seo-proof",
    title: "SEO Growth Snapshot",
    category: "SEO Proof",
    type: "pdf",
    summary: "Rankings, traffic lift, and visibility highlights.",
    highlight: "Packaged for proposals and sales conversations.",
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
  },
  {
    title: "Operational Support",
    description:
      "Dedicated VA coverage keeps every lead moving with clean follow-ups.",
  },
  {
    title: "Continuous Optimization",
    description:
      "We monitor results and keep refining the creative stack.",
  },
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

