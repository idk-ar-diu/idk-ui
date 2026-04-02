import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 flex items-center justify-end gap-3", className)} {...props} />;
}
