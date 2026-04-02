export const colors = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  card: "var(--card)",
  cardForeground: "var(--card-foreground)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  border: "var(--border)",
  input: "var(--input)",
  primary: "var(--primary)",
  primaryForeground: "var(--primary-foreground)",
  success: "var(--success)",
  successForeground: "var(--success-foreground)",
  info: "var(--info)",
  infoForeground: "var(--info-foreground)",
  danger: "var(--danger)",
  dangerForeground: "var(--danger-foreground)"
} as const;

export const radius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  "3xl": "var(--radius-3xl)",
  control: "var(--radius-control)",
  button: "var(--radius-button)",
  panel: "var(--radius-panel)"
} as const;

export const shadows = {
  soft: "var(--shadow-soft)",
  card: "var(--shadow-card)",
  overlay: "var(--shadow-overlay)"
} as const;

export const motion = {
  fast: "150ms",
  normal: "220ms",
  slow: "320ms"
} as const;
