import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";

type ProgressTone = "accent" | "success" | "danger" | "neutral";

export type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
  value: number;
  max?: number;
  tone?: ProgressTone;
  animated?: boolean;
};

const railClasses: Record<ProgressTone, string> = {
  accent: "bg-[linear-gradient(180deg,rgba(11,15,29,0.96)_0%,rgba(22,16,37,0.98)_100%)] ring-1 ring-fuchsia-300/15",
  success: "bg-[linear-gradient(180deg,rgba(8,18,20,0.96)_0%,rgba(11,28,24,0.98)_100%)] ring-1 ring-emerald-300/15",
  danger: "bg-[linear-gradient(180deg,rgba(20,10,16,0.96)_0%,rgba(34,14,22,0.98)_100%)] ring-1 ring-rose-300/15",
  neutral: "bg-[linear-gradient(180deg,rgba(12,16,24,0.96)_0%,rgba(20,24,34,0.98)_100%)] ring-1 ring-white/10",
};

const fillClasses: Record<ProgressTone, string> = {
  accent: "bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.34),transparent_18%),linear-gradient(90deg,#6d28d9_0%,#a21caf_48%,#ec4899_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.16)_inset,0_0_22px_rgba(217,70,239,0.3)]",
  success: "bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.3),transparent_18%),linear-gradient(90deg,#0f766e_0%,#14b8a6_52%,#5eead4_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.14)_inset,0_0_22px_rgba(45,212,191,0.26)]",
  danger: "bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.28),transparent_18%),linear-gradient(90deg,#be123c_0%,#e11d48_48%,#fb7185_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.14)_inset,0_0_22px_rgba(244,63,94,0.28)]",
  neutral: "bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.22),transparent_18%),linear-gradient(90deg,#475569_0%,#64748b_52%,#cbd5e1_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_18px_rgba(148,163,184,0.2)]",
};

export function ProgressBar({ className, value, max = 100, tone = "accent", animated = false, ...props }: ProgressBarProps) {
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100;
  const percent = Math.max(0, Math.min(100, (value / safeMax) * 100));
  const showShimmer = animated && percent > 0 && percent < 100;

  return (
    <div
      className={cn("relative h-3 overflow-hidden rounded-full", railClasses[tone], className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={Math.round(Math.max(0, Math.min(safeMax, value)))}
      {...props}
    >
      <div
        className={cn(
          "idk-ui-animate-progress-orbit relative h-full overflow-hidden rounded-full transition-[width] duration-500 ease-out",
          fillClasses[tone]
        )}
        style={{ width: `${percent}%` }}
      >
        {showShimmer ? (
          <span
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden rounded-full"
          >
            <span className="idk-ui-animate-progress-stripes absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.12)_10px,rgba(255,255,255,0.12)_20px)] opacity-90 mix-blend-screen" />
            <span className="idk-ui-animate-progress-shimmer absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_28%,rgba(255,255,255,0.34)_50%,rgba(255,255,255,0.03)_72%,transparent_100%)]" />
            <span className="idk-ui-animate-progress-bob absolute right-1 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
          </span>
        ) : null}
      </div>
    </div>
  );
}
