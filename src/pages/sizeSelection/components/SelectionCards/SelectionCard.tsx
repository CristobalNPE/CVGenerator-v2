import { Heading } from "@/components/typography/Heading";
import { useState } from "react";

export type SelectionCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  recommended?: boolean;
  icon?: React.ReactNode;
};

function SelectionCard({
  title,
  subtitle,
  description,
  recommended,
  icon,
}: SelectionCardProps) {
  const [isSelected, setIsSelected] = useState(recommended);

  return (
    <div
      onClick={() => setIsSelected((prev) => !prev)}
      className={`${
        isSelected
          ? "ring-4 ring-primary ring-inset"
          : "hover:bg-secondary opacity-90"
      } grid grid-cols-6 max-w-lg px-3 sm:px-5 py-6 items-center rounded-lg gap-16 cursor-pointer  hover:opacity-100 transition-colors bg-muted select-none `}
    >
      <span className={`${isSelected && "text-primary"}`}>{icon}</span>
      <div className="flex flex-col items-start  col-span-5 text-left">
        <Heading variant={"h3"} className="mb-2">
          {title}{" "}
          <span className="font-light text-sm ml-2">( {subtitle} )</span>
        </Heading>
        <p className="text-md">
          {recommended && (
            <>
              <strong>Recomendado</strong> -{" "}
            </>
          )}{" "}
          {description}
        </p>
      </div>
    </div>
  );
}

export default SelectionCard;
