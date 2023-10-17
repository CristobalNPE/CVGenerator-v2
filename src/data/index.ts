import { Newspaper } from "lucide-react";
import { SelectionCard } from "../types";

import { ListTodo, PencilRuler, Text } from "lucide-react";

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

export const templates: SelectionCard[] = [
  {
    title: "Serio",
    description:
      "Diseñada para resaltar tus logros y experiencia de manera profesional y estructurada. Ideal para perfiles experimentados que desean enfocarse en su historial de trabajo y logros.",
    recommended: true,
    subtitle: "Estilo Profesional",
    icon: Text,
  },
  {
    title: "Llamativo",
    description:
      "Incluye una barra lateral con un resumen de presentación y utiliza un diseño más creativo para destacar tus habilidades y logros. Adecuada para recién graduados que desean destacar su potencial y pasión.",
    subtitle: "Resumen Visual",
    icon: PencilRuler,
  },
  {
    title: "Completo",
    description:
      "Añade una fotografía. Deberías considerar esta plantilla cuando buscas trabajos en campos donde la presencia personal es fundamental, como ventas, relaciones públicas o industrias de servicio al cliente.",
    subtitle: "Perfil Completo",
    icon: ListTodo,
  },
];
