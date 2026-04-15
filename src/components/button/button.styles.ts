import type { ButtonSize, ButtonVariant } from "./button.types";

export const buttonBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-button)] border text-sm font-semibold shadow-[var(--shadow-soft)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-black/85 focus-visible:ring-[var(--primary)]",
  secondary:
    "border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[var(--muted)] focus-visible:ring-[var(--foreground)]",
  danger:
    "border-transparent bg-[var(--danger)] text-[var(--danger-foreground)] hover:bg-red-700 focus-visible:ring-[var(--danger)]",
  ghost:
    "border-transparent bg-transparent text-[var(--foreground)] shadow-none hover:bg-[var(--muted)] focus-visible:ring-[var(--foreground)]"
};

export const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base"
};
