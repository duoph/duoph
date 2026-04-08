"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: node, start: "top 80%", once: true },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div data-reveal className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Duoph</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">We ship outcomes, not just deliverables.</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div data-reveal className="glass p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 text-accent">Problem-Solving Mindset</h4>
              <p className="text-black/70 leading-relaxed">
                At Duoph, we approach every project with a strategy-first mentality. We don't just follow instructions; we analyze your business challenges and provide technical solutions that drive real growth.
              </p>
            </div>

            <div data-reveal className="glass p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 text-primary">Long-Term Partnerships</h4>
              <p className="text-black/70 leading-relaxed">
                We believe in growing with our clients. Our success is measured by your results. We provide continuous support and optimization to ensure your digital presence evolves with your business.
              </p>
            </div>

            <div data-reveal className="glass p-8 rounded-3xl md:col-span-2 text-center">
              <h4 className="text-xl font-bold mb-4 text-black">Results-Driven Approach</h4>
              <p className="text-black/70 leading-relaxed max-w-2xl mx-auto">
                No guesswork, only measurable outcomes. We use data to inform our decisions, ensuring that every design choice and line of code serves a specific business purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background circle */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default About;

