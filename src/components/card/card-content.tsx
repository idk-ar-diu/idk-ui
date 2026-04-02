import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4", className)} {...props} />;
}
