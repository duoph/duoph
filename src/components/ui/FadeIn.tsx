"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLiteMotion } from "@/hooks/useLiteMotion";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  ...props
}: FadeInProps) {
  const lite = useLiteMotion();

  // Mobile / touch: render immediately — never hide behind opacity:0
  if (lite) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 1, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
