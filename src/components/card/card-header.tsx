import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";

export type CardHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
};

export function CardHeader({ className, title, description, action, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)} {...props}>
      <div className="min-w-0 space-y-1">
        {title ? <div className="text-base font-semibold">{title}</div> : null}
        {description ? <div className="text-sm text-[var(--muted-foreground)]">{description}</div> : null}
        {children}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
