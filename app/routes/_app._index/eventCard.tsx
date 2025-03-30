import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export const EventCard = ({ icon, title, description }: Props) => {
  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle className="flex gap-4 items-center">
          <span className="text-brand-primary">{icon}</span>
          <span className="text-xl">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

/*
    <div className="bg-brand-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-brand-secondary">
      <div className="mb-4 text-brand-primary">{icon}</div>
      <h3 className="text-xl text-brand-light mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
*/
