# idk-ui Component Catalog

This document is a quick reference for what `idk-ui` exports today, how to import it, and when to use each piece.

## Quick Start

```tsx
import "idk-ui/theme.css";
import "idk-ui/motion.css";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Input,
  PageHeader,
  Select,
  ToastProvider,
  useToast
} from "idk-ui";
```

## Styles and Tokens

- `theme.css`: shared colors, surface tokens, radius variables, and control styles
- `motion.css`: shared motion utilities and transitions
- `colors`, `radius`, `shadows`, `motion`: exported design token objects from `src/styles/tokens.ts`

## Component Groups

### Foundations

#### `Button`

Use for primary and secondary actions.

- Variants: `primary`, `secondary`, `danger`, `ghost`
- Sizes: `sm`, `md`, `lg`
- Useful props: `loading`, `fullWidth`, `leftIcon`, `rightIcon`

```tsx
<Button>Save</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="danger" loading>Deleting</Button>
```

#### `Badge`

Use for short status labels or metadata chips.

- Variants: `neutral`, `success`, `info`, `danger`
- Sizes: `sm`, `md`

```tsx
<Badge variant="info">Interactive demo</Badge>
```

#### `MetricPill`

Use for compact numeric or summary indicators.

- Tones: `neutral`, `success`, `danger`

```tsx
<MetricPill tone="success">Success rate 98%</MetricPill>
```

#### `ProgressBar`

Use for progress feedback inside task rows, uploads, or long-running jobs.

- Useful props: `value`, `max`, `tone`, `animated`

```tsx
<ProgressBar value={72} />
<ProgressBar value={50} animated />
```

### Form Controls

#### `Input`

Standard text input for short values.

- Extends native `input` props
- Useful for names, titles, search, and IDs

```tsx
<Input placeholder="Task name" />
```

#### `Textarea`

Use for longer notes or multi-line content.

```tsx
<Textarea rows={5} placeholder="Short operator note" />
```

#### `Select`

Use for dropdown lists and native select menus.

- Required prop: `options`
- Useful props: `placeholder`, `invalid`, `selectSize`, `density`, `searchable`, `searchPlaceholder`, `emptyMessage`
- Supports grouped options, searchable menus, descriptions, and richer selected states

```tsx
<Select
  placeholder="Choose source"
  options={[
    {
      label: "Content intake",
      options: [
        { label: "YouTube transcription", value: "youtube", description: "Captions and timestamps" },
        { label: "Document review", value: "docs", description: "Summaries and extracted notes" }
      ]
    }
  ]}
  selectSize="sm"
  density="compact"
  searchable
  searchPlaceholder="Search sources"
/>
```

This is the component to use when you want a standard dropdown list in forms, filters, or settings panels.

#### `Checkbox`

Use for boolean choices with optional helper copy.

- Useful props: `label`, `description`

```tsx
<Checkbox label="Start immediately" description="Useful for urgent work." />
```

### Layout and Surfaces

#### `Card`, `CardHeader`, `CardContent`, `CardFooter`

Use for grouped content blocks and panel layouts.

- `Card` props: `padding` = `none | sm | md | lg`, `elevated`
- `CardHeader` accepts `title`, `description`, `action`

```tsx
<Card elevated>
  <CardHeader title="Standalone primitives" description="Quick shelf for smaller pieces." />
  <CardContent>...</CardContent>
</Card>
```

#### `PageHeader`

Use at the top of pages or workspace sections.

- Required prop: `title`
- Optional props: `description`, `action`, `align`

```tsx
<PageHeader
  title="idk-ui demo console"
  description="Shared components working together in one page."
  action={<Button>Create task</Button>}
/>
```

### Overlay and Feedback

#### `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogClose`

Use for modal flows, confirmations, and quick create/edit forms.

- Built on Radix dialog primitives
- `DialogContent` supports `title`, `description`, `size`

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Create task</Button>
  </DialogTrigger>
  <DialogContent title="Create task" description="Shared form controls inside a modal.">
    ...
  </DialogContent>
</Dialog>
```

#### `ModalShell`

Use when you want a higher-level modal wrapper with open/close behavior and a title prop.

#### `ToastProvider`, `useToast`

Use for transient feedback such as success, info, and error states.

- Wrap your app with `ToastProvider`
- Call `show({ title, description, tone })` from `useToast()`
- Tones: `success`, `info`, `danger`

```tsx
function Example() {
  const { show } = useToast();
  return (
    <Button
      onClick={() =>
        show({
          tone: "success",
          title: "Saved",
          description: "Your changes were stored successfully."
        })
      }
    >
      Save
    </Button>
  );
}
```

### Patterns

These are higher-level opinionated building blocks made from the primitives above.

#### `SectionCard`

Use for a titled content section with optional description and actions.

#### `StatCard`

Use for dashboard metrics.

- Props: `label`, `value`, `hint`

#### `EmptyState`

Use when a list, panel, or workflow has no data yet.

- Props: `title`, `description`, `action`

#### `ZoneCard`

Use for zone or grouped-area summaries.

#### `CourseChip`

Use for compact course/course-like identity chips.

#### `SystemStatusPanel`

Use for service health and status check summaries.

- Useful props: `title`, `online`, `statusLabel`, `checks`

#### `TaskCard`

Use for task/job rows with status, actions, and nested items.

- Useful props: `title`, `subtitle`, `status`, `tags`, `meta`, `primaryAction`, `secondaryAction`, `items`

## Utilities

- `cn`: merges class names
- `Slot`: re-export of Radix `Slot` for `asChild`-style composition

## Best Way to Explore

- Run `npm run demo:dev` to see the current components in action
- Check `demo/src/app.tsx` for real composition examples
- Check `src/index.ts` for the current public export surface

## Current Public Exports

The current public API is defined in `src/index.ts`. If you add a new component and want consumers to use it, export it there and update this file with:

- what it is for
- the main props people need
- one minimal example
