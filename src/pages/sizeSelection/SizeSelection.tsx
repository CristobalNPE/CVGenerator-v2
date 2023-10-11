import Stepper from "@/components/Stepper/Stepper";
import { Heading } from "@/components/typography/Heading";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import SelectionCards from "./components/SelectionCards/SelectionCards";
import { SelectionCardProps } from "./components/SelectionCards/SelectionCard";
function SizeSelection() {
  const cards: SelectionCardProps[] = [
    {
      title: "A4",
      description:
        "Para un currículum profesional estándar con formato internacional, perfecto para oportunidades laborales globales.",
      recommended: true,
      subtitle: "210mm x 297mm",
    },
    {
      title: "Carta",
      description:
        "Un currículum con un formato que se adapta a las normas de países norteamericanos.",
      subtitle: "216mm x 279mm",
    },
    {
      title: "Oficio",
      description:
        "Formato de hoja larga utilizado comúnmente en países de Sudamérica.",
      subtitle: "216mm x 330mm",
    },
  ];


  //Control selected cards here. If none selected, disable next button.


  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">
      <Stepper />
      <Heading variant={"h2"}>Que formatos de papel preparamos?</Heading>

      <SelectionCards
        cards={cards}
        icon={<Newspaper size={48} strokeWidth={1.25} />}
      />

      {/* when selected, button continuar */}
      <Link
        className={`mt-5 ${buttonVariants({
          variant: "default",
        })} w-full md:w-fit md:text-md md:py-6 md:px-12`}
        to={"/"}
      >
        {" "}
        <ArrowRight className="mr-2 " strokeWidth={3} /> Siguiente
      </Link>
    </main>
  );
}

export default SizeSelection;
