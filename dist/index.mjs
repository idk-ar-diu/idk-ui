// src/components/button/button.tsx
import { forwardRef } from "react";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/button/button.styles.ts
var buttonBase = "inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] border text-sm font-semibold tracking-[-0.01em] shadow-[var(--shadow-soft)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
var buttonVariants = {
  primary: "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-black/90 focus-visible:ring-[var(--primary)]",
  secondary: "border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[var(--muted)] focus-visible:ring-[var(--foreground)]",
  danger: "border-transparent bg-[var(--danger)] text-[var(--danger-foreground)] hover:bg-red-700 focus-visible:ring-[var(--danger)]",
  ghost: "border-transparent bg-transparent text-[var(--foreground)] shadow-none hover:bg-[var(--muted)] focus-visible:ring-[var(--foreground)]"
};
var buttonSizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-4.5 text-sm",
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

// src/components/input/input.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-4 text-base"
};
var Input = forwardRef2(
  ({ className, invalid = false, inputSize = "md", ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "input",
      {
        ref,
        className: cn(
          "w-full rounded-[var(--radius-control)] border bg-white text-[var(--foreground)] shadow-none transition-colors duration-200 outline-none placeholder:text-[var(--muted-foreground)]",
          "border-[var(--input)] focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10 disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)]",
          invalid && "border-[var(--danger)] focus:border-[var(--danger)] focus:ring-[var(--danger)]/10",
          sizeClasses[inputSize],
          className
        ),
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/textarea/textarea.tsx
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var resizeClasses = {
  none: "resize-none",
  vertical: "resize-y",
  auto: "resize"
};
var Textarea = forwardRef3(
  ({ className, invalid = false, resize = "vertical", ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
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
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var sizeClasses2 = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-4 text-base"
};
var Select = forwardRef4(
  ({ className, options, placeholder, invalid = false, selectSize = "md", ...props }, ref) => {
    return /* @__PURE__ */ jsxs2(
      "select",
      {
        ref,
        className: cn(
          "w-full rounded-[var(--radius-control)] border bg-white text-[var(--foreground)] outline-none transition-colors duration-200",
          "border-[var(--input)] focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10 disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)]",
          invalid && "border-[var(--danger)] focus:border-[var(--danger)] focus:ring-[var(--danger)]/10",
          sizeClasses2[selectSize],
          className
        ),
        ...props,
        children: [
          placeholder ? /* @__PURE__ */ jsx4("option", { value: "", disabled: true, children: placeholder }) : null,
          options.map((option) => /* @__PURE__ */ jsx4("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value))
        ]
      }
    );
  }
);
Select.displayName = "Select";

// src/components/checkbox/checkbox.tsx
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var Checkbox = forwardRef5(
  ({ className, label, description, id, ...props }, ref) => {
    const inputId = id ?? props.name;
    return /* @__PURE__ */ jsxs3("label", { className: cn("flex items-start gap-3 text-sm text-[var(--foreground)]", className), htmlFor: inputId, children: [
      /* @__PURE__ */ jsx5(
        "input",
        {
          ref,
          id: inputId,
          type: "checkbox",
          className: "mt-1 size-4 rounded border-[var(--input)] text-[var(--primary)] focus:ring-[var(--primary)]",
          ...props
        }
      ),
      (label || description) && /* @__PURE__ */ jsxs3("span", { className: "flex min-w-0 flex-col gap-1", children: [
        label ? /* @__PURE__ */ jsx5("span", { className: "font-medium", children: label }) : null,
        description ? /* @__PURE__ */ jsx5("span", { className: "text-[var(--muted-foreground)]", children: description }) : null
      ] })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/components/dialog/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var sizeClasses3 = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-2xl",
  xl: "max-w-4xl"
};
var DialogOverlay = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-slate-950/35 backdrop-blur-[1px] idk-ui-animate-fade-in", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = forwardRef6(
  ({ className, children, title, description, size = "md", ...props }, ref) => /* @__PURE__ */ jsxs4(DialogPortal, { children: [
    /* @__PURE__ */ jsx6(DialogOverlay, {}),
    /* @__PURE__ */ jsxs4(
      DialogPrimitive.Content,
      {
        ref,
        className: cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-[var(--radius-3xl)] border border-[var(--border)] bg-[var(--card)] p-6 text-[var(--card-foreground)] shadow-[var(--shadow-overlay)] outline-none idk-ui-animate-slide-up",
          "rounded-[var(--radius-panel)]",
          sizeClasses3[size],
          className
        ),
        ...props,
        children: [
          title || description ? /* @__PURE__ */ jsxs4("div", { className: "mb-4 space-y-1", children: [
            title ? /* @__PURE__ */ jsx6(DialogPrimitive.Title, { className: "text-lg font-semibold", children: title }) : null,
            description ? /* @__PURE__ */ jsx6(DialogPrimitive.Description, { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null
          ] }) : null,
          children
        ]
      }
    )
  ] })
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

// src/components/dialog/dialog-footer.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx7("div", { className: cn("mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", className), ...props });
}

// src/components/dialog/dialog-header.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx8("div", { className: cn("flex flex-col space-y-1.5", className), ...props });
}

// src/components/badge/badge.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var variantClasses = {
  neutral: "bg-[var(--muted)] text-[var(--foreground)]",
  success: "bg-[var(--success)]/12 text-[var(--success)]",
  info: "bg-[var(--info)]/12 text-[var(--info)]",
  danger: "bg-[var(--danger)]/12 text-[var(--danger)]"
};
var sizeClasses4 = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm"
};
function Badge({ className, variant = "neutral", size = "sm", ...props }) {
  return /* @__PURE__ */ jsx9(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full font-semibold leading-none tracking-[-0.01em]",
        variantClasses[variant],
        sizeClasses4[size],
        className
      ),
      ...props
    }
  );
}

// src/components/card/card.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var paddingClasses = {
  none: "p-0",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
};
function Card({ className, padding = "md", elevated = false, ...props }) {
  return /* @__PURE__ */ jsx10(
    "div",
    {
      className: cn(
        "rounded-[var(--radius-3xl)] border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)]",
        "rounded-[var(--radius-panel)]",
        paddingClasses[padding],
        elevated ? "shadow-[var(--shadow-card)]" : "shadow-none",
        className
      ),
      ...props
    }
  );
}

// src/components/card/card-content.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx11("div", { className: cn("mt-4", className), ...props });
}

// src/components/card/card-footer.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx12("div", { className: cn("mt-4 flex items-center justify-end gap-3", className), ...props });
}

// src/components/card/card-header.tsx
import { jsx as jsx13, jsxs as jsxs5 } from "react/jsx-runtime";
function CardHeader({ className, title, description, action, children, ...props }) {
  return /* @__PURE__ */ jsxs5("div", { className: cn("flex items-start justify-between gap-4", className), ...props, children: [
    /* @__PURE__ */ jsxs5("div", { className: "min-w-0 space-y-1", children: [
      title ? /* @__PURE__ */ jsx13("div", { className: "text-base font-semibold", children: title }) : null,
      description ? /* @__PURE__ */ jsx13("div", { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null,
      children
    ] }),
    action ? /* @__PURE__ */ jsx13("div", { className: "shrink-0", children: action }) : null
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
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var ToastContext = createContext(null);
var toneClasses = {
  success: "border-[var(--success)]/20 bg-white text-[var(--foreground)]",
  info: "border-[var(--info)]/20 bg-white text-[var(--foreground)]",
  danger: "border-[var(--danger)]/20 bg-white text-[var(--foreground)]"
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
  return /* @__PURE__ */ jsxs6(ToastContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsx14("div", { className: "pointer-events-none fixed bottom-4 right-4 z-[60] flex w-full max-w-sm flex-col gap-3", children: toasts.map((toast) => /* @__PURE__ */ jsxs6(
      "div",
      {
        className: cn(
          "pointer-events-auto rounded-[var(--radius-2xl)] border p-4 shadow-[var(--shadow-card)] idk-ui-animate-slide-up",
          toneClasses[toast.tone ?? "info"]
        ),
        children: [
          toast.title ? /* @__PURE__ */ jsx14("div", { className: "text-sm font-semibold", children: toast.title }) : null,
          toast.description ? /* @__PURE__ */ jsx14("div", { className: "mt-1 text-sm text-[var(--muted-foreground)]", children: toast.description }) : null
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
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
function PageHeader({
  className,
  title,
  description,
  action,
  align = "start",
  ...props
}) {
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: cn(
        "flex flex-col gap-4 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-start sm:justify-between",
        align === "center" && "sm:items-center",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs7("div", { className: "min-w-0 space-y-1", children: [
          /* @__PURE__ */ jsx15("h1", { className: "text-2xl font-semibold tracking-tight text-[var(--foreground)]", children: title }),
          description ? /* @__PURE__ */ jsx15("p", { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null
        ] }),
        action ? /* @__PURE__ */ jsx15("div", { className: "shrink-0", children: action }) : null
      ]
    }
  );
}

// src/patterns/section-card/section-card.tsx
import { jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
function SectionCard({ title, description, action, children, ...props }) {
  return /* @__PURE__ */ jsxs8(Card, { ...props, children: [
    (title || description || action) && /* @__PURE__ */ jsx16(CardHeader, { title, description, action }),
    /* @__PURE__ */ jsx16(CardContent, { className: title || description || action ? void 0 : "mt-0", children })
  ] });
}

// src/patterns/stat-card/stat-card.tsx
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
function StatCard({ className, label, value, hint, ...props }) {
  return /* @__PURE__ */ jsxs9(Card, { className: cn("space-y-2", className), elevated: true, ...props, children: [
    /* @__PURE__ */ jsx17("div", { className: "text-sm text-[var(--muted-foreground)]", children: label }),
    /* @__PURE__ */ jsx17("div", { className: "text-3xl font-semibold tracking-tight", children: value }),
    hint ? /* @__PURE__ */ jsx17("div", { className: "text-sm text-[var(--muted-foreground)]", children: hint }) : null
  ] });
}

// src/patterns/empty-state/empty-state.tsx
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
function EmptyState({ className, title, description, action, ...props }) {
  return /* @__PURE__ */ jsx18(
    "div",
    {
      className: cn(
        "rounded-[var(--radius-3xl)] border border-dashed border-[var(--border)] bg-white px-6 py-10 text-center",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs10("div", { className: "mx-auto max-w-md space-y-2", children: [
        /* @__PURE__ */ jsx18("div", { className: "text-lg font-semibold", children: title }),
        description ? /* @__PURE__ */ jsx18("div", { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null,
        action ? /* @__PURE__ */ jsx18("div", { className: "pt-3", children: action }) : null
      ] })
    }
  );
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
  PageHeader,
  SectionCard,
  Select,
  Slot,
  StatCard,
  Textarea,
  ToastProvider,
  cn,
  colors,
  motion,
  radius,
  shadows,
  useToast
};
//# sourceMappingURL=index.mjs.map