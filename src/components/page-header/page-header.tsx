import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";

export type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "start" | "center";
};

export function PageHeader({
  className,
  title,
  description,
  action,
  align = "start",
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-start sm:justify-between",
        align === "center" && "sm:items-center",
        className
      )}
      {...props}
    >
      <div className="min-w-0 space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">{title}</h1>
        {description ? <p className="text-sm text-[var(--muted-foreground)]">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
