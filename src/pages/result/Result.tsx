import FullTemplate from "@/components/templates/FullTemplate";
import SeriousTemplate from "@/components/templates/SeriousTemplate";
import VisualTemplate from "@/components/templates/VisualTemplate";
import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { useCurriculumStore } from "@/stores/curriculum";
import { Download, Save } from "lucide-react";

function Result() {
  const curriculum = useCurriculumStore();
  //TODO: MAKE THE MENU FOR TOGGLING DARK MODE AND ACCESS SAVED CVs
  //TODO: MAKE IT SO IT CANT SKIP STEPS
  //TODO: ADD ANIMATION BETWEEN PAGES
  //TODO: WHEN LEARN NODE, SEND THE TEMPLATES HTML TO GET A PDF

  const saveCV = () => {
    const currentDateTime = new Date().toLocaleString();
    console.log(currentDateTime);
    curriculum.setCreationDate(currentDateTime);
    localStorage.setItem(
      `cvCreator-${curriculum.id}`,
      JSON.stringify(curriculum)
    );
  };

  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">
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
    </main>
  );
}

export default Result;
