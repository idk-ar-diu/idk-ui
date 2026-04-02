import {
  createContext,
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";

import { cn } from "../../lib/cn";

export type ToastTone = "success" | "info" | "danger";

export type ToastPayload = {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
};

type ToastRecord = Required<Pick<ToastPayload, "id">> & ToastPayload;

type ToastContextValue = {
  show: (toast: ToastPayload) => void;
  dismiss: (id: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const toneClasses: Record<ToastTone, string> = {
  success: "border-[var(--success)]/20 bg-white text-[var(--foreground)]",
  info: "border-[var(--info)]/20 bg-white text-[var(--foreground)]",
  danger: "border-[var(--danger)]/20 bg-white text-[var(--foreground)]"
};

export function ToastProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<ToastRecord[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const show = useCallback((toast: ToastPayload) => {
    const id = toast.id ?? crypto.randomUUID();
    setToasts((current) => [...current, { ...toast, id }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 3200);
  }, []);

  const value = useMemo(() => ({ show, dismiss }), [dismiss, show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex w-full max-w-sm flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto rounded-[var(--radius-2xl)] border p-4 shadow-[var(--shadow-card)] idk-ui-animate-slide-up",
              toneClasses[toast.tone ?? "info"]
            )}
          >
            {toast.title ? <div className="text-sm font-semibold">{toast.title}</div> : null}
            {toast.description ? <div className="mt-1 text-sm text-[var(--muted-foreground)]">{toast.description}</div> : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }

  return context;
}
