import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "../../lib/cn";

type CardPadding = "none" | "sm" | "md" | "lg";

export type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    padding?: CardPadding;
    elevated?: boolean;
  }
>;

const paddingClasses: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
};

export function Card({ className, padding = "md", elevated = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-3xl)] border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)]",
        "rounded-[var(--radius-panel)]",
        paddingClasses[padding],
        elevated ? "shadow-[var(--shadow-card)]" : "shadow-none",
        className
      )}
      {...props}
    />
  );
}
