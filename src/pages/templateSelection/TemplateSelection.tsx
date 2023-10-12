import SelectionCards from "@/components/SelectionCards/SelectionCards";
import Stepper from "@/components/Stepper/Stepper";
import { Heading } from "@/components/typography/Heading";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { templates } from "./data";

function TemplateSelection() {
  const [selectedItem, setSelectedItem] = useState("Serio");
  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">
      <Stepper />
      <Heading variant={"h2"}>Seleccione una plantilla</Heading>

      <div className="grow">
        <SelectionCards
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          cards={templates}
        />
      </div>

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

export default TemplateSelection;
