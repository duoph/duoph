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
  y = 28,
  ...props
}: FadeInProps) {
  const lite = useLiteMotion();

  if (lite) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
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
