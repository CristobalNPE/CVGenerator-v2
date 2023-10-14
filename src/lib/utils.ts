import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function areAnyValuesEmpty(...values: string[]) {
  const emptyStrings = values
    .map((value) => value.trim())
    .filter((value) => value === "");

  return emptyStrings.length !== 0;
}

export function sanitizeDate(date: string): string {
  const [year, month] = date.split("-");
  const sanitizedDate = format(
    new Date(Number(year), Number(month) - 1, 1),
    "MMMM yyyy",
    {
      locale: es,
    }
  );


  return sanitizedDate;
}
