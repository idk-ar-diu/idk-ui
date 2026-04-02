import type { ComponentProps } from "react";

import { Card } from "../../components/card/card";
import { CardContent } from "../../components/card/card-content";
import { CardHeader } from "../../components/card/card-header";

type SectionCardProps = ComponentProps<typeof Card> & {
  title?: ComponentProps<typeof CardHeader>["title"];
  description?: ComponentProps<typeof CardHeader>["description"];
  action?: ComponentProps<typeof CardHeader>["action"];
};

export function SectionCard({ title, description, action, children, ...props }: SectionCardProps) {
  return (
    <Card {...props}>
      {(title || description || action) && <CardHeader title={title} description={description} action={action} />}
      <CardContent className={title || description || action ? undefined : "mt-0"}>{children}</CardContent>
    </Card>
  );
}
