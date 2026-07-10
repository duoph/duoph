export type ServiceOffering = {
  id: string;
  title: string;
  summary: string;
  forWhom: string;
  benefit: string;
  items: string[];
};

export const services: ServiceOffering[] = [
  {
    id: "websites",
    title: "Website Development",
    summary:
      "Business websites, landing pages, corporate sites, ecommerce stores, and CMS platforms that turn visitors into customers.",
    forWhom: "SMEs, startups, retailers, and service businesses that need a credible online presence.",
    benefit: "More enquiries, clearer brand trust, and a site that works as a sales asset — not just a brochure.",
    items: [
      "Business Websites",
      "Landing Pages",
      "Corporate Websites",
      "Ecommerce",
      "CMS",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    summary:
      "Custom ERP, CRM, inventory, POS, automation tools, and API integrations tailored to how your business actually runs.",
    forWhom: "Growing companies ready to replace spreadsheets and disconnected tools with one reliable system.",
    benefit: "Fewer manual errors, faster operations, and software that scales as your team and revenue grow.",
    items: [
      "ERP",
      "CRM",
      "Inventory",
      "POS",
      "Automation",
      "API Integrations",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    summary:
      "Android, iOS, and cross-platform apps that put your product or service in your customers' pockets.",
    forWhom: "Businesses that need mobile ordering, field operations, or customer engagement on the go.",
    benefit: "Higher retention, easier access for customers, and a channel that stays with them every day.",
    items: ["Android", "iOS", "Cross Platform"],
  },
  {
    id: "branding",
    title: "Branding",
    summary:
      "Identity systems, logos, packaging, and brand profiles that make your business recognisable and consistent.",
    forWhom: "Founders and companies launching, rebranding, or aligning their look across every touchpoint.",
    benefit: "Stronger first impressions, clearer positioning, and a brand customers remember and trust.",
    items: ["Identity", "Logo", "Packaging", "Profiles"],
  },
  {
    id: "uiux",
    title: "UI / UX Design",
    summary:
      "Research-backed wireframes, prototypes, and interfaces designed so people can complete tasks without friction.",
    forWhom: "Product teams and businesses building apps or websites where usability drives conversion.",
    benefit: "Higher conversion rates, fewer drop-offs, and products people actually enjoy using.",
    items: ["Wireframes", "Research", "Prototype"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    summary:
      "SEO, Meta Ads, Google Ads, social media, and content that bring the right customers to your door.",
    forWhom: "Businesses that already have a product or service and need a steady pipeline of qualified leads.",
    benefit: "Predictable customer acquisition, better ad spend efficiency, and growth you can measure.",
    items: ["SEO", "Meta Ads", "Google Ads", "Social Media", "Content"],
  },
];
