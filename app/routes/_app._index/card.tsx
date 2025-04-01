import type { ReactNode } from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from "~/components/ui/card";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const Card = ({ icon, title, description }: Props) => {
  return (
    <ShadcnCard className="gap-4 border-none">
      <CardHeader>
        <CardTitle className="flex gap-4 items-center">
          <span className="text-brand-primary">{icon}</span>
          <span className="text-xl">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </ShadcnCard>
  );
};
