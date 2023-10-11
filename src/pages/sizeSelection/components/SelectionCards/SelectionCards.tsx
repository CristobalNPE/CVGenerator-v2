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
};

function SelectionCards({ icon, cards }: SelectionCardsProps) {
  return (
    <section className="grow flex items-center flex-col mt-10 gap-3">
      {cards.map((card, index) => (
        <SelectionCard
          key={card.title || index}
          icon={icon}
          {...card}
        />
      ))}
    </section>
  );
}

export default SelectionCards;
