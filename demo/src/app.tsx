import { useEffect, useMemo, useState } from "react";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  CourseChip,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  EmptyState,
  Input,
  MetricPill,
  ModalShell,
  PageHeader,
  ProgressBar,
  SectionCard,
  Select,
  StatCard,
  SystemStatusPanel,
  TaskCard,
  Textarea,
  ToastProvider,
  ZoneCard,
  useToast,
} from "../../src/index";

type DemoTaskStatus = "queued" | "running" | "completed" | "failed";

type DemoTask = {
  id: string;
  name: string;
  source: string;
  notes: string;
  urgent: boolean;
  status: DemoTaskStatus;
  progress: number;
  stage: string;
};

const initialTasks: DemoTask[] = [
  {
    id: "task-1",
    name: "Q2 transcript cleanup",
    source: "YouTube transcription",
    notes: "Normalize timestamps and prep export package.",
    urgent: true,
    status: "running",
    progress: 0.58,
    stage: "Generating output package",
  },
  {
    id: "task-2",
    name: "Semester plan sync",
    source: "Planner import",
    notes: "Validate grade mappings before merge.",
    urgent: false,
    status: "queued",
    progress: 0.14,
    stage: "Waiting for worker",
  },
];

const sourceOptions = [
  { label: "YouTube transcription", value: "YouTube transcription" },
  { label: "Document review", value: "Document review" },
  { label: "Marksix fetch", value: "Marksix fetch" },
  { label: "Planner import", value: "Planner import" },
];

const dropdownPreviewOptions = [
  {
    label: "Content intake",
    options: [
      {
        label: "YouTube transcription",
        value: "YouTube transcription",
        description: "Pull captions, timestamps, and speaker segments.",
        keywords: ["video", "captions", "subtitle"],
      },
      {
        label: "Document review",
        value: "Document review",
        description: "Scan uploaded files and prepare a clean summary.",
        keywords: ["doc", "pdf", "report"],
      },
    ],
  },
  {
    label: "Sync jobs",
    options: [
      {
        label: "Marksix fetch",
        value: "Marksix fetch",
        description: "Refresh scheduled data from the external feed.",
        keywords: ["lottery", "results", "fetch"],
      },
      {
        label: "Planner import",
        value: "Planner import",
        description: "Bring tasks in from the shared semester planner.",
        keywords: ["calendar", "schedule", "sync"],
      },
    ],
  },
] as const;

function makeId() {
  return `task-${Math.random().toString(36).slice(2, 8)}`;
}

function DemoGallery({
  previewSource,
  onPreviewSourceChange,
  onOpenModal,
}: {
  previewSource: string;
  onPreviewSourceChange: (value: string) => void;
  onOpenModal: () => void;
}) {
  const noopDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <section className="demo-gallery">
      <PageHeader
        title="Component gallery"
        description="Every exported piece in one place, with visible variants and states so you can tune them one by one."
        action={<Badge variant="success" size="md">Live playground</Badge>}
      />

      <div className="demo-gallery-grid">
        <SectionCard
          title="Buttons"
          description="Variants, sizes, and loading states."
        >
          <div className="demo-gallery-stack">
            <div className="demo-button-row">
              <Button size="sm">Primary</Button>
              <Button variant="secondary" size="sm">Secondary</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
              <Button variant="danger" size="sm">Danger</Button>
            </div>
            <div className="demo-button-row">
              <Button size="md">Medium action</Button>
              <Button size="lg">Large action</Button>
              <Button loading>Loading</Button>
              <Button fullWidth>Full width</Button>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Badges and pills"
          description="Short metadata treatments and compact status chips."
        >
          <div className="demo-gallery-stack">
            <div className="demo-badge-row">
              <Badge variant="neutral">Neutral</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="danger">Danger</Badge>
            </div>
            <div className="demo-pill-row">
              <MetricPill tone="neutral">12 jobs</MetricPill>
              <MetricPill tone="success">98% passed</MetricPill>
              <MetricPill tone="danger">3 blocked</MetricPill>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Inputs"
          description="Core form controls with compact dropdown styling."
        >
          <div className="demo-gallery-stack">
            <Input placeholder="Short text input" />
            <Input inputSize="sm" placeholder="Compact input" />
            <Textarea rows={4} placeholder="Longer field for notes and descriptions." />
            <Select
              value={previewSource}
              onChange={(event) => onPreviewSourceChange(event.target.value)}
              options={dropdownPreviewOptions.map((group) => ({
                label: group.label,
                options: group.options.map((option) => ({ ...option })),
              }))}
              selectSize="sm"
              density="compact"
              searchable
              searchPlaceholder="Search sources"
            />
            <Checkbox
              checked
              onChange={() => undefined}
              label="Compact toggle"
              description="Useful for showing the label and helper copy together."
            />
          </div>
        </SectionCard>

        <SectionCard
          title="Cards"
          description="Surface options for grouped content."
        >
          <div className="demo-gallery-stack">
            <Card elevated>
              <CardHeader title="Card header" description="Description and top action slot." action={<Button size="sm">Edit</Button>} />
              <CardContent className="demo-gallery-stack">
                <div className="demo-muted-copy">Card content body with regular text, controls, or nested layouts.</div>
              </CardContent>
              <CardFooter className="demo-button-row">
                <Button variant="secondary" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
              </CardFooter>
            </Card>
          </div>
        </SectionCard>

        <SectionCard
          title="Progress"
          description="Tone variations for task and pipeline feedback."
        >
          <div className="demo-gallery-stack">
            <div className="demo-progress-block">
              <div className="demo-row-label">Accent 50%</div>
              <ProgressBar value={50} animated />
            </div>
            <div className="demo-progress-block">
              <div className="demo-row-label">Success 68%</div>
              <ProgressBar value={68} tone="success" animated />
            </div>
            <div className="demo-progress-block">
              <div className="demo-row-label">Danger 32%</div>
              <ProgressBar value={32} tone="danger" animated />
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Headers and stats"
          description="Useful page-level framing pieces."
        >
          <div className="demo-gallery-stack">
            <PageHeader
              title="Section heading"
              description="The reusable page header with support for an action slot."
              action={<Button size="sm">Primary CTA</Button>}
            />
            <div className="demo-gallery-inline-grid">
              <StatCard label="Tasks" value="24" hint="Across all active queues." />
              <StatCard label="Uptime" value="99.9%" hint="Latest rolling window." />
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Feedback states"
          description="Empty state and system status patterns."
        >
          <div className="demo-gallery-stack">
            <EmptyState
              title="Nothing queued yet"
              description="This is the empty treatment for blank lists and first-run views."
              action={<Button size="sm">Create first item</Button>}
            />
            <SystemStatusPanel
              title="System health"
              online
              statusLabel="All services reachable"
              checks={[
                { name: "API adapter", ok: true, detail: "Healthy response time and valid payloads." },
                { name: "Queue worker", ok: false, detail: "One worker needs a restart." },
              ]}
            />
          </div>
        </SectionCard>

        <SectionCard
          title="Task card"
          description="One opinionated workflow card with nested item states."
        >
          <TaskCard
            title="Transcript export pipeline"
            subtitle="Shows tags, actions, nested items, progress, and errors."
            status="running"
            tags={<Badge variant="info">Automation</Badge>}
            meta="Updated 2 minutes ago"
            primaryAction={{ label: "Open" }}
            secondaryAction={{ label: "Retry" }}
            items={[
              {
                id: "item-running",
                title: "Normalize timestamps",
                meta: "Worker A12",
                status: "running",
                progress: 0.62,
              },
              {
                id: "item-failed",
                title: "Package exports",
                meta: "Retry available",
                status: "failed",
                error: "Output folder missing write permission.",
                actions: <Button variant="secondary" size="sm">Retry step</Button>,
              },
            ]}
          />
        </SectionCard>

        <SectionCard
          title="Course and zone patterns"
          description="Specialized planning patterns that still need visual review."
        >
          <div className="demo-gallery-stack">
            <div className="demo-chip-grid">
              <CourseChip
                name="Advanced Interaction Design"
                credits={3}
                grade="A"
                isMajorRequirement
                isDisabled={false}
                onDragStart={() => undefined}
              />
              <CourseChip
                name="History of Motion Graphics"
                credits={2}
                grade="B+"
                isMajorRequirement={false}
                isDisabled={false}
                onDragStart={() => undefined}
              />
              <CourseChip
                name="Archived elective"
                credits={1}
                grade="N/A"
                isMajorRequirement={false}
                isDisabled
                onDragStart={() => undefined}
              />
            </div>
            <ZoneCard title="Semester lane" subtitle="Drop area preview" onDragOver={noopDrag} onDrop={noopDrag} isActive>
              <div className="demo-gallery-stack">
                <div className="demo-muted-copy">This shows the empty body space and active outline treatment.</div>
                <CourseChip
                  name="Systems Thinking Studio"
                  credits={4}
                  grade="A-"
                  isMajorRequirement
                  isDisabled={false}
                  onDragStart={() => undefined}
                />
              </div>
            </ZoneCard>
          </div>
        </SectionCard>

        <SectionCard
          title="Dialogs"
          description="One low-level Radix-style dialog and one higher-level modal shell trigger."
        >
          <div className="demo-button-row">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open dialog</Button>
              </DialogTrigger>
              <DialogContent title="Dialog preview" description="Header, body, and footer slots together." size="md">
                <DialogHeader>
                  <div className="demo-muted-copy">This area can hold richer layout if needed.</div>
                </DialogHeader>
                <div className="demo-gallery-stack">
                  <Input placeholder="Quick input inside dialog" />
                </div>
                <DialogFooter>
                  <Button variant="secondary">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button onClick={onOpenModal}>Open modal shell</Button>
          </div>
        </SectionCard>
      </div>
    </section>
  );
}

function DemoWorkspace() {
  const { show } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [source, setSource] = useState(sourceOptions[0]!.value);
  const [previewSource, setPreviewSource] = useState(sourceOptions[1]!.value);
  const [notes, setNotes] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [tasks, setTasks] = useState<DemoTask[]>(initialTasks);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTasks((current) =>
        current.map((task) => {
          if (task.status !== "running") {
            return task;
          }

          const nextProgress = Math.min(1, task.progress + 0.06);
          return {
            ...task,
            progress: nextProgress,
            status: nextProgress >= 1 ? "completed" : "running",
            stage: nextProgress >= 1 ? "Ready to export" : "Processing",
          };
        })
      );
    }, 1600);

    return () => window.clearInterval(timer);
  }, []);

  const counts = useMemo(() => {
    const running = tasks.filter((task) => task.status === "running").length;
    const queued = tasks.filter((task) => task.status === "queued").length;
    const completed = tasks.filter((task) => task.status === "completed").length;
    return { running, queued, completed, total: tasks.length };
  }, [tasks]);

  function resetForm() {
    setTaskName("");
    setSource(sourceOptions[0]!.value);
    setNotes("");
    setUrgent(false);
  }

  function createTask() {
    if (!taskName.trim()) {
      show({ tone: "danger", title: "Task name is required." });
      return;
    }

    const record: DemoTask = {
      id: makeId(),
      name: taskName.trim(),
      source,
      notes: notes.trim(),
      urgent,
      status: urgent ? "running" : "queued",
      progress: urgent ? 0.22 : 0,
      stage: urgent ? "Fast-track processing" : "Queued for worker",
    };

    setTasks((current) => [record, ...current]);
    setDialogOpen(false);
    resetForm();
    show({
      tone: "success",
      title: "Demo task created",
      description: `${record.name} is now in the shared workspace demo.`,
    });
  }

  function rerunTask(id: string) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "running",
              progress: 0.18,
              stage: "Re-running task",
            }
          : task
      )
    );
    show({ tone: "info", title: "Task restarted" });
  }

  function archiveCompleted() {
    setTasks((current) => current.filter((task) => task.status !== "completed"));
    show({ tone: "success", title: "Completed tasks archived" });
  }

  const systemChecks = [
    { name: "API adapter", ok: true, detail: "Healthy response time and valid payloads." },
    { name: "Queue worker", ok: counts.running < 3, detail: counts.running < 3 ? "Capacity available." : "High running load." },
    { name: "Export storage", ok: true, detail: "Artifacts ready for download flow." },
  ];

  return (
    <div className="demo-shell">
      <div className="demo-shell__backdrop" />
      <main className="demo-layout">
        <PageHeader
          title="idk-ui demo console"
          description="One practical tool page that shows how the shared components behave together inside a real workspace."
          action={
            <div className="demo-header-actions">
              <Badge variant="info" size="md">
                Interactive demo
              </Badge>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Create task</Button>
                </DialogTrigger>
                <DialogContent
                  title="Create demo task"
                  description="This modal uses the same shared form controls your apps would use."
                  size="lg"
                >
                  <div className="demo-form-grid">
                    <div className="demo-field">
                      <label className="demo-label">Task name</label>
                      <Input
                        value={taskName}
                        onChange={(event) => setTaskName(event.target.value)}
                        placeholder="Example: Final transcript pass"
                      />
                    </div>
                    <div className="demo-field">
                      <label className="demo-label">Source</label>
                      <Select
                        value={source}
                        onChange={(event) => setSource(event.target.value)}
                        options={sourceOptions}
                        selectSize="sm"
                        density="compact"
                      />
                    </div>
                    <div className="demo-field demo-field--full">
                      <label className="demo-label">Notes</label>
                      <Textarea
                        value={notes}
                        onChange={(event) => setNotes(event.target.value)}
                        placeholder="Short operator note, export instruction, or sync context."
                        rows={5}
                      />
                    </div>
                    <div className="demo-field demo-field--full">
                      <Checkbox
                        checked={urgent}
                        onChange={(event) => setUrgent(event.target.checked)}
                        label="Start immediately"
                        description="Useful for showing the running state right after creation."
                      />
                    </div>
                  </div>
                  <div className="demo-dialog-actions">
                    <Button variant="secondary" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={createTask}>Add demo task</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          }
        />

        <section className="demo-stat-grid">
          <StatCard label="Running tasks" value={counts.running} hint="Live queue load in this demo workspace." />
          <StatCard label="Queued tasks" value={counts.queued} hint="Waiting for next worker slot." />
          <StatCard label="Completed tasks" value={counts.completed} hint="Ready for export or archive." />
          <StatCard label="Coverage" value="Core + patterns" hint="This page mixes primitives and higher-level patterns." />
        </section>

        <section className="demo-main-grid">
          <div className="demo-main-column">
            <SectionCard
              title="Active workspace"
              description="A realistic task surface: status badges, actions, nested task rows, progress, and feedback."
              action={
                <div className="demo-inline-actions">
                  <MetricPill>{`Tasks ${counts.total}`}</MetricPill>
                  <Button variant="secondary" size="sm" onClick={archiveCompleted}>
                    Archive completed
                  </Button>
                </div>
              }
            >
              <div className="demo-task-stack">
                {tasks.length === 0 ? (
                  <EmptyState
                    title="No demo tasks left"
                    description="Create one more task to keep testing the shared workflow components."
                    action={<Button onClick={() => setDialogOpen(true)}>Create task</Button>}
                  />
                ) : (
                  tasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      title={task.name}
                      subtitle={task.notes || "No operator note attached."}
                      status={task.status}
                      tags={
                        <>
                          <Badge variant="neutral">{task.source}</Badge>
                          {task.urgent ? <Badge variant="danger">Urgent</Badge> : null}
                        </>
                      }
                      meta={task.stage}
                      primaryAction={{
                        label: task.status === "completed" ? "Run again" : "Re-run",
                        onClick: () => rerunTask(task.id),
                      }}
                      secondaryAction={
                        task.status === "completed"
                          ? undefined
                          : {
                              label: "Inspect",
                              onClick: () =>
                                show({
                                  tone: "info",
                                  title: task.name,
                                  description: "This is where a real app would open a details panel or inspector.",
                                }),
                            }
                      }
                      items={[
                        {
                          id: `${task.id}-current`,
                          title: "Current stage",
                          meta: task.stage,
                          status: task.status,
                          progress: task.progress,
                          actions: (
                            <>
                              <Button variant="secondary" size="sm" onClick={() => rerunTask(task.id)}>
                                Retry step
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  show({
                                    tone: "success",
                                    title: "Output copied",
                                    description: "Pretend export action completed successfully.",
                                  })
                                }
                              >
                                Export
                              </Button>
                            </>
                          ),
                        },
                      ]}
                    />
                  ))
                )}
              </div>
            </SectionCard>
          </div>

          <div className="demo-side-column">
            <SystemStatusPanel
              title="System health"
              online={true}
              statusLabel="All services reachable"
              checks={systemChecks}
            />

            <Card>
              <CardHeader
                title="Standalone primitives"
                description="A quick shelf for checking smaller pieces outside the full task cards."
              />
              <CardContent className="demo-shelf">
                <div className="demo-badge-row">
                  <Badge variant="neutral">Neutral</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="danger">Danger</Badge>
                </div>
                <div className="demo-button-row">
                  <Button size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">
                    Secondary
                  </Button>
                  <Button variant="ghost" size="sm">
                    Ghost
                  </Button>
                </div>
                <div className="demo-progress-block">
                  <div className="demo-row-label">Progress bar 50%</div>
                  <ProgressBar value={50} animated />
                </div>
                <div className="demo-progress-block">
                  <div className="demo-row-label">Dropdown list</div>
                  <Select
                    value={previewSource}
                    onChange={(event) => setPreviewSource(event.target.value)}
                    options={dropdownPreviewOptions.map((group) => ({
                      label: group.label,
                      options: group.options.map((option) => ({ ...option })),
                    }))}
                    selectSize="sm"
                    density="compact"
                    searchable
                    searchPlaceholder="Search sources"
                  />
                </div>
                <div className="demo-pill-row">
                  <MetricPill tone="neutral">Jobs 12</MetricPill>
                  <MetricPill tone="success">Success rate 98%</MetricPill>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <DemoGallery
          previewSource={previewSource}
          onPreviewSourceChange={setPreviewSource}
          onOpenModal={() => setModalOpen(true)}
        />
      </main>

      <ModalShell open={modalOpen} title="Modal shell preview" onClose={() => setModalOpen(false)} size="md">
        <div className="demo-gallery-stack">
          <div className="demo-muted-copy">
            This is the higher-level modal wrapper, useful when you want a fast shell around dialog content.
          </div>
          <Input placeholder="Inline field inside modal shell" />
          <div className="demo-button-row">
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setModalOpen(false)}>Done</Button>
          </div>
        </div>
      </ModalShell>
    </div>
  );
}

export function DemoApp() {
  return (
    <ToastProvider>
      <DemoWorkspace />
    </ToastProvider>
  );
}
