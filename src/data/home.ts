import { services } from "@/data/services";

const img = (name: string) => `/images/figma/${name}`;

const serviceDisplay: Record<string, { title: [string, string]; image: string }> = {
  websites: { title: ["Website", "Development"], image: img("service-website.png") },
  software: { title: ["Software", "Development"], image: img("service-software.png") },
  mobile: { title: ["Mobile App", "Development"], image: img("service-mobile.png") },
  branding: { title: ["Branding &", "Identity"], image: img("service-branding.png") },
  uiux: { title: ["UI/UX", "Design"], image: img("service-uiux.png") },
  marketing: { title: ["Digital", "Marketing"], image: img("service-marketing.png") },
};

export const homeServices = services.map((service) => ({
  id: service.id,
  summary: service.summary,
  ...serviceDisplay[service.id],
}));

export const aboutPillars = [
  {
    title: "Built Around You",
    text: "Every business is different. We take time to understand your goals before creating the right solution.",
  },
  {
    title: "Design Meets Technology",
    text: "We bring creative ideas and reliable technology together to create meaningful digital experiences.",
  },
  {
    title: "Partnership Beyond Delivery",
    text: "Our relationship doesn't end at launch. We're here to support, improve, and grow with your business.",
  },
];

export const processSteps = [
  {
    title: "Discover & Understand",
    text: "We start by learning about your business, audience, challenges, and what you want to achieve.",
  },
  {
    title: "Plan & Strategize",
    text: "We define the right direction, outline the requirements, and create a clear roadmap for the project.",
  },
  {
    title: "Design & Develop",
    text: "Our team transforms the plan into a functional, visually engaging, and reliable digital solution.",
  },
  {
    title: "Launch & Grow",
    text: "We test, refine, and launch your project, with ongoing support to help it evolve.",
  },
];

export const differences = [
  {
    title: "Solutions That Make Sense",
    text: "We focus on solving actual business problems, not adding unnecessary complexity.",
    image: img("diff-solutions.png"),
  },
  {
    title: "A Team That Listens",
    text: "Your ideas matter. We collaborate closely and keep communication clear throughout the journey.",
    image: img("diff-team.png"),
  },
  {
    title: "Quality Without Compromise",
    text: "Every detail matters, from the first design concept to the final delivery.",
    image: img("diff-quality.png"),
  },
  {
    title: "Ready for What's Next",
    text: "We build with flexibility and scalability, so your digital solutions can grow alongside your business.",
    image: img("diff-growth.png"),
  },
];

export type Product = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  href: string;
};

export const products: Product[] = [
  {
    name: "ProductShare",
    category: "Digital catalogue platform",
    tagline: "Your products. One link.",
    description:
      "ProductShare makes showcasing and sharing products effortless. Create a digital catalogue, organize your products, and share everything through a single link. Designed for retailers, wholesalers, distributors, and manufacturers who want a simpler way to connect with customers.",
    features: [
      "Digital product catalogues",
      "Easy product management",
      "Shareable store links",
      "WhatsApp integration",
      "Simplified customer ordering",
      "No coding or design skills required",
    ],
    image: img("product-productshare.png"),
    href: "https://www.productshare.in/",
  },
  {
    name: "DealerStaq",
    category: "Dealership management software",
    tagline: "A smarter way to run your dealership",
    description:
      "DealerStaq brings essential dealership operations into one centralized platform. From managing vehicle inventory & customer relationships to organizing sales activities, it helps dealerships streamline everyday operations and stay in control of their business.",
    features: [
      "Vehicle inventory management",
      "Customer & lead management",
      "Centralized dealership operations",
      "Follow-up tracking",
      "Business workflow management",
      "Sales management",
    ],
    image: img("product-dealerstaq.png"),
    href: "https://www.dealerstaq.com/",
  },
  {
    name: "ExhibitionBase",
    category: "Exhibition CRM & lead management platform",
    tagline: "Every exhibition. Every exhibitor. Every opportunity. One platform.",
    description:
      "ExhibitionBase simplifies how businesses discover exhibitors, manage trade show activities, and generate opportunities. Using AI-powered data extraction, it transforms exhibition floor plans and exhibitor directories into organized, actionable business data.",
    features: [
      "Digital product catalogues",
      "Easy product management",
      "Shareable store links",
      "No coding or design skills required",
      "Simplified customer ordering",
      "WhatsApp integration",
    ],
    image: img("product-exhibitionbase.png"),
    href: "https://exhibitionbase.com/",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Our approach" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];
