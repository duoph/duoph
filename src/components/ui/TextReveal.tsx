"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLiteMotion } from "@/hooks/useLiteMotion";

type TextRevealProps = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
};

export function TextReveal({
  children,
  className,
  as: Tag = "h2",
  delay = 0,
}: TextRevealProps) {
  const lite = useLiteMotion();
  const words = children.split(" ");

  if (lite) {
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  return (
    <Tag className={cn(className)}>
      <span className="sr-only">{children}</span>
      <motion.span
        aria-hidden
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.045, delayChildren: delay }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
