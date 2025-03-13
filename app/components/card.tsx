import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export const Card = ({ icon, title, description }: Props) => {
  return (
    <div className="bg-brand-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-brand-secondary">
      <div className="mb-4 text-brand-primary">{icon}</div>
      <h3 className="text-xl text-brand-light mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
