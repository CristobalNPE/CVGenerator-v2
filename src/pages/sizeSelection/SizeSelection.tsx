import Stepper from "@/components/Stepper/Stepper";
import { Heading } from "@/components/typography/Heading";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SelectionCards from "../../components/SelectionCards/SelectionCards";
import { cards } from "./data";
function SizeSelection() {
  const [selectedItem, setSelectedItem] = useState("A4");

  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">
      <Stepper />
      <Heading variant={"h2"}>Escoja el formato de papel</Heading>

      <div className="grow">
        <SelectionCards
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          cards={cards}
        />
      </div>

      <Link
        className={`mt-5 ${buttonVariants({
          variant: "default",
        })} w-full md:w-fit md:text-md md:py-6 md:px-12`}
        to={"/template"}
      >
        {" "}
        <ArrowRight className="mr-2 " strokeWidth={3} /> Siguiente
      </Link>
    </main>
  );
}

export default SizeSelection;
