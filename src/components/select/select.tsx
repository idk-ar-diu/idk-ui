import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
  type ReactNode,
  type SelectHTMLAttributes
} from "react";

import { cn } from "../../lib/cn";

type SelectSize = "sm" | "md" | "lg";
type SelectDensity = "compact" | "default" | "roomy";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
  description?: ReactNode;
  keywords?: string[];
  icon?: ReactNode;
};

export type SelectOptionGroup = {
  label: string;
  options: SelectOption[];
};

type SelectOptionEntry = SelectOption | SelectOptionGroup;

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "children"> & {
  options: SelectOptionEntry[];
  placeholder?: string;
  invalid?: boolean;
  selectSize?: SelectSize;
  density?: SelectDensity;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyMessage?: ReactNode;
};

type FlattenedOption = SelectOption & {
  groupLabel?: string;
};

const sizeClasses: Record<SelectSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-4 text-base"
};

const densityClasses: Record<
  SelectDensity,
  {
    panelPadding: string;
    searchWrap: string;
    searchInput: string;
    groupLabel: string;
    option: string;
    optionIcon: string;
    optionTitle: string;
    optionDescription: string;
    empty: string;
  }
> = {
  compact: {
    panelPadding: "p-1.5",
    searchWrap: "p-1.5",
    searchInput: "px-3 py-1.5 text-xs",
    groupLabel: "px-2.5 pb-1.5 pt-1.5 text-[10px] tracking-[0.16em]",
    option: "gap-2.5 px-2.5 py-2",
    optionIcon: "min-h-4.5 w-4.5",
    optionTitle: "text-sm",
    optionDescription: "mt-0.5 text-xs",
    empty: "px-3 py-6 text-xs"
  },
  default: {
    panelPadding: "p-2",
    searchWrap: "p-2",
    searchInput: "px-3 py-2 text-sm",
    groupLabel: "px-3 pb-2 pt-2 text-[11px] tracking-[0.18em]",
    option: "gap-3 px-3 py-3",
    optionIcon: "min-h-5 w-5",
    optionTitle: "text-sm",
    optionDescription: "mt-1 text-sm",
    empty: "px-3 py-8 text-sm"
  },
  roomy: {
    panelPadding: "p-2.5",
    searchWrap: "p-2.5",
    searchInput: "px-3.5 py-2.5 text-sm",
    groupLabel: "px-3.5 pb-2 pt-2.5 text-[11px] tracking-[0.18em]",
    option: "gap-3.5 px-3.5 py-3.5",
    optionIcon: "min-h-5 w-5",
    optionTitle: "text-base",
    optionDescription: "mt-1 text-sm",
    empty: "px-4 py-9 text-sm"
  }
};

function isGroup(entry: SelectOptionEntry): entry is SelectOptionGroup {
  return "options" in entry;
}

function flattenOptions(options: SelectOptionEntry[]) {
  return options.flatMap<FlattenedOption>((entry) =>
    isGroup(entry) ? entry.options.map((option) => ({ ...option, groupLabel: entry.label })) : [{ ...entry }]
  );
}

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      options,
      placeholder,
      invalid = false,
      selectSize = "md",
      density = "default",
      searchable = false,
      searchPlaceholder = "Search options",
      emptyMessage = "No matching options.",
      disabled = false,
      value,
      defaultValue,
      onChange,
      onBlur,
      name,
      required,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id ?? `select-${generatedId}`;
    const menuId = `${selectId}-menu`;
    const searchId = `${selectId}-search`;
    const hiddenSelectRef = useRef<HTMLSelectElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const isControlled = value !== undefined;
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [internalValue, setInternalValue] = useState<string>(() => {
      if (typeof defaultValue === "string") {
        return defaultValue;
      }

      if (Array.isArray(defaultValue)) {
        return defaultValue[0] ?? "";
      }

      return "";
    });
    const [activeIndex, setActiveIndex] = useState(-1);
    const allOptions = useMemo(() => flattenOptions(options), [options]);
    const currentValue = isControlled
      ? typeof value === "string"
        ? value
        : Array.isArray(value)
          ? value[0] ?? ""
          : ""
      : internalValue;

    const filteredGroups = useMemo(() => {
      const query = normalizeText(searchQuery);

      return options
        .map((entry) => {
          if (isGroup(entry)) {
            const groupOptions = entry.options.filter((option) => {
              if (!query) {
                return true;
              }

              const haystack = [option.label, option.value, ...(option.keywords ?? [])]
                .join(" ")
                .toLowerCase();
              return haystack.includes(query);
            });

            return groupOptions.length > 0 ? { label: entry.label, options: groupOptions } : null;
          }

          if (!query) {
            return { label: null, options: [entry] };
          }

          const haystack = [entry.label, entry.value, ...(entry.keywords ?? [])].join(" ").toLowerCase();
          return haystack.includes(query) ? { label: null, options: [entry] } : null;
        })
        .filter((entry): entry is { label: string | null; options: SelectOption[] } => entry !== null);
    }, [options, searchQuery]);

    const visibleOptions = useMemo(
      () =>
        filteredGroups.flatMap((group) =>
          group.options.map((option) => ({
            ...option,
            groupLabel: group.label ?? undefined
          }))
        ),
      [filteredGroups]
    );

    const selectedOption = useMemo(
      () => allOptions.find((option) => option.value === currentValue),
      [allOptions, currentValue]
    );
    const densityClassSet = densityClasses[density];

    useImperativeHandle(ref, () => hiddenSelectRef.current as HTMLSelectElement, []);

    useEffect(() => {
      if (!open) {
        return;
      }

      const onPointerDown = (event: PointerEvent) => {
        if (!containerRef.current?.contains(event.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener("pointerdown", onPointerDown);
      return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [open]);

    useEffect(() => {
      if (!open) {
        setSearchQuery("");
        setActiveIndex(-1);
        return;
      }

      const selectedIndex = visibleOptions.findIndex((option) => option.value === currentValue && !option.disabled);
      const firstEnabledIndex = visibleOptions.findIndex((option) => !option.disabled);
      setActiveIndex(selectedIndex >= 0 ? selectedIndex : firstEnabledIndex);

      window.setTimeout(() => {
        if (searchable) {
          searchRef.current?.focus();
        } else {
          menuRef.current?.focus();
        }
      }, 0);
    }, [currentValue, open, searchable, visibleOptions]);

    useEffect(() => {
      if (activeIndex < 0) {
        return;
      }

      optionRefs.current[activeIndex]?.scrollIntoView({
        block: "nearest"
      });
    }, [activeIndex]);

    function emitChange(nextValue: string) {
      const node = hiddenSelectRef.current;

      if (node) {
        node.value = nextValue;
      }

      onChange?.({
        target: (node ?? { value: nextValue, name }) as HTMLSelectElement,
        currentTarget: (node ?? { value: nextValue, name }) as HTMLSelectElement
      } as ChangeEvent<HTMLSelectElement>);
    }

    function selectValue(nextValue: string) {
      if (!isControlled) {
        setInternalValue(nextValue);
      }

      emitChange(nextValue);
      setOpen(false);
      triggerRef.current?.focus();
    }

    function moveActiveIndex(direction: 1 | -1) {
      if (visibleOptions.length === 0) {
        return;
      }

      let nextIndex = activeIndex;

      for (let step = 0; step < visibleOptions.length; step += 1) {
        nextIndex = nextIndex < 0 ? (direction > 0 ? 0 : visibleOptions.length - 1) : (nextIndex + direction + visibleOptions.length) % visibleOptions.length;
        if (!visibleOptions[nextIndex]?.disabled) {
          setActiveIndex(nextIndex);
          return;
        }
      }
    }

    function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
      if (disabled) {
        return;
      }

      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        moveActiveIndex(event.key === "ArrowDown" ? 1 : -1);
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }

    function handleMenuKeyDown(event: KeyboardEvent<HTMLDivElement | HTMLInputElement>) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveActiveIndex(1);
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        moveActiveIndex(-1);
        return;
      }

      if (event.key === "Enter" && activeIndex >= 0) {
        event.preventDefault();
        const option = visibleOptions[activeIndex];
        if (option && !option.disabled) {
          selectValue(option.value);
        }
      }
    }

    function handleTriggerBlur(event: FocusEvent<HTMLButtonElement>) {
      const nextTarget = event.relatedTarget as Node | null;

      if (nextTarget && containerRef.current?.contains(nextTarget)) {
        return;
      }

      onBlur?.({
        target: (hiddenSelectRef.current ?? event.currentTarget) as HTMLSelectElement,
        currentTarget: (hiddenSelectRef.current ?? event.currentTarget) as HTMLSelectElement,
        relatedTarget: event.relatedTarget
      } as FocusEvent<HTMLSelectElement>);
    }

    return (
      <div ref={containerRef} className={cn("relative w-full", className)}>
        <select
          {...props}
          ref={hiddenSelectRef}
          id={selectId}
          name={name}
          value={currentValue}
          required={required}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options.map((entry) =>
            isGroup(entry) ? (
              <optgroup key={entry.label} label={entry.label}>
                {entry.options.map((option) => (
                  <option key={option.value} value={option.value} disabled={option.disabled}>
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ) : (
              <option key={entry.value} value={entry.value} disabled={entry.disabled}>
                {entry.label}
              </option>
            )
          )}
        </select>

        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={menuId}
          disabled={disabled}
          onClick={() => setOpen((current) => !current)}
          onKeyDown={handleTriggerKeyDown}
          onBlur={handleTriggerBlur}
          className={cn(
            "flex w-full cursor-pointer items-center justify-between gap-3 rounded-[var(--radius-control)] border bg-[var(--card)] text-left text-[var(--foreground)] outline-none transition-all duration-200",
            "border-[var(--input)] shadow-[var(--shadow-soft)] hover:border-[var(--foreground)]/18 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.06)]",
            "focus-visible:border-[var(--foreground)] focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/10 focus-visible:shadow-[0_12px_28px_rgba(15,23,42,0.08)]",
            "disabled:cursor-not-allowed disabled:bg-[var(--muted)] disabled:text-[var(--muted-foreground)] disabled:shadow-none",
            invalid && "border-[var(--danger)] focus-visible:border-[var(--danger)] focus-visible:ring-[var(--danger)]/10",
            open && "translate-y-0 border-[var(--foreground)]/20 bg-white shadow-[var(--shadow-overlay)]",
            sizeClasses[selectSize]
          )}
        >
          <span className="min-w-0 flex-1">
            {selectedOption ? (
              <span className="flex items-center gap-3">
                {selectedOption.icon ? <span className="shrink-0 text-[var(--muted-foreground)]">{selectedOption.icon}</span> : null}
                <span className="min-w-0 truncate">{selectedOption.label}</span>
              </span>
            ) : (
              <span className="truncate text-[var(--muted-foreground)]">{placeholder ?? "Select an option"}</span>
            )}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "shrink-0 text-[var(--muted-foreground)] transition-transform duration-300 ease-out",
              open && "translate-y-[1px] rotate-180 scale-105"
            )}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        {open ? (
          <div
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 idk-ui-animate-dropdown-enter"
            onKeyDown={handleMenuKeyDown}
          >
            <div className="idk-ui-animate-dropdown-glow overflow-hidden rounded-[var(--radius-panel)] border border-[var(--border)] bg-white shadow-[var(--shadow-overlay)]">
              <div className="idk-ui-animate-dropdown-content">
              {searchable ? (
                <div className={cn("border-b border-[var(--border)] bg-[var(--muted)]/45", densityClassSet.searchWrap)}>
                  <input
                    ref={searchRef}
                    id={searchId}
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder={searchPlaceholder}
                    className={cn(
                      "w-full rounded-[calc(var(--radius-control)-0.25rem)] border border-[var(--input)] bg-white text-[var(--foreground)] outline-none transition-colors duration-200",
                      "placeholder:text-[var(--muted-foreground)] focus:border-[var(--foreground)] focus:ring-2 focus:ring-[var(--foreground)]/10"
                      ,
                      densityClassSet.searchInput
                    )}
                  />
                </div>
              ) : null}

              <div
                ref={menuRef}
                id={menuId}
                role="listbox"
                tabIndex={-1}
                className={cn("max-h-72 overflow-auto outline-none", densityClassSet.panelPadding)}
                aria-label={props["aria-label"] ?? name ?? "Select options"}
              >
                {visibleOptions.length === 0 ? (
                  <div className={cn("text-center text-[var(--muted-foreground)]", densityClassSet.empty)}>{emptyMessage}</div>
                ) : (
                  filteredGroups.map((group, groupIndex) => (
                    <div key={group.label ?? `ungrouped-${groupIndex}`} className="mb-1 last:mb-0">
                      {group.label ? (
                        <div className={cn("font-semibold uppercase text-[var(--muted-foreground)]", densityClassSet.groupLabel)}>
                          {group.label}
                        </div>
                      ) : null}
                      <div className="grid gap-1">
                        {group.options.map((option) => {
                          const visibleIndex = visibleOptions.findIndex((item) => item.value === option.value);
                          const isSelected = currentValue === option.value;
                          const isActive = activeIndex === visibleIndex;
                          return (
                            <button
                              key={`${group.label ?? "option"}-${option.value}`}
                              ref={(node) => {
                                optionRefs.current[visibleIndex] = node;
                              }}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              disabled={option.disabled}
                              onMouseEnter={() => setActiveIndex(visibleIndex)}
                              onClick={() => selectValue(option.value)}
                              className={cn(
                                "flex w-full items-start rounded-[calc(var(--radius-control)-0.2rem)] text-left transition-all duration-200 ease-out",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/10",
                                densityClassSet.option,
                                option.disabled
                                  ? "cursor-not-allowed opacity-45"
                                  : isSelected
                                    ? "bg-[var(--foreground)] text-white shadow-[var(--shadow-soft)]"
                                    : isActive
                                      ? "bg-[var(--muted)] text-[var(--foreground)] -translate-y-[1px] shadow-[var(--shadow-soft)]"
                                      : "text-[var(--foreground)] hover:-translate-y-[1px] hover:bg-[var(--muted)]/70 hover:shadow-[var(--shadow-soft)]"
                              )}
                            >
                              <span className={cn("mt-0.5 flex shrink-0 items-center justify-center text-current/80", densityClassSet.optionIcon)}>
                                {isSelected ? (
                                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path
                                      d="M5 10.5L8.5 14L15 7.5"
                                      stroke="currentColor"
                                      strokeWidth="1.9"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                ) : option.icon ? (
                                  option.icon
                                ) : (
                                  <span className="mt-[3px] size-2 rounded-full bg-current/20" />
                                )}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className={cn("block font-medium", densityClassSet.optionTitle)}>{option.label}</span>
                                {option.description ? (
                                  <span className={cn("block", densityClassSet.optionDescription, isSelected ? "text-white/75" : "text-[var(--muted-foreground)]")}>
                                    {option.description}
                                  </span>
                                ) : null}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))
                )}
              </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
