import type { HTMLAttributes, ReactNode } from "react";

import { Card } from "../../components/card/card";
import { cn } from "../../lib/cn";

export type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  value: ReactNode;
  hint?: ReactNode;
};

export function StatCard({ className, label, value, hint, ...props }: StatCardProps) {
  return (
    <Card className={cn("space-y-2", className)} elevated {...props}>
      <div className="text-sm text-[var(--muted-foreground)]">{label}</div>
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      {hint ? <div className="text-sm text-[var(--muted-foreground)]">{hint}</div> : null}
    </Card>
  );
}
