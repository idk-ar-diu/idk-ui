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
  success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  info: "bg-white text-[var(--foreground)] ring-1 ring-[var(--border)]",
  danger: "bg-red-50 text-red-700 ring-1 ring-red-200"
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
      <div className="pointer-events-none fixed bottom-4 left-1/2 z-[60] flex w-full max-w-sm -translate-x-1/2 flex-col gap-3 px-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto rounded-[var(--radius-2xl)] px-4 py-2 text-sm font-semibold shadow-lg idk-ui-animate-slide-up",
              toneClasses[toast.tone ?? "info"]
            )}
          >
            {toast.title ? <div>{toast.title}</div> : null}
            {toast.description ? <div className={cn(toast.title ? "mt-1 text-sm font-normal text-current/80" : "")}>{toast.description}</div> : null}
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
