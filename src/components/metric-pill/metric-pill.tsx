import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";

export type MetricPillTone = "neutral" | "success" | "danger";

export type MetricPillProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: MetricPillTone;
};

const toneClasses: Record<MetricPillTone, string> = {
  neutral: "bg-neutral-50 text-neutral-700 ring-neutral-200",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  danger: "bg-red-50 text-red-700 ring-red-200"
};

export function MetricPill({ children, tone = "neutral", className, ...props }: MetricPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
