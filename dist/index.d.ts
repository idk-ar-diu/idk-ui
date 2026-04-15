import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ComponentPropsWithoutRef, PropsWithChildren, ComponentProps, DragEvent, DragEventHandler } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ClassValue } from 'clsx';
export { Slot } from '@radix-ui/react-slot';

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
};

declare const Button: react.ForwardRefExoticComponent<react.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    leftIcon?: react.ReactNode;
    rightIcon?: react.ReactNode;
} & react.RefAttributes<HTMLButtonElement>>;

type MetricPillTone = "neutral" | "success" | "danger";
type MetricPillProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
    tone?: MetricPillTone;
};
declare function MetricPill({ children, tone, className, ...props }: MetricPillProps): react_jsx_runtime.JSX.Element;

type ModalShellProps = {
    open: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
    size?: "sm" | "md" | "lg" | "xl";
};
declare function ModalShell({ open, title, children, onClose, size }: ModalShellProps): react_jsx_runtime.JSX.Element;

type InputSize = "sm" | "md" | "lg";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
    inputSize?: InputSize;
};
declare const Input: react.ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
    inputSize?: InputSize;
} & react.RefAttributes<HTMLInputElement>>;

type TextareaResize = "none" | "vertical" | "auto";
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    invalid?: boolean;
    resize?: TextareaResize;
};
declare const Textarea: react.ForwardRefExoticComponent<TextareaHTMLAttributes<HTMLTextAreaElement> & {
    invalid?: boolean;
    resize?: TextareaResize;
} & react.RefAttributes<HTMLTextAreaElement>>;

type SelectSize = "sm" | "md" | "lg";
type SelectOption = {
    label: string;
    value: string;
    disabled?: boolean;
};
type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
    options: SelectOption[];
    placeholder?: string;
    invalid?: boolean;
    selectSize?: SelectSize;
};
declare const Select: react.ForwardRefExoticComponent<Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
    options: SelectOption[];
    placeholder?: string;
    invalid?: boolean;
    selectSize?: SelectSize;
} & react.RefAttributes<HTMLSelectElement>>;

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label?: ReactNode;
    description?: ReactNode;
};
declare const Checkbox: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    label?: ReactNode;
    description?: ReactNode;
} & react.RefAttributes<HTMLInputElement>>;

type ProgressTone = "accent" | "success" | "danger" | "neutral";
type ProgressBarProps = HTMLAttributes<HTMLDivElement> & {
    value: number;
    max?: number;
    tone?: ProgressTone;
};
declare function ProgressBar({ className, value, max, tone, ...props }: ProgressBarProps): react_jsx_runtime.JSX.Element;

declare const Dialog: react.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: react.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: react.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: react.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    title?: ReactNode;
    description?: ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
};
declare const DialogOverlay: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const DialogContent: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    title?: ReactNode;
    description?: ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
} & react.RefAttributes<HTMLDivElement>>;

declare function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

type BadgeVariant = "neutral" | "success" | "info" | "danger";
type BadgeSize = "sm" | "md";
type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    variant?: BadgeVariant;
    size?: BadgeSize;
};
declare function Badge({ className, variant, size, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

type CardPadding = "none" | "sm" | "md" | "lg";
type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement> & {
    padding?: CardPadding;
    elevated?: boolean;
}>;
declare function Card({ className, padding, elevated, ...props }: CardProps): react_jsx_runtime.JSX.Element;

declare function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

type CardHeaderProps = HTMLAttributes<HTMLDivElement> & {
    title?: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
};
declare function CardHeader({ className, title, description, action, children, ...props }: CardHeaderProps): react_jsx_runtime.JSX.Element;

type ToastTone = "success" | "info" | "danger";
type ToastPayload = {
    id?: string;
    title?: ReactNode;
    description?: ReactNode;
    tone?: ToastTone;
};
type ToastContextValue = {
    show: (toast: ToastPayload) => void;
    dismiss: (id: string) => void;
};
declare function ToastProvider({ children }: PropsWithChildren): react_jsx_runtime.JSX.Element;
declare function useToast(): ToastContextValue;

type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
    align?: "start" | "center";
};
declare function PageHeader({ className, title, description, action, align, ...props }: PageHeaderProps): react_jsx_runtime.JSX.Element;

type SectionCardProps = ComponentProps<typeof Card> & {
    title?: ComponentProps<typeof CardHeader>["title"];
    description?: ComponentProps<typeof CardHeader>["description"];
    action?: ComponentProps<typeof CardHeader>["action"];
};
declare function SectionCard({ title, description, action, children, ...props }: SectionCardProps): react_jsx_runtime.JSX.Element;

type StatCardProps = HTMLAttributes<HTMLDivElement> & {
    label: ReactNode;
    value: ReactNode;
    hint?: ReactNode;
};
declare function StatCard({ className, label, value, hint, ...props }: StatCardProps): react_jsx_runtime.JSX.Element;

type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
};
declare function EmptyState({ className, title, description, action, ...props }: EmptyStateProps): react_jsx_runtime.JSX.Element;

type ZoneCardProps = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    onDragOver: (e: DragEvent<HTMLDivElement>) => void;
    onDrop: (e: DragEvent<HTMLDivElement>) => void;
    isActive?: boolean;
    onTitleDoubleClick?: () => void;
    className?: string;
};
declare function ZoneCard({ title, subtitle, children, onDragOver, onDrop, isActive, onTitleDoubleClick, className }: ZoneCardProps): react_jsx_runtime.JSX.Element;

type CourseChipProps = {
    id?: string;
    onDragStart: DragEventHandler<HTMLDivElement>;
    onDragEnd?: () => void;
    onDoubleClick?: () => void;
    name: string;
    credits: number;
    grade: string;
    isMajorRequirement: boolean;
    isDisabled: boolean;
    className?: string;
};
declare function CourseChip({ id, onDragStart, onDragEnd, onDoubleClick, name, credits, grade, isMajorRequirement, isDisabled, className }: CourseChipProps): react_jsx_runtime.JSX.Element;

type SystemStatusCheck = {
    name: ReactNode;
    ok: boolean;
    detail?: ReactNode;
};
type SystemStatusPanelProps = HTMLAttributes<HTMLDivElement> & {
    title?: ReactNode;
    statusLabel?: ReactNode;
    online?: boolean;
    emptyLabel?: ReactNode;
    checks?: SystemStatusCheck[];
};
declare function SystemStatusPanel({ className, title, statusLabel, online, emptyLabel, checks, ...props }: SystemStatusPanelProps): react_jsx_runtime.JSX.Element;

type TaskCardStatus = "queued" | "running" | "completed" | "failed" | "cancelled" | "idle";
type TaskCardItem = {
    id: string;
    title: ReactNode;
    meta?: ReactNode;
    status?: TaskCardStatus;
    progress?: number;
    error?: ReactNode;
    actions?: ReactNode;
};
type TaskCardProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    subtitle?: ReactNode;
    status?: TaskCardStatus;
    tags?: ReactNode;
    meta?: ReactNode;
    error?: ReactNode;
    primaryAction?: {
        label: ReactNode;
        onClick?: () => void;
        disabled?: boolean;
    };
    secondaryAction?: {
        label: ReactNode;
        onClick?: () => void;
        disabled?: boolean;
    };
    items?: TaskCardItem[];
};
declare function TaskCard({ className, title, subtitle, status, tags, meta, error, primaryAction, secondaryAction, items, ...props }: TaskCardProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

declare const colors: {
    readonly background: "var(--background)";
    readonly foreground: "var(--foreground)";
    readonly card: "var(--card)";
    readonly cardForeground: "var(--card-foreground)";
    readonly muted: "var(--muted)";
    readonly mutedForeground: "var(--muted-foreground)";
    readonly border: "var(--border)";
    readonly input: "var(--input)";
    readonly primary: "var(--primary)";
    readonly primaryForeground: "var(--primary-foreground)";
    readonly success: "var(--success)";
    readonly successForeground: "var(--success-foreground)";
    readonly info: "var(--info)";
    readonly infoForeground: "var(--info-foreground)";
    readonly danger: "var(--danger)";
    readonly dangerForeground: "var(--danger-foreground)";
};
declare const radius: {
    readonly sm: "var(--radius-sm)";
    readonly md: "var(--radius-md)";
    readonly lg: "var(--radius-lg)";
    readonly xl: "var(--radius-xl)";
    readonly "2xl": "var(--radius-2xl)";
    readonly "3xl": "var(--radius-3xl)";
    readonly control: "var(--radius-control)";
    readonly button: "var(--radius-button)";
    readonly panel: "var(--radius-panel)";
};
declare const shadows: {
    readonly soft: "var(--shadow-soft)";
    readonly card: "var(--shadow-card)";
    readonly overlay: "var(--shadow-overlay)";
};
declare const motion: {
    readonly fast: "150ms";
    readonly normal: "220ms";
    readonly slow: "320ms";
};

export { Badge, type BadgeProps, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, CardContent, CardFooter, CardHeader, type CardHeaderProps, type CardProps, Checkbox, type CheckboxProps, CourseChip, type CourseChipProps, Dialog, DialogClose, DialogContent, type DialogContentProps, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTrigger, EmptyState, Input, type InputProps, MetricPill, type MetricPillProps, type MetricPillTone, ModalShell, type ModalShellProps, PageHeader, type PageHeaderProps, ProgressBar, type ProgressBarProps, SectionCard, Select, type SelectOption, type SelectProps, StatCard, type SystemStatusCheck, SystemStatusPanel, type SystemStatusPanelProps, TaskCard, type TaskCardItem, type TaskCardProps, Textarea, type TextareaProps, type ToastPayload, ToastProvider, type ToastTone, ZoneCard, type ZoneCardProps, cn, colors, motion, radius, shadows, useToast };
