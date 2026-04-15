import type { DragEventHandler } from "react";

import { cn } from "../../lib/cn";

export type CourseChipProps = {
  id?: string;
  onDragStart: DragEventHandler<HTMLDivElement>;
  onDragEnd?: () => void;
  onDoubleClick?: () => void;
  name: string;
  credits: number;
  grade: string;
  isMajorRequirement: boolean;
  isDisabled: boolean;
  className?: string;
};

export function CourseChip({
  id,
  onDragStart,
  onDragEnd,
  onDoubleClick,
  name,
  credits,
  grade,
  isMajorRequirement,
  isDisabled,
  className
}: CourseChipProps) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDoubleClick={onDoubleClick}
      data-id={id}
      className={cn(
        "select-none cursor-grab rounded-[var(--radius-2xl)] border px-3 py-2 text-neutral-900 active:cursor-grabbing",
        isDisabled
          ? "border-neutral-300 bg-neutral-100 opacity-60"
          : isMajorRequirement
            ? "border-emerald-200 bg-emerald-50"
            : "border-sky-200 bg-sky-50",
        className
      )}
      aria-grabbed="true"
      title="Drag to move | Double-click to edit"
    >
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1 break-all text-[13px] font-semibold leading-5">{name}</div>

        <div className="shrink-0 whitespace-nowrap text-[11px] font-semibold text-neutral-500">{credits} cr</div>

        <div
          className={cn(
            "shrink-0 whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-semibold",
            isDisabled ? "bg-neutral-400 text-white" : "bg-neutral-900 text-white"
          )}
        >
          {grade}
        </div>
      </div>
    </div>
  );
}
