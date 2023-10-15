import Stepper from "@/components/Stepper/Stepper";
import { Heading } from "@/components/typography/Heading";
import { useCurriculumStore } from "@/stores/curriculum";

function Result() {
  const curriculum = useCurriculumStore();

  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">
      <Stepper />
      <Heading variant={"h2"}>Tu CV:</Heading>
      {JSON.stringify(curriculum)}
    </main>
  );
}

export default Result;
