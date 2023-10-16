import FullTemplate from "@/components/templates/FullTemplate";
import SeriousTemplate from "@/components/templates/SeriousTemplate";
import VisualTemplate from "@/components/templates/VisualTemplate";
import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { useCurriculumStore } from "@/stores/curriculum";

function Result() {
  const curriculum = useCurriculumStore();
  //TODO: MAKE THE MENU FOR TOGGLING DARK MODE AND ACCESS SAVED CVs
  //TODO: FIX STEPPER
  //TODO: MAKE IT SO IT CANT SKIP STEPS
  //TODO: FOR NOW JUST SHOW THE HTML
  //TODO: ADD ANIMATION BETWEEN PAGES
  //TODO: WHEN LEARN NODE, SEND THE TEMPLATES HTML TO GET A PDF
  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">


      <div className="flex flex-col sm:flex-row sm:gap-10 sm:mb-5">
        <Heading variant={"h2"}>Tu Curriculum!: </Heading>
        <Button onClick={() => alert("Próximamente! 😞")} variant={"secondary"}>
          Descargar!
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
