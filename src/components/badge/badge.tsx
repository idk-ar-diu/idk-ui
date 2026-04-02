import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";

type BadgeVariant = "neutral" | "success" | "info" | "danger";
type BadgeSize = "sm" | "md";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
};

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-[var(--muted)] text-[var(--foreground)]",
  success: "bg-[var(--success)]/12 text-[var(--success)]",
  info: "bg-[var(--info)]/12 text-[var(--info)]",
  danger: "bg-[var(--danger)]/12 text-[var(--danger)]"
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm"
};

export function Badge({ className, variant = "neutral", size = "sm", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-semibold leading-none tracking-[-0.01em]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
