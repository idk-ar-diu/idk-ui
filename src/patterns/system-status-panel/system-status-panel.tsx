import type { HTMLAttributes, ReactNode } from "react";

import { Badge } from "../../components/badge/badge";
import { Card } from "../../components/card/card";
import { cn } from "../../lib/cn";

export type SystemStatusCheck = {
  name: ReactNode;
  ok: boolean;
  detail?: ReactNode;
};

export type SystemStatusPanelProps = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode;
  statusLabel?: ReactNode;
  online?: boolean;
  emptyLabel?: ReactNode;
  checks?: SystemStatusCheck[];
};

export function SystemStatusPanel({
  className,
  title = "System",
  statusLabel,
  online,
  emptyLabel = "Loading...",
  checks = [],
  ...props
}: SystemStatusPanelProps) {
  const hasChecks = checks.length > 0;

  return (
    <Card className={cn("space-y-4", className)} padding="sm" {...props}>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold">{title}</div>
        {typeof online === "boolean" ? (
          <Badge variant={online ? "success" : "danger"}>{statusLabel ?? (online ? "Ready" : "Offline")}</Badge>
        ) : (
          <div className="text-xs text-[var(--muted-foreground)]">{statusLabel ?? emptyLabel}</div>
        )}
      </div>

      {hasChecks ? (
        <div className="grid gap-2">
          {checks.map((check, index) => (
            <div
              key={index}
              className="rounded-[calc(var(--radius-panel)-0.5rem)] border border-[var(--border)] bg-[var(--muted)] px-3 py-2.5"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs font-semibold">{check.name}</div>
                  {check.detail ? (
                    <div className="mt-1 text-xs text-[var(--muted-foreground)]">{check.detail}</div>
                  ) : null}
                </div>
                <Badge size="sm" variant={check.ok ? "success" : "danger"}>
                  {check.ok ? "Ready" : "Issue"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
