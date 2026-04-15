import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

import { cn } from "../../lib/cn";

type InputSize = "sm" | "md" | "lg";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  inputSize?: InputSize;
};

const sizeClasses: Record<InputSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-4 text-base"
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid = false, inputSize = "md", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-[var(--radius-control)] border bg-white text-[var(--foreground)] shadow-none outline-none placeholder:text-[var(--muted-foreground)]",
          "transition-[transform,border-color,box-shadow,background-color] duration-200 ease-out",
          "border-[var(--input)] hover:border-[var(--foreground)]/18 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]",
          "focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10 focus:shadow-[0_12px_28px_rgba(15,23,42,0.08)]",
          "disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)] disabled:hover:translate-y-0 disabled:hover:border-[var(--input)] disabled:hover:shadow-none",
          invalid && "border-[var(--danger)] hover:border-[var(--danger)]/80 focus:border-[var(--danger)] focus:ring-[var(--danger)]/10",
          sizeClasses[inputSize],
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
