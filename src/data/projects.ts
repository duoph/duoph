export type Project = {
  id: string;
  name: string;
  industry: string;
  services: string[];
  description: string;
  website?: string;
  caseStudy?: string;
  accent: string;
  status: "live" | "coming-soon";
};

export const projects: Project[] = [
  {
    id: "productshare",
    name: "ProductShare",
    industry: "SaaS / Marketplace",
    services: ["Web App", "UI/UX", "Branding"],
    description:
      "A product discovery platform that helps brands share catalogues and convert interest into enquiries — built for speed, clarity, and growth.",
    website: "#",
    accent: "#18704E",
    status: "live",
  },
  {
    id: "marhaba",
    name: "Marhaba Seafood",
    industry: "Restaurants / F&B",
    services: ["Website", "Branding", "SEO"],
    description:
      "A premium seafood brand presence designed to drive reservations and online orders while reflecting the quality of the dining experience.",
    website: "#",
    accent: "#0F4C3A",
    status: "live",
  },
  {
    id: "idesign",
    name: "I Design Interio",
    industry: "Interior Design",
    services: ["Website", "UI/UX", "Marketing"],
    description:
      "A portfolio-led website that turns design work into client conversations — showcasing projects, services, and a clear path to book a consultation.",
    website: "#",
    accent: "#145C42",
    status: "live",
  },
  {
    id: "hridya",
    name: "Hridya",
    industry: "Healthcare",
    services: ["Software", "UI/UX", "Automation"],
    description:
      "Digital systems that simplify patient-facing workflows and help healthcare teams operate with less friction and more clarity.",
    website: "#",
    accent: "#1A6B4F",
    status: "live",
  },
  {
    id: "momo",
    name: "Momo Wagon",
    industry: "Food & Retail",
    services: ["Website", "Branding", "Ecommerce"],
    description:
      "A vibrant brand and ordering experience built to attract hungry customers and make every visit — online or offline — feel memorable.",
    website: "#",
    accent: "#0D3D30",
    status: "live",
  },
  {
    id: "future",
    name: "Your Next Project",
    industry: "Any Industry",
    services: ["Strategy", "Design", "Build"],
    description:
      "We're selective about what we take on. If you're ready to grow with technology that pays for itself — let's talk.",
    accent: "#18704E",
    status: "coming-soon",
  },
];
