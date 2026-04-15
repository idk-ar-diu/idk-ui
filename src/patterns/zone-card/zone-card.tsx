import type { DragEvent, ReactNode } from "react";

import { cn } from "../../lib/cn";

export type ZoneCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  isActive?: boolean;
  onTitleDoubleClick?: () => void;
  className?: string;
};

export function ZoneCard({
  title,
  subtitle,
  children,
  onDragOver,
  onDrop,
  isActive = false,
  onTitleDoubleClick,
  className
}: ZoneCardProps) {
  return (
    <div
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={cn(
        "relative flex h-[320px] flex-col gap-2 rounded-[var(--radius-2xl)] border bg-white p-3 shadow-sm ring-1",
        isActive ? "border-neutral-900 ring-neutral-900/10" : "border-neutral-200 ring-black/5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div
            className="truncate text-xs font-semibold text-neutral-800"
            onDoubleClick={(e) => {
              e.stopPropagation();
              onTitleDoubleClick?.();
            }}
            title="Double-click to edit"
          >
            {title}
          </div>
          {subtitle ? <div className="mt-0.5 text-[11px] text-neutral-500">{subtitle}</div> : null}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-auto pr-1">{children}</div>
    </div>
  );
}
