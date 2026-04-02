"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  Checkbox: () => Checkbox,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTrigger: () => DialogTrigger,
  EmptyState: () => EmptyState,
  Input: () => Input,
  PageHeader: () => PageHeader,
  SectionCard: () => SectionCard,
  Select: () => Select,
  Slot: () => import_react_slot.Slot,
  StatCard: () => StatCard,
  Textarea: () => Textarea,
  ToastProvider: () => ToastProvider,
  cn: () => cn,
  colors: () => colors,
  motion: () => motion,
  radius: () => radius,
  shadows: () => shadows,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/components/button/button.tsx
var import_react = require("react");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
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
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
          loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-current opacity-70" }) : leftIcon,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
          !loading ? rightIcon : null
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/input/input.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-4 text-base"
};
var Input = (0, import_react2.forwardRef)(
  ({ className, invalid = false, inputSize = "md", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var resizeClasses = {
  none: "resize-none",
  vertical: "resize-y",
  auto: "resize"
};
var Textarea = (0, import_react3.forwardRef)(
  ({ className, invalid = false, resize = "vertical", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var sizeClasses2 = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-4 text-base"
};
var Select = (0, import_react4.forwardRef)(
  ({ className, options, placeholder, invalid = false, selectSize = "md", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
          placeholder ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: "", disabled: true, children: placeholder }) : null,
          options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value))
        ]
      }
    );
  }
);
Select.displayName = "Select";

// src/components/checkbox/checkbox.tsx
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Checkbox = (0, import_react5.forwardRef)(
  ({ className, label, description, id, ...props }, ref) => {
    const inputId = id ?? props.name;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: cn("flex items-start gap-3 text-sm text-[var(--foreground)]", className), htmlFor: inputId, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          ref,
          id: inputId,
          type: "checkbox",
          className: "mt-1 size-4 rounded border-[var(--input)] text-[var(--primary)] focus:ring-[var(--primary)]",
          ...props
        }
      ),
      (label || description) && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "flex min-w-0 flex-col gap-1", children: [
        label ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "font-medium", children: label }) : null,
        description ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-[var(--muted-foreground)]", children: description }) : null
      ] })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/components/dialog/dialog.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
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
var DialogOverlay = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-slate-950/35 backdrop-blur-[1px] idk-ui-animate-fade-in", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = (0, import_react6.forwardRef)(
  ({ className, children, title, description, size = "md", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
          title || description ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mb-4 space-y-1", children: [
            title ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DialogPrimitive.Title, { className: "text-lg font-semibold", children: title }) : null,
            description ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DialogPrimitive.Description, { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null
          ] }) : null,
          children
        ]
      }
    )
  ] })
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

// src/components/dialog/dialog-footer.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: cn("mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end", className), ...props });
}

// src/components/dialog/dialog-header.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: cn("flex flex-col space-y-1.5", className), ...props });
}

// src/components/badge/badge.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var import_jsx_runtime10 = require("react/jsx-runtime");
var paddingClasses = {
  none: "p-0",
  sm: "p-4",
  md: "p-5",
  lg: "p-6"
};
function Card({ className, padding = "md", elevated = false, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_jsx_runtime11 = require("react/jsx-runtime");
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: cn("mt-4", className), ...props });
}

// src/components/card/card-footer.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: cn("mt-4 flex items-center justify-end gap-3", className), ...props });
}

// src/components/card/card-header.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function CardHeader({ className, title, description, action, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cn("flex items-start justify-between gap-4", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "min-w-0 space-y-1", children: [
      title ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-base font-semibold", children: title }) : null,
      description ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null,
      children
    ] }),
    action ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "shrink-0", children: action }) : null
  ] });
}

// src/components/toast/toast-provider.tsx
var import_react7 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var ToastContext = (0, import_react7.createContext)(null);
var toneClasses = {
  success: "border-[var(--success)]/20 bg-white text-[var(--foreground)]",
  info: "border-[var(--info)]/20 bg-white text-[var(--foreground)]",
  danger: "border-[var(--danger)]/20 bg-white text-[var(--foreground)]"
};
function ToastProvider({ children }) {
  const [toasts, setToasts] = (0, import_react7.useState)([]);
  const dismiss = (0, import_react7.useCallback)((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);
  const show = (0, import_react7.useCallback)((toast) => {
    const id = toast.id ?? crypto.randomUUID();
    setToasts((current) => [...current, { ...toast, id }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 3200);
  }, []);
  const value = (0, import_react7.useMemo)(() => ({ show, dismiss }), [dismiss, show]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(ToastContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "pointer-events-none fixed bottom-4 right-4 z-[60] flex w-full max-w-sm flex-col gap-3", children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "div",
      {
        className: cn(
          "pointer-events-auto rounded-[var(--radius-2xl)] border p-4 shadow-[var(--shadow-card)] idk-ui-animate-slide-up",
          toneClasses[toast.tone ?? "info"]
        ),
        children: [
          toast.title ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-sm font-semibold", children: toast.title }) : null,
          toast.description ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mt-1 text-sm text-[var(--muted-foreground)]", children: toast.description }) : null
        ]
      },
      toast.id
    )) })
  ] });
}
function useToast() {
  const context = (0, import_react7.useContext)(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }
  return context;
}

// src/components/page-header/page-header.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function PageHeader({
  className,
  title,
  description,
  action,
  align = "start",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    {
      className: cn(
        "flex flex-col gap-4 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-start sm:justify-between",
        align === "center" && "sm:items-center",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "min-w-0 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { className: "text-2xl font-semibold tracking-tight text-[var(--foreground)]", children: title }),
          description ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null
        ] }),
        action ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "shrink-0", children: action }) : null
      ]
    }
  );
}

// src/patterns/section-card/section-card.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function SectionCard({ title, description, action, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Card, { ...props, children: [
    (title || description || action) && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CardHeader, { title, description, action }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CardContent, { className: title || description || action ? void 0 : "mt-0", children })
  ] });
}

// src/patterns/stat-card/stat-card.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function StatCard({ className, label, value, hint, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Card, { className: cn("space-y-2", className), elevated: true, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-sm text-[var(--muted-foreground)]", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-3xl font-semibold tracking-tight", children: value }),
    hint ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-sm text-[var(--muted-foreground)]", children: hint }) : null
  ] });
}

// src/patterns/empty-state/empty-state.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function EmptyState({ className, title, description, action, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      className: cn(
        "rounded-[var(--radius-3xl)] border border-dashed border-[var(--border)] bg-white px-6 py-10 text-center",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mx-auto max-w-md space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "text-lg font-semibold", children: title }),
        description ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "text-sm text-[var(--muted-foreground)]", children: description }) : null,
        action ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "pt-3", children: action }) : null
      ] })
    }
  );
}

// src/lib/slot.ts
var import_react_slot = require("@radix-ui/react-slot");

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map