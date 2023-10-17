import Container from "@/components/layout/Container";
import FullTemplate from "@/components/templates/FullTemplate";
import SeriousTemplate from "@/components/templates/SeriousTemplate";
import VisualTemplate from "@/components/templates/VisualTemplate";
import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { useCurriculumStore } from "@/stores/curriculum";
import { Download, Save } from "lucide-react";

function Result() {
  const curriculum = useCurriculumStore();

  //! TODO: MAKE IT SO IT CANT SKIP STEPS
  //MAYBE MAKE PERSONAL AND ADDITIONAL INFO TO MAINTAIN THE VALUE OF ITS INPUTS WHEN I GO BACK
  //TODO: THERE IS NO MIN REQUIRED IN TECH SKILLS. FIX!
  //TODO: WHEN LEARN NODE, SEND THE TEMPLATES HTML TO GET A PDF

  const saveCV = () => {
    const currentDateTime = new Date().toLocaleString();
    curriculum.setCreationDate(currentDateTime);
    localStorage.setItem(
      `cvCreator-${curriculum.id}`,
      JSON.stringify(curriculum)
    );
  };

  return (
    <Container>
      <Heading variant={"h2"}>Tu Curriculum: </Heading>
      <div className="my-2 flex flex-col gap-2 sm:flex-row sm:gap-10 sm:mb-5">
        <Button onClick={saveCV} variant={"secondary"}>
          <Save className="mr-2" /> Guardar Datos
        </Button>
        <Button
          onClick={() => alert("Próximamente! 😞😞")}
          variant={"secondary"}
        >
          <Download className="mr-2" /> Descargar CV
        </Button>
      </div>

      <div className="flex flex-col  scale-50 translate-y-[-20%] sm:scale-100 sm:translate-y-0">
        {curriculum.template === "Serio" && <SeriousTemplate cv={curriculum} />}
        {curriculum.template === "Llamativo" && (
          <VisualTemplate cv={curriculum} />
        )}
        {curriculum.template === "Completo" && <FullTemplate cv={curriculum} />}
      </div>
    </Container>
  );
}

export default Result;
