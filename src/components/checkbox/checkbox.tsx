import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: ReactNode;
  description?: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <label
        className={cn(
          "group flex cursor-pointer items-start gap-3 rounded-[calc(var(--radius-control)-0.1rem)] text-sm text-[var(--foreground)]",
          className
        )}
        htmlFor={inputId}
      >
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={cn(
            "peer sr-only"
          )}
          {...props}
        />
        <span
          aria-hidden="true"
          className={cn(
            "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[0.7rem] border bg-white text-white",
            "transition-[transform,border-color,box-shadow,background-color] duration-200 ease-out",
            "border-[var(--input)] shadow-[0_2px_10px_rgba(15,23,42,0.04)] group-hover:scale-105 group-hover:border-[var(--foreground)]/18 group-hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]",
            "peer-focus-visible:border-[var(--foreground)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--foreground)]/10",
            "peer-checked:border-[var(--primary)] peer-checked:bg-[var(--primary)] peer-checked:shadow-[0_10px_24px_rgba(15,23,42,0.16)]",
            "peer-disabled:border-[var(--input)] peer-disabled:bg-[var(--muted)] peer-disabled:shadow-none group-has-[:disabled]:cursor-not-allowed group-has-[:disabled]:pointer-events-none"
          )}
        >
          <svg
            viewBox="0 0 20 20"
            className="size-3.5 scale-75 opacity-0 transition-all duration-200 ease-out peer-checked:scale-100 peer-checked:opacity-100"
            fill="none"
          >
            <path d="M5 10.5L8.5 14L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {(label || description) && (
          <span className="flex min-w-0 flex-col gap-1 pt-0.5">
            {label ? <span className="font-medium">{label}</span> : null}
            {description ? <span className="text-[var(--muted-foreground)]">{description}</span> : null}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
