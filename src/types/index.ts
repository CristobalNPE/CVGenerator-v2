import { LucideIcon } from "lucide-react";

export type SelectionCard = {
  title: string;
  subtitle?: string;
  description: string;
  recommended?: boolean;
  icon: LucideIcon;
};
