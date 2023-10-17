import SelectionCards from "@/components/SelectionCards/SelectionCards";
import Container from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { useCurriculumStore } from "@/stores/curriculum";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { templates } from "@/data";

function TemplateSelection() {
  const [selectedItem, setSelectedItem] = useState("Serio");
  const { setTemplate } = useCurriculumStore();

  const navigate = useNavigate();

  const handleNextButton = () => {
    setTemplate(selectedItem);
    navigate("/personalInfo");
  };

  return (
    <Container>
      <Heading variant={"h2"}>Seleccione una plantilla</Heading>

      <div className="grow">
        <SelectionCards
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          cards={templates}
        />
      </div>

      <Button
        onClick={handleNextButton}
        className=" mt-5 max-w-md w-full md:w-fit md:text-md md:py-6 md:px-12"
      >
        <ArrowRight className="mr-2 " strokeWidth={3} /> Siguiente
      </Button>
    </Container>
  );
}

export default TemplateSelection;
