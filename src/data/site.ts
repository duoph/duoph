export const siteConfig = {
  name: "Duoph Technologies",
  shortName: "Duoph",
  tagline: "Technology that moves businesses forward",
  description:
    "Duoph Technologies helps businesses scale with custom software, websites, ERP/CRM, branding, and digital marketing.",
  url: "https://www.duoph.in",
  email: "admin@duoph.in",
  phone: "+91 9400244731",
  phoneHref: "tel:+919400244731",
  whatsapp: "https://wa.me/919400244731",
  officeHours: "Mon – Sat, 9:00 AM – 7:00 PM IST",
  address: "India · Serving clients worldwide",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.0!3d12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
  social: {
    instagram: "https://www.instagram.com/duoph.in/",
    linkedin: "https://www.linkedin.com/company/duoph/",
    facebook: "https://www.facebook.com/duoph.in/",
  },
  founders: {
    praveen: "https://www.praveenprasad.in/",
    hadi: "https://www.hadirazal.in/",
  },
} as const;

export const heroStats = [
  { value: 40, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "", label: "Countries" },
  { value: 2, suffix: "+", label: "Years Experience" },
] as const;

export const companyStats = [
  { value: 40, suffix: "+", label: "Projects Completed", description: "Websites, apps, and systems shipped" },
  { value: 5, suffix: "", label: "Countries Served", description: "India, UAE, KSA, Germany & UK" },
  { value: 20, suffix: "+", label: "Happy Clients", description: "Businesses that keep coming back" },
  { value: 2, suffix: "+", label: "Years Experience", description: "Building products that scale" },
  { value: 24, suffix: "h", label: "Response Time", description: "Typical first reply on new enquiries" },
  { value: 100, suffix: "%", label: "Support Availability", description: "Post-launch care when you need it" },
] as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
