import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

import { cn } from "../../lib/cn";

type TextareaResize = "none" | "vertical" | "auto";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
  resize?: TextareaResize;
};

const resizeClasses: Record<TextareaResize, string> = {
  none: "resize-none",
  vertical: "resize-y",
  auto: "resize"
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid = false, resize = "vertical", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-28 w-full rounded-[var(--radius-control)] border bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]",
          "transition-[transform,border-color,box-shadow,background-color] duration-200 ease-out",
          "border-[var(--input)] hover:border-[var(--foreground)]/18 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]",
          "focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10 focus:shadow-[0_12px_28px_rgba(15,23,42,0.08)]",
          "disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)] disabled:hover:translate-y-0 disabled:hover:border-[var(--input)] disabled:hover:shadow-none",
          invalid && "border-[var(--danger)] hover:border-[var(--danger)]/80 focus:border-[var(--danger)] focus:ring-[var(--danger)]/10",
          resizeClasses[resize],
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
