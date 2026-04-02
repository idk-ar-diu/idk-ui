import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ComponentPropsWithoutRef, HTMLAttributes, PropsWithChildren, ComponentProps } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as react_jsx_runtime from 'react/jsx-runtime';
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

export { Badge, type BadgeProps, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, CardContent, CardFooter, CardHeader, type CardHeaderProps, type CardProps, Checkbox, type CheckboxProps, Dialog, DialogClose, DialogContent, type DialogContentProps, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTrigger, EmptyState, Input, type InputProps, PageHeader, type PageHeaderProps, SectionCard, Select, type SelectOption, type SelectProps, StatCard, Textarea, type TextareaProps, type ToastPayload, ToastProvider, type ToastTone, cn, colors, motion, radius, shadows, useToast };
