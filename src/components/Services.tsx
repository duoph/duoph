"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  TrendingUp, 
  Share2, 
  Zap 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Development",
    icon: <Code2 size={24} />,
    description: "We design and develop fast, secure, and scalable websites tailored to your business goals. From corporate websites to custom web platforms, our focus is on clean design, performance, and long-term maintainability. Every website we build is responsive, SEO-friendly, and optimized for real users—not just visuals.",
    color: "from-primary to-[#0f5538]"
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone size={24} />,
    description: "We build reliable mobile applications that solve real business problems. From concept to deployment, we handle UI/UX, backend integration, and performance optimization. Our apps are designed for usability, scalability, and smooth user experience across devices.",
    color: "from-blue-500 to-primary"
  },
  {
    title: "E-commerce Websites (Shopify)",
    icon: <ShoppingBag size={24} />,
    description: "We create high-converting Shopify stores built for growth. This includes custom theme development, product setup, payment gateway integration, automation, and performance optimization. Our approach focuses on conversion, speed, and easy management so you can scale without friction.",
    color: "from-accent to-orange-600"
  },
  {
    title: "Digital Marketing",
    icon: <TrendingUp size={24} />,
    description: "Our digital marketing strategies are data-driven and result-oriented. We help businesses grow visibility, generate quality leads, and improve conversions through SEO, paid campaigns, email marketing, and analytics-based optimization. No guesswork—only measurable outcomes.",
    color: "from-primary to-accent"
  },
  {
    title: "Social Media Management",
    icon: <Share2 size={24} />,
    description: "We manage and grow social media accounts with a clear brand voice and consistent strategy. From content planning and creatives to posting schedules and performance tracking, we help brands build engagement and trust across platforms.",
    color: "from-blue-400 to-primary"
  },
  {
    title: "Automation & Process Optimization",
    icon: <Zap size={24} />,
    description: "We design and implement automation solutions that reduce manual work and improve efficiency. From CRM and marketing automation to internal workflows and system integrations, we help businesses save time, reduce errors, and operate smarter using modern tools and custom solutions.",
    color: "from-yellow-500 to-accent"
  }
];

const ServiceCard = ({ service }: { service: any }) => {
  return (
    <div data-card className="group relative perspective-1000">
      <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl -z-10 blur-xl`} />
      
      <div className="glass h-full p-8 rounded-3xl border border-black/10 group-hover:border-black/15 transition-all duration-500 preserve-3d group-hover:-translate-y-2 group-hover:transform-[rotateX(4deg)_rotateY(-5deg)_translateY(-8px)]">
        <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-black group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-black/60 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-services='heading']",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );

      gsap.fromTo(
        "[data-card]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 70%", once: true },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="services" className="py-24 bg-black/0">
      <div className="container mx-auto px-6">
        <div data-services="heading" className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black">
            Digital solutions built for <span className="text-glow">performance</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

