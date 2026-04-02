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
      <label className={cn("flex items-start gap-3 text-sm text-[var(--foreground)]", className)} htmlFor={inputId}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className="mt-1 size-4 rounded border-[var(--input)] text-[var(--primary)] focus:ring-[var(--primary)]"
          {...props}
        />
        {(label || description) && (
          <span className="flex min-w-0 flex-col gap-1">
            {label ? <span className="font-medium">{label}</span> : null}
            {description ? <span className="text-[var(--muted-foreground)]">{description}</span> : null}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
