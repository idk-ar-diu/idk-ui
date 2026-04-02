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
          "w-full rounded-[var(--radius-control)] border bg-white text-[var(--foreground)] shadow-none transition-colors duration-200 outline-none placeholder:text-[var(--muted-foreground)]",
          "border-[var(--input)] focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10 disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)]",
          invalid && "border-[var(--danger)] focus:border-[var(--danger)] focus:ring-[var(--danger)]/10",
          sizeClasses[inputSize],
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
