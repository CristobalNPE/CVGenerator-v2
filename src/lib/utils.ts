import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function areAnyValuesEmpty (...values: string[]) {
  const emptyStrings = values
    .map((value) => value.trim())
    .filter((value) => value === "");

  return emptyStrings.length !== 0;
}
