"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHead } from "@/components/home/ui";
import { processSteps } from "@/data/home";

export default function Process() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  // Highlight the step closest to the middle of the viewport as the user scrolls.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="dh-section dh-wrap" aria-labelledby="process-title">
      <SectionHead
        id="process-title"
        tag="How we work"
        title={
          <>
            From first conversation to
            <br />
            final launch.
          </>
        }
        intro="Good results come from a clear process. We keep things simple, collaborative, and focused on getting the details right."
      />
      <div className="dh-process">
        <div className="dh-process__media">
          <div className="dh-process__img">
            <Image src="/images/figma/process.png" alt="A laptop and notebook on a desk in a calm green workspace" fill sizes="(max-width: 900px) 100vw, 667px" />
          </div>
        </div>
        <div
          className="dh-process__rail"
          aria-hidden="true"
          style={{ "--step": active, "--steps": processSteps.length } as React.CSSProperties}
        />
        <ol className="dh-process__steps">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              data-index={index}
              ref={(el) => {
                items.current[index] = el;
              }}
              className={index === active ? "is-active" : undefined}
              onMouseEnter={() => setActive(index)}
            >
              <span className="dh-num">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
