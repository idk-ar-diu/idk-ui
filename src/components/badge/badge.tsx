import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";

type BadgeVariant = "neutral" | "success" | "info" | "danger";
type BadgeSize = "sm" | "md";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
};

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-[var(--muted)] text-[var(--foreground)] ring-1 ring-[var(--border)]",
  success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  info: "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
  danger: "bg-red-50 text-red-700 ring-1 ring-red-200"
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm"
};

export function Badge({ className, variant = "neutral", size = "sm", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium leading-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
