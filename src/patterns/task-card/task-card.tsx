import type { HTMLAttributes, ReactNode } from "react";

import { Badge } from "../../components/badge/badge";
import { Button } from "../../components/button/button";
import { Card } from "../../components/card/card";
import { ProgressBar } from "../../components/progress-bar/progress-bar";
import { cn } from "../../lib/cn";

type TaskCardStatus = "queued" | "running" | "completed" | "failed" | "cancelled" | "idle";

export type TaskCardItem = {
  id: string;
  title: ReactNode;
  meta?: ReactNode;
  status?: TaskCardStatus;
  progress?: number;
  error?: ReactNode;
  actions?: ReactNode;
};

export type TaskCardProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  subtitle?: ReactNode;
  status?: TaskCardStatus;
  tags?: ReactNode;
  meta?: ReactNode;
  error?: ReactNode;
  primaryAction?: {
    label: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  };
  secondaryAction?: {
    label: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
  };
  items?: TaskCardItem[];
};

const badgeVariantMap: Record<TaskCardStatus, "neutral" | "success" | "info" | "danger"> = {
  queued: "neutral",
  running: "info",
  completed: "success",
  failed: "danger",
  cancelled: "neutral",
  idle: "neutral",
};

function formatStatus(status: TaskCardStatus) {
  if (status === "queued") return "Queued";
  if (status === "running") return "Running";
  if (status === "completed") return "Completed";
  if (status === "failed") return "Failed";
  if (status === "cancelled") return "Cancelled";
  return "Idle";
}

export function TaskCard({
  className,
  title,
  subtitle,
  status = "idle",
  tags,
  meta,
  error,
  primaryAction,
  secondaryAction,
  items = [],
  ...props
}: TaskCardProps) {
  return (
    <Card className={cn("space-y-4", className)} {...props}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={badgeVariantMap[status]}>{formatStatus(status)}</Badge>
            {tags}
          </div>
          <div>
            <div className="text-lg font-semibold leading-tight">{title}</div>
            {subtitle ? <div className="mt-1 text-sm text-[var(--muted-foreground)]">{subtitle}</div> : null}
          </div>
        </div>

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap gap-2">
            {secondaryAction ? (
              <Button
                variant="secondary"
                size="sm"
                onClick={secondaryAction.onClick}
                disabled={secondaryAction.disabled}
              >
                {secondaryAction.label}
              </Button>
            ) : null}
            {primaryAction ? (
              <Button
                variant={status === "failed" ? "danger" : "primary"}
                size="sm"
                onClick={primaryAction.onClick}
                disabled={primaryAction.disabled}
              >
                {primaryAction.label}
              </Button>
            ) : null}
          </div>
        )}
      </div>

      {meta ? <div className="text-xs text-[var(--muted-foreground)]">{meta}</div> : null}

      {error ? (
        <div className="rounded-[calc(var(--radius-panel)-0.25rem)] bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
          {error}
        </div>
      ) : null}

      {items.length > 0 ? (
        <div className="grid gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-[calc(var(--radius-panel)-0.25rem)] border border-[var(--border)] bg-[var(--muted)] px-4 py-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-semibold">{item.title}</div>
                  {item.meta ? <div className="mt-1 text-xs text-[var(--muted-foreground)]">{item.meta}</div> : null}
                  {item.error ? <div className="mt-2 text-xs text-red-700">{item.error}</div> : null}
                </div>
                {item.status ? <Badge variant={badgeVariantMap[item.status]}>{formatStatus(item.status)}</Badge> : null}
              </div>

              {typeof item.progress === "number" ? (
                <div className="mt-3">
                  <ProgressBar value={item.progress} max={1} />
                </div>
              ) : null}

              {item.actions ? <div className="mt-3 flex flex-wrap gap-2">{item.actions}</div> : null}
            </div>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
