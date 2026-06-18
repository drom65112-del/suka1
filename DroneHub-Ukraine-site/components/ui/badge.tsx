import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type BadgeVariant = "accent" | "info" | "success" | "neutral" | "danger";

const variantClasses: Record<BadgeVariant, string> = {
  accent: "border-yellow-300/30 bg-yellow-300/12 text-yellow-200",
  info: "border-sky-300/30 bg-sky-300/12 text-sky-200",
  success: "border-emerald-300/30 bg-emerald-300/12 text-emerald-200",
  neutral: "border-white/15 bg-white/8 text-slate-200",
  danger: "border-red-300/30 bg-red-300/12 text-red-200",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs leading-none font-bold tracking-wide",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
