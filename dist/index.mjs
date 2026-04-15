// src/components/button/button.tsx
import { forwardRef } from "react";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/button/button.styles.ts
var buttonBase = "inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] border text-sm font-semibold shadow-[var(--shadow-soft)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
var buttonVariants = {
  primary: "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-black/85 focus-visible:ring-[var(--primary)]",
  secondary: "border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[var(--muted)] focus-visible:ring-[var(--foreground)]",
  danger: "border-transparent bg-[var(--danger)] text-[var(--danger-foreground)] hover:bg-red-700 focus-visible:ring-[var(--danger)]",
  ghost: "border-transparent bg-transparent text-[var(--foreground)] shadow-none hover:bg-[var(--muted)] focus-visible:ring-[var(--foreground)]"
};
var buttonSizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base"
};

// src/components/button/button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = forwardRef(
  ({
    className,
    variant = "primary",
    size = "md",
    loading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: cn(
          buttonBase,
          buttonVariants[variant],
          buttonSizes[size],
          fullWidth && "w-full",
          className
        ),
        disabled: disabled || loading,
        ...props,
        children: [
          loading ? /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-current opacity-70" }) : leftIcon,
          /* @__PURE__ */ jsx("span", { children }),
          !loading ? rightIcon : null
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/metric-pill/metric-pill.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var toneClasses = {
  neutral: "bg-neutral-50 text-neutral-700 ring-neutral-200",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  danger: "bg-red-50 text-red-700 ring-red-200"
};
function MetricPill({ children, tone = "neutral", className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1",
        toneClasses[tone],
        className
      ),
      ...props,
      children
    }
  );
}

// src/components/dialog/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var sizeClasses = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-2xl",
  xl: "max-w-4xl"
};
var DialogOverlay = forwardRef2(({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/40 idk-ui-animate-fade-in", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = forwardRef2(
  ({ className, children, title, description, size = "md", ...props }, ref) => /* @__PURE__ */ jsxs2(DialogPortal, { children: [
    /* @__PURE__ */ jsx3(DialogOverlay, {}),
    /* @__PURE__ */ jsxs2(
      DialogPrimitive.Content,
      {
        ref,
        className: cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-[var(--radius-panel)] border border-[var(--border)] bg-[var(--card)] p-5 text-[var(--card-foreground)] shadow-[var(--shadow-overlay)] outline-none idk-ui-animate-slide-up",
          sizeClasses[size],
          className
        ),
        ...props,
        children: [
          title || description ? /* @__PURE__ */ jsxs2("div", { className: "mb-4 space-y-1", children: [
            title ? /* @__PURE__ */ jsx3(DialogPrimitive.Title, { className: "text-lg font-semibold", children: title }) : null,
            description ? /* @__PURE__ */ jsx3(DialogPrimitive.Description, { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null
          ] }) : null,
          children
        ]
      }
    )
  ] })
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

// src/components/modal-shell/modal-shell.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function ModalShell({ open, title, children, onClose, size = "lg" }) {
  return /* @__PURE__ */ jsx4(Dialog, { open, onOpenChange: (nextOpen) => !nextOpen && onClose(), children: /* @__PURE__ */ jsxs3(DialogContent, { title, size, children: [
    /* @__PURE__ */ jsx4("div", { className: "absolute right-4 top-4", children: /* @__PURE__ */ jsx4(Button, { type: "button", variant: "ghost", size: "sm", onClick: onClose, className: "h-8 px-2.5", children: "Close" }) }),
    /* @__PURE__ */ jsx4("div", { className: "pt-1", children })
  ] }) });
}

// src/components/input/input.tsx
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var sizeClasses2 = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-4 text-base"
};
var Input = forwardRef3(
  ({ className, invalid = false, inputSize = "md", ...props }, ref) => {
    return /* @__PURE__ */ jsx5(
      "input",
      {
        ref,
        className: cn(
          "w-full rounded-[var(--radius-control)] border bg-white text-[var(--foreground)] shadow-none transition-colors duration-200 outline-none placeholder:text-[var(--muted-foreground)]",
          "border-[var(--input)] focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10 disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)]",
          invalid && "border-[var(--danger)] focus:border-[var(--danger)] focus:ring-[var(--danger)]/10",
          sizeClasses2[inputSize],
          className
        ),
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/textarea/textarea.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var resizeClasses = {
  none: "resize-none",
  vertical: "resize-y",
  auto: "resize"
};
var Textarea = forwardRef4(
  ({ className, invalid = false, resize = "vertical", ...props }, ref) => {
    return /* @__PURE__ */ jsx6(
      "textarea",
      {
        ref,
        className: cn(
          "min-h-28 w-full rounded-[var(--radius-control)] border bg-white px-4 py-3 text-sm text-[var(--foreground)] transition-colors duration-200 outline-none placeholder:text-[var(--muted-foreground)]",
          "border-[var(--input)] focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10 disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)]",
          invalid && "border-[var(--danger)] focus:border-[var(--danger)] focus:ring-[var(--danger)]/10",
          resizeClasses[resize],
          className
        ),
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/select/select.tsx
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var sizeClasses3 = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-4 text-base"
};
var Select = forwardRef5(
  ({ className, options, placeholder, invalid = false, selectSize = "md", ...props }, ref) => {
    const chevronIcon = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%236b7280' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;
    return /* @__PURE__ */ jsxs4(
      "select",
      {
        ref,
        className: cn(
          "w-full appearance-none rounded-[var(--radius-control)] border text-[var(--foreground)] outline-none transition-all duration-200",
          "border-[var(--input)] bg-[var(--card)] pr-11 shadow-[var(--shadow-soft)]",
          "focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10",
          "hover:border-[var(--foreground)]/20 hover:bg-white",
          "disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)] disabled:shadow-none",
          invalid && "border-[var(--danger)] focus:border-[var(--danger)] focus:ring-[var(--danger)]/10",
          sizeClasses3[selectSize],
          className
        ),
        style: {
          backgroundImage: chevronIcon,
          backgroundPosition: "right 0.95rem center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1rem"
        },
        ...props,
        children: [
          placeholder ? /* @__PURE__ */ jsx7("option", { value: "", disabled: true, children: placeholder }) : null,
          options.map((option) => /* @__PURE__ */ jsx7("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value))
        ]
      }
    );
  }
);
Select.displayName = "Select";

// src/components/checkbox/checkbox.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var Checkbox = forwardRef6(
  ({ className, label, description, id, ...props }, ref) => {
    const inputId = id ?? props.name;
    return /* @__PURE__ */ jsxs5("label", { className: cn("flex items-start gap-3 text-sm text-[var(--foreground)]", className), htmlFor: inputId, children: [
      /* @__PURE__ */ jsx8(
        "input",
        {
          ref,
          id: inputId,
          type: "checkbox",
          className: "mt-1 size-4 rounded border-[var(--input)] text-[var(--primary)] focus:ring-[var(--primary)]",
          ...props
        }
      ),
      (label || description) && /* @__PURE__ */ jsxs5("span", { className: "flex min-w-0 flex-col gap-1", children: [
        label ? /* @__PURE__ */ jsx8("span", { className: "font-medium", children: label }) : null,
        description ? /* @__PURE__ */ jsx8("span", { className: "text-[var(--muted-foreground)]", children: description }) : null
      ] })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/components/progress-bar/progress-bar.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var railClasses = {
  accent: "bg-[color:color-mix(in_srgb,var(--primary)_12%,transparent)]",
  success: "bg-emerald-100",
  danger: "bg-red-100",
  neutral: "bg-[var(--muted)]"
};
var fillClasses = {
  accent: "bg-[var(--primary)]",
  success: "bg-emerald-600",
  danger: "bg-red-600",
  neutral: "bg-[var(--foreground)]"
};
function ProgressBar({ className, value, max = 100, tone = "accent", ...props }) {
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100;
  const percent = Math.max(0, Math.min(100, value / safeMax * 100));
  return /* @__PURE__ */ jsx9(
    "div",
    {
      className: cn("h-2 overflow-hidden rounded-full", railClasses[tone], className),
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": safeMax,
      "aria-valuenow": Math.round(Math.max(0, Math.min(safeMax, value))),
      ...props,
      children: /* @__PURE__ */ jsx9(
        "div",
        {
          className: cn("h-full rounded-full transition-all duration-300", fillClasses[tone]),
          style: { width: `${percent}%` }
        }
      )
    }
  );
}

// src/components/dialog/dialog-footer.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx10("div", { className: cn("mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", className), ...props });
}

// src/components/dialog/dialog-header.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx11("div", { className: cn("flex flex-col space-y-1.5", className), ...props });
}

// src/components/badge/badge.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var variantClasses = {
  neutral: "bg-[var(--muted)] text-[var(--foreground)] ring-1 ring-[var(--border)]",
  success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  info: "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
  danger: "bg-red-50 text-red-700 ring-1 ring-red-200"
};
var sizeClasses4 = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm"
};
function Badge({ className, variant = "neutral", size = "sm", ...props }) {
  return /* @__PURE__ */ jsx12(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full font-medium leading-none",
        variantClasses[variant],
        sizeClasses4[size],
        className
      ),
      ...props
    }
  );
}

// src/components/card/card.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var paddingClasses = {
  none: "p-0",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
};
function Card({ className, padding = "md", elevated = false, ...props }) {
  return /* @__PURE__ */ jsx13(
    "div",
    {
      className: cn(
        "rounded-[var(--radius-panel)] border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)]",
        paddingClasses[padding],
        elevated ? "shadow-[var(--shadow-card)]" : "shadow-none",
        className
      ),
      ...props
    }
  );
}

// src/components/card/card-content.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx14("div", { className: cn("mt-4", className), ...props });
}

// src/components/card/card-footer.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx15("div", { className: cn("mt-4 flex items-center justify-end gap-3", className), ...props });
}

// src/components/card/card-header.tsx
import { jsx as jsx16, jsxs as jsxs6 } from "react/jsx-runtime";
function CardHeader({ className, title, description, action, children, ...props }) {
  return /* @__PURE__ */ jsxs6("div", { className: cn("flex items-start justify-between gap-4", className), ...props, children: [
    /* @__PURE__ */ jsxs6("div", { className: "min-w-0 space-y-1", children: [
      title ? /* @__PURE__ */ jsx16("div", { className: "text-base font-semibold", children: title }) : null,
      description ? /* @__PURE__ */ jsx16("div", { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null,
      children
    ] }),
    action ? /* @__PURE__ */ jsx16("div", { className: "shrink-0", children: action }) : null
  ] });
}

// src/components/toast/toast-provider.tsx
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { jsx as jsx17, jsxs as jsxs7 } from "react/jsx-runtime";
var ToastContext = createContext(null);
var toneClasses2 = {
  success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  info: "bg-white text-[var(--foreground)] ring-1 ring-[var(--border)]",
  danger: "bg-red-50 text-red-700 ring-1 ring-red-200"
};
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const dismiss = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);
  const show = useCallback((toast) => {
    const id = toast.id ?? crypto.randomUUID();
    setToasts((current) => [...current, { ...toast, id }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 3200);
  }, []);
  const value = useMemo(() => ({ show, dismiss }), [dismiss, show]);
  return /* @__PURE__ */ jsxs7(ToastContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsx17("div", { className: "pointer-events-none fixed bottom-4 left-1/2 z-[60] flex w-full max-w-sm -translate-x-1/2 flex-col gap-3 px-4", children: toasts.map((toast) => /* @__PURE__ */ jsxs7(
      "div",
      {
        className: cn(
          "pointer-events-auto rounded-[var(--radius-2xl)] px-4 py-2 text-sm font-semibold shadow-lg idk-ui-animate-slide-up",
          toneClasses2[toast.tone ?? "info"]
        ),
        children: [
          toast.title ? /* @__PURE__ */ jsx17("div", { children: toast.title }) : null,
          toast.description ? /* @__PURE__ */ jsx17("div", { className: cn(toast.title ? "mt-1 text-sm font-normal text-current/80" : ""), children: toast.description }) : null
        ]
      },
      toast.id
    )) })
  ] });
}
function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }
  return context;
}

// src/components/page-header/page-header.tsx
import { jsx as jsx18, jsxs as jsxs8 } from "react/jsx-runtime";
function PageHeader({
  className,
  title,
  description,
  action,
  align = "start",
  ...props
}) {
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      className: cn(
        "flex flex-col gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-start sm:justify-between",
        align === "center" && "sm:items-center",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs8("div", { className: "min-w-0 space-y-1", children: [
          /* @__PURE__ */ jsx18("h1", { className: "text-2xl font-semibold text-[var(--foreground)]", children: title }),
          description ? /* @__PURE__ */ jsx18("p", { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null
        ] }),
        action ? /* @__PURE__ */ jsx18("div", { className: "shrink-0", children: action }) : null
      ]
    }
  );
}

// src/patterns/section-card/section-card.tsx
import { jsx as jsx19, jsxs as jsxs9 } from "react/jsx-runtime";
function SectionCard({ title, description, action, children, ...props }) {
  return /* @__PURE__ */ jsxs9(Card, { ...props, children: [
    (title || description || action) && /* @__PURE__ */ jsx19(CardHeader, { title, description, action }),
    /* @__PURE__ */ jsx19(CardContent, { className: title || description || action ? void 0 : "mt-0", children })
  ] });
}

// src/patterns/stat-card/stat-card.tsx
import { jsx as jsx20, jsxs as jsxs10 } from "react/jsx-runtime";
function StatCard({ className, label, value, hint, ...props }) {
  return /* @__PURE__ */ jsxs10(Card, { className: cn("space-y-2", className), elevated: true, ...props, children: [
    /* @__PURE__ */ jsx20("div", { className: "text-sm text-[var(--muted-foreground)]", children: label }),
    /* @__PURE__ */ jsx20("div", { className: "text-3xl font-semibold tracking-tight", children: value }),
    hint ? /* @__PURE__ */ jsx20("div", { className: "text-sm text-[var(--muted-foreground)]", children: hint }) : null
  ] });
}

// src/patterns/empty-state/empty-state.tsx
import { jsx as jsx21, jsxs as jsxs11 } from "react/jsx-runtime";
function EmptyState({ className, title, description, action, ...props }) {
  return /* @__PURE__ */ jsx21(
    "div",
    {
      className: cn(
        "rounded-[var(--radius-3xl)] border border-dashed border-[var(--border)] bg-white px-6 py-10 text-center",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs11("div", { className: "mx-auto max-w-md space-y-2", children: [
        /* @__PURE__ */ jsx21("div", { className: "text-lg font-semibold", children: title }),
        description ? /* @__PURE__ */ jsx21("div", { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null,
        action ? /* @__PURE__ */ jsx21("div", { className: "pt-3", children: action }) : null
      ] })
    }
  );
}

// src/patterns/zone-card/zone-card.tsx
import { jsx as jsx22, jsxs as jsxs12 } from "react/jsx-runtime";
function ZoneCard({
  title,
  subtitle,
  children,
  onDragOver,
  onDrop,
  isActive = false,
  onTitleDoubleClick,
  className
}) {
  return /* @__PURE__ */ jsxs12(
    "div",
    {
      onDragOver,
      onDrop,
      className: cn(
        "relative flex h-[320px] flex-col gap-2 rounded-[var(--radius-2xl)] border bg-white p-3 shadow-sm ring-1",
        isActive ? "border-neutral-900 ring-neutral-900/10" : "border-neutral-200 ring-black/5",
        className
      ),
      children: [
        /* @__PURE__ */ jsx22("div", { className: "flex items-start justify-between gap-2", children: /* @__PURE__ */ jsxs12("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx22(
            "div",
            {
              className: "truncate text-xs font-semibold text-neutral-800",
              onDoubleClick: (e) => {
                e.stopPropagation();
                onTitleDoubleClick?.();
              },
              title: "Double-click to edit",
              children: title
            }
          ),
          subtitle ? /* @__PURE__ */ jsx22("div", { className: "mt-0.5 text-[11px] text-neutral-500", children: subtitle }) : null
        ] }) }),
        /* @__PURE__ */ jsx22("div", { className: "min-h-0 flex-1 overflow-auto pr-1", children })
      ]
    }
  );
}

// src/patterns/course-chip/course-chip.tsx
import { jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
function CourseChip({
  id,
  onDragStart,
  onDragEnd,
  onDoubleClick,
  name,
  credits,
  grade,
  isMajorRequirement,
  isDisabled,
  className
}) {
  return /* @__PURE__ */ jsx23(
    "div",
    {
      draggable: true,
      onDragStart,
      onDragEnd,
      onDoubleClick,
      "data-id": id,
      className: cn(
        "select-none cursor-grab rounded-[var(--radius-2xl)] border px-3 py-2 text-neutral-900 active:cursor-grabbing",
        isDisabled ? "border-neutral-300 bg-neutral-100 opacity-60" : isMajorRequirement ? "border-emerald-200 bg-emerald-50" : "border-sky-200 bg-sky-50",
        className
      ),
      "aria-grabbed": "true",
      title: "Drag to move | Double-click to edit",
      children: /* @__PURE__ */ jsxs13("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx23("div", { className: "min-w-0 flex-1 break-all text-[13px] font-semibold leading-5", children: name }),
        /* @__PURE__ */ jsxs13("div", { className: "shrink-0 whitespace-nowrap text-[11px] font-semibold text-neutral-500", children: [
          credits,
          " cr"
        ] }),
        /* @__PURE__ */ jsx23(
          "div",
          {
            className: cn(
              "shrink-0 whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-semibold",
              isDisabled ? "bg-neutral-400 text-white" : "bg-neutral-900 text-white"
            ),
            children: grade
          }
        )
      ] })
    }
  );
}

// src/patterns/system-status-panel/system-status-panel.tsx
import { jsx as jsx24, jsxs as jsxs14 } from "react/jsx-runtime";
function SystemStatusPanel({
  className,
  title = "System",
  statusLabel,
  online,
  emptyLabel = "Loading...",
  checks = [],
  ...props
}) {
  const hasChecks = checks.length > 0;
  return /* @__PURE__ */ jsxs14(Card, { className: cn("space-y-4", className), padding: "sm", ...props, children: [
    /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsx24("div", { className: "text-sm font-semibold", children: title }),
      typeof online === "boolean" ? /* @__PURE__ */ jsx24(Badge, { variant: online ? "success" : "danger", children: statusLabel ?? (online ? "Ready" : "Offline") }) : /* @__PURE__ */ jsx24("div", { className: "text-xs text-[var(--muted-foreground)]", children: statusLabel ?? emptyLabel })
    ] }),
    hasChecks ? /* @__PURE__ */ jsx24("div", { className: "grid gap-2", children: checks.map((check, index) => /* @__PURE__ */ jsx24(
      "div",
      {
        className: "rounded-[calc(var(--radius-panel)-0.5rem)] border border-[var(--border)] bg-[var(--muted)] px-3 py-2.5",
        children: /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxs14("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx24("div", { className: "text-xs font-semibold", children: check.name }),
            check.detail ? /* @__PURE__ */ jsx24("div", { className: "mt-1 text-xs text-[var(--muted-foreground)]", children: check.detail }) : null
          ] }),
          /* @__PURE__ */ jsx24(Badge, { size: "sm", variant: check.ok ? "success" : "danger", children: check.ok ? "Ready" : "Issue" })
        ] })
      },
      index
    )) }) : null
  ] });
}

// src/patterns/task-card/task-card.tsx
import { jsx as jsx25, jsxs as jsxs15 } from "react/jsx-runtime";
var badgeVariantMap = {
  queued: "neutral",
  running: "info",
  completed: "success",
  failed: "danger",
  cancelled: "neutral",
  idle: "neutral"
};
function formatStatus(status) {
  if (status === "queued") return "Queued";
  if (status === "running") return "Running";
  if (status === "completed") return "Completed";
  if (status === "failed") return "Failed";
  if (status === "cancelled") return "Cancelled";
  return "Idle";
}
function TaskCard({
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
}) {
  return /* @__PURE__ */ jsxs15(Card, { className: cn("space-y-4", className), ...props, children: [
    /* @__PURE__ */ jsxs15("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxs15("div", { className: "min-w-0 space-y-2", children: [
        /* @__PURE__ */ jsxs15("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsx25(Badge, { variant: badgeVariantMap[status], children: formatStatus(status) }),
          tags
        ] }),
        /* @__PURE__ */ jsxs15("div", { children: [
          /* @__PURE__ */ jsx25("div", { className: "text-lg font-semibold leading-tight", children: title }),
          subtitle ? /* @__PURE__ */ jsx25("div", { className: "mt-1 text-sm text-[var(--muted-foreground)]", children: subtitle }) : null
        ] })
      ] }),
      (primaryAction || secondaryAction) && /* @__PURE__ */ jsxs15("div", { className: "flex flex-wrap gap-2", children: [
        secondaryAction ? /* @__PURE__ */ jsx25(
          Button,
          {
            variant: "secondary",
            size: "sm",
            onClick: secondaryAction.onClick,
            disabled: secondaryAction.disabled,
            children: secondaryAction.label
          }
        ) : null,
        primaryAction ? /* @__PURE__ */ jsx25(
          Button,
          {
            variant: status === "failed" ? "danger" : "primary",
            size: "sm",
            onClick: primaryAction.onClick,
            disabled: primaryAction.disabled,
            children: primaryAction.label
          }
        ) : null
      ] })
    ] }),
    meta ? /* @__PURE__ */ jsx25("div", { className: "text-xs text-[var(--muted-foreground)]", children: meta }) : null,
    error ? /* @__PURE__ */ jsx25("div", { className: "rounded-[calc(var(--radius-panel)-0.25rem)] bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200", children: error }) : null,
    items.length > 0 ? /* @__PURE__ */ jsx25("div", { className: "grid gap-3", children: items.map((item) => /* @__PURE__ */ jsxs15(
      "div",
      {
        className: "rounded-[calc(var(--radius-panel)-0.25rem)] border border-[var(--border)] bg-[var(--muted)] px-4 py-4",
        children: [
          /* @__PURE__ */ jsxs15("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxs15("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx25("div", { className: "text-sm font-semibold", children: item.title }),
              item.meta ? /* @__PURE__ */ jsx25("div", { className: "mt-1 text-xs text-[var(--muted-foreground)]", children: item.meta }) : null,
              item.error ? /* @__PURE__ */ jsx25("div", { className: "mt-2 text-xs text-red-700", children: item.error }) : null
            ] }),
            item.status ? /* @__PURE__ */ jsx25(Badge, { variant: badgeVariantMap[item.status], children: formatStatus(item.status) }) : null
          ] }),
          typeof item.progress === "number" ? /* @__PURE__ */ jsx25("div", { className: "mt-3", children: /* @__PURE__ */ jsx25(ProgressBar, { value: item.progress, max: 1 }) }) : null,
          item.actions ? /* @__PURE__ */ jsx25("div", { className: "mt-3 flex flex-wrap gap-2", children: item.actions }) : null
        ]
      },
      item.id
    )) }) : null
  ] });
}

// src/lib/slot.ts
import { Slot } from "@radix-ui/react-slot";

// src/styles/tokens.ts
var colors = {
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
};
var radius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  "3xl": "var(--radius-3xl)",
  control: "var(--radius-control)",
  button: "var(--radius-button)",
  panel: "var(--radius-panel)"
};
var shadows = {
  soft: "var(--shadow-soft)",
  card: "var(--shadow-card)",
  overlay: "var(--shadow-overlay)"
};
var motion = {
  fast: "150ms",
  normal: "220ms",
  slow: "320ms"
};
export {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  CourseChip,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  EmptyState,
  Input,
  MetricPill,
  ModalShell,
  PageHeader,
  ProgressBar,
  SectionCard,
  Select,
  Slot,
  StatCard,
  SystemStatusPanel,
  TaskCard,
  Textarea,
  ToastProvider,
  ZoneCard,
  cn,
  colors,
  motion,
  radius,
  shadows,
  useToast
};
//# sourceMappingURL=index.mjs.map