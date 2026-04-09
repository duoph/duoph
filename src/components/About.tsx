"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="about"
      className="py-24 relative overflow-hidden px-[20px] md:px-[110px] "
    >
      <div className="container ">
        <div className="max-w-4xl ">
          <div data-reveal className="text-center mb-16">
            <h2 className="font-monument text-primary font-bold tracking-widest uppercase text-sm mb-4">
              About Duoph
            </h2>
            <h3 className="font-monument text-4xl md:text-5xl font-bold mb-8">Our Story</h3>
          </div>

          <div>
            <p className="">
              Duoph Technologies is a dynamic and evolving digital solutions
              company founded by two friends,{" "}
              <Link
                href={"https://www.praveenprasad.in/"}
                target="_blank"
              >
                <span className="text-[#18704e] font-semibold cursor-pointer hover:underline">
                  Praveen
                </span>
              </Link>{" "}
              and{" "}
              <Link
                href={"https://www.hadirazal.in/"}
                target="_blank"
              >
                <span className="text-[#18704e] font-semibold cursor-pointer hover:underline">
                  Hadi
                </span>
              </Link>
              . The name “Duoph” reflects its origins -“Duo” representing the two
              founders, and “P” and “H” standing for Praveen and Hadi. <br />{" "}
              <br /> What began as a focused software development venture has
              steadily grown into a multi-disciplinary company offering services
              across marketing, automation, and digital transformation. With a
              strong foundation in technology and innovation, Duoph Technologies
              is committed to helping businesses streamline operations, enhance
              their digital presence, and achieve scalable growth. <br /> <br />{" "}
              Today, Duoph Technologies proudly serves clients across India,
              UAE, Saudi Arabia, Germany, and the UK, delivering tailored
              solutions that combine technical expertise with strategic insight.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative background circle */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default About;
