import Container from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { useCurriculumStore } from "@/stores/curriculum";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectionCards from "../../components/SelectionCards/SelectionCards";
import { cards } from "./data";
function SizeSelection() {
  const [selectedItem, setSelectedItem] = useState("A4");

  const { setPageSize } = useCurriculumStore();
  const navigate = useNavigate();

  const handleNextButton = () => {
    setPageSize(selectedItem);
    navigate("/template");
  };

  return (
    <Container>
      <Heading variant={"h2"}>Escoja el formato de papel</Heading>

      <div className="grow">
        <SelectionCards
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          cards={cards}
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

export default SizeSelection;
