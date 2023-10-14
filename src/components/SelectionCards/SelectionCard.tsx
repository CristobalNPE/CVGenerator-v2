import { Heading } from "@/components/typography/Heading";
import { SelectionCard as SelectionCardType } from "../../types";

export type SelectionCardProps = {
  cardInfo: SelectionCardType;
  selectedItem: string;
  setSelectedItem?: (item: string) => void;
};

function SelectionCard({
  cardInfo,
  selectedItem,
  setSelectedItem,
}: SelectionCardProps) {
  const isSelected = selectedItem === cardInfo.title;

  const handleSelected = () => {
    setSelectedItem!(cardInfo.title);
  };

  return (
    <div
      onClick={handleSelected}
      className={`${
        isSelected
          ? "ring-4 ring-primary ring-inset"
          : "hover:bg-secondary opacity-90"
      } grid grid-cols-6 max-w-lg px-3 sm:px-5 py-5 items-center rounded-lg gap-16 cursor-pointer  hover:opacity-100 transition-colors bg-muted select-none `}
    >
      <span className={`${isSelected && "text-primary"}`}>
        {<cardInfo.icon size={48} strokeWidth={1.25} />}
      </span>
      <div className="flex flex-col items-start  col-span-5 text-left">
        <Heading variant={"h3"} className="mb-2">
          {cardInfo.title}{" "}
          <span className="font-light text-sm ml-2">
            ( {cardInfo.subtitle} )
          </span>
        </Heading>
        <p className={`${isSelected ? "block" : "hidden"} sm:block text-md`}>
          {cardInfo.recommended && (
            <>
              <strong>Recomendado</strong> -{" "}
            </>
          )}{" "}
          {cardInfo.description}
        </p>
      </div>
    </div>
  );
}

export default SelectionCard;
