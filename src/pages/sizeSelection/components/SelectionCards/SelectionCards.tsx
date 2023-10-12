import SelectionCard from "./SelectionCard";

export type SelectionCard = {
  title: string;
  subtitle?: string;
  description: string;
  recommended?: boolean;
};

type SelectionCardsProps = {
  icon: React.ReactNode;
  cards: SelectionCard[];
  toggleSelected?: (sizeTitle: string) => void;
};

function SelectionCards({ icon, cards, toggleSelected }: SelectionCardsProps) {
  return (
    <section className="grow flex items-center flex-col mt-10 gap-3">
      {cards.map((card, index) => (
        <SelectionCard
          toggleSelected={toggleSelected}
          key={card.title || index}
          icon={icon}
          {...card}
        />
      ))}
    </section>
  );
}

export default SelectionCards;
