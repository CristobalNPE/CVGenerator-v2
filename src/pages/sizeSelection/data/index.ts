import { Newspaper } from "lucide-react";
import { SelectionCard } from "../../../types";

export const cards: SelectionCard[] = [
  {
    title: "A4",
    description:
      "Para un currículum profesional estándar con formato internacional, perfecto para oportunidades laborales globales.",
    recommended: true,
    subtitle: "210mm x 297mm",
    icon: Newspaper,
  },
  {
    title: "Carta",
    description:
      "Un currículum con un formato que se adapta a las normas de países norteamericanos.",
    subtitle: "216mm x 279mm",
    icon: Newspaper,
  },
  {
    title: "Oficio",
    description:
      "Formato de hoja larga utilizado comúnmente en países de Sudamérica.",
    subtitle: "216mm x 330mm",
    icon: Newspaper,
  },
];
