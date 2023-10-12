import { SelectionCard as SelectionCardType } from "../../types";
import SelectionCard from "./SelectionCard";

type SelectionCardsProps = {
  cards: SelectionCardType[];
  selectedItem: string;
  setSelectedItem?: (size: string) => void;
};

function SelectionCards({
  cards,
  selectedItem,
  setSelectedItem,
}: SelectionCardsProps) {
  return (
    <section className=" flex items-center flex-col mt-10 gap-3">
      {cards.map((card, index) => (
        <SelectionCard
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          key={card.title || index}
          cardInfo={card}
        />
      ))}
    </section>
  );
}

export default SelectionCards;
