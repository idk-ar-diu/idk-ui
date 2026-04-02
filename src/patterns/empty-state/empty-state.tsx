import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
};

export function EmptyState({ className, title, description, action, ...props }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-3xl)] border border-dashed border-[var(--border)] bg-white px-6 py-10 text-center",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-md space-y-2">
        <div className="text-lg font-semibold">{title}</div>
        {description ? <div className="text-sm text-[var(--muted-foreground)]">{description}</div> : null}
        {action ? <div className="pt-3">{action}</div> : null}
      </div>
    </div>
  );
}
