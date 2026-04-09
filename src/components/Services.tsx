"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ServiceItem = {
  title: string;
  description: string;
};

const Services = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const services = useMemo<ServiceItem[]>(
    () => [
      {
        title: "Branding",
        description:
          "Branding builds a strong identity that people remember. We craft positioning, messaging, and visual systems that stay consistent across every touchpoint.",
      },
      {
        title: "Development",
        description:
          "We build fast, secure websites and web apps with clean architecture, strong performance, and scalable foundations that grow with your business.",
      },
      {
        title: "UI/UX Design",
        description:
          "UI/UX design is designing digital interfaces for a great user experience.",
      },
      {
        title: "Graphic Design",
        description:
          "From social creatives to brand assets, we produce sharp design that supports your message and keeps everything visually consistent.",
      },
      {
        title: "SEO",
        description:
          "Technical SEO, on-page optimization, and content strategy that improves search visibility and drives qualified traffic over time.",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(2);

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
        },
      );

      gsap.fromTo(
        "[data-services='row']",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 70%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const active = services[activeIndex];
  const prev = () =>
    setActiveIndex((i) => (i - 1 + services.length) % services.length);
  const next = () => setActiveIndex((i) => (i + 1) % services.length);

  return (
    <section
      ref={rootRef}
      id="services"
      className="relative overflow-hidden py-24 text-black bg-white md:px-[110px] px-[20px]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-28 h-[420px] w-[420px] rounded-full bg-primary/18 blur-[120px]" />
        <div className="absolute -right-28 -bottom-36 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6">
        <div
          data-services="heading"
          className="flex flex-col items-start gap-10 lg:flex-row lg:gap-16"
        >
          <div>
            <div className="text-xs font-semibold tracking-widest text-[#18704e]">
              OUR SERVICES
            </div>
            <h3 className="font-monument mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl ">
              What <span className="text-[#18704e]">Services</span>
              <br />
              We’re Offering
            </h3>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-black lg:mt-2">
            We offer services that can help businesses improve their visibility
            and business reputation online, expand market reach, and increase
            turnover through effective digital strategies. Following are the
            services we provide.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="relative lg:flex-[1.35]">
            <div className="divide-y divide-white/12 overflow-hidden rounded-3xl border border-white/12 bg-white/0">
              {services.map((s, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={s.title}
                    type="button"
                    data-services="row"
                    onClick={() => setActiveIndex(idx)}
                    className="group flex w-full items-center justify-between gap-10 px-6 py-7 text-left transition-colors hover:bg-white/2 md:px-8"
                  >
                    <div className="min-w-0">
                      <div
                        className={[
                          "font-monument text-3xl font-semibold tracking-tight md:text-4xl",
                          isActive ? "text-[#18704e]" : "text-black",
                        ].join(" ")}
                      >
                        {s.title}
                        {isActive ? (
                          <span className="text-[#18704e] ">.</span>
                        ) : null}
                      </div>

                      {isActive ? (
                        <p className="mt-3  leading-relaxed text-black md:hidden">
                          {s.description}
                        </p>
                      ) : null}
                    </div>

                    <div className="hidden max-w-lg items-center gap-10 md:flex">
                      <p
                        className={[
                          "text-[18px] leading-relaxed",
                          isActive ? "text-black" : "text-black",
                        ].join(" ")}
                      >
                        {s.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
