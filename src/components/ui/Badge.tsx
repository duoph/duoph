import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-wide",
        light
          ? "border border-white/15 bg-white/8 text-white/85 backdrop-blur-sm"
          : "border border-[#18704E]/20 bg-[#18704E]/8 text-[#18704E]",
        className,
      )}
    >
      {children}
    </span>
  );
}
