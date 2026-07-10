"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20 });
  const springY = useSpring(y, { stiffness: 280, damping: 20 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.22);
    y.set(dy * 0.22);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const styles = {
    primary:
      "bg-[#18704E] text-white shadow-[0_12px_40px_rgba(24,112,78,0.28)] hover:brightness-110",
    secondary:
      "border border-white/35 bg-transparent text-white hover:border-white/55 hover:bg-white/5",
    ghost:
      "border border-black/12 bg-white text-black hover:border-[#18704E]/40 hover:text-[#18704E]",
    dark: "bg-black text-white hover:bg-black/90",
  }[variant];

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300",
        styles,
        disabled && "pointer-events-none opacity-60",
        className,
      )}
    >
      {children}
    </motion.div>
  );

  const wrapperClass = cn(
    "inline-flex rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18704E]/50 focus-visible:ring-offset-2",
    className?.includes("w-full") && "w-full",
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={wrapperClass}
        onClick={onClick}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      className={wrapperClass}
    >
      {inner}
    </button>
  );
}
