import type { ReactNode } from "react";

import { Button } from "../button/button";
import { Dialog, DialogContent } from "../dialog/dialog";

export type ModalShellProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl";
};

export function ModalShell({ open, title, children, onClose, size = "lg" }: ModalShellProps) {
  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <DialogContent title={title} size={size}>
        <div className="absolute right-4 top-4">
          <Button type="button" variant="ghost" size="sm" onClick={onClose} className="h-8 px-2.5">
            Close
          </Button>
        </div>
        <div className="pt-1">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
