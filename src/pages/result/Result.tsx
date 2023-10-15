import Stepper from "@/components/Stepper/Stepper";
import { Heading } from "@/components/typography/Heading";
import { useCurriculumStore } from "@/stores/curriculum";

function Result() {
  const curriculum = useCurriculumStore();
  //TODO: MAKE 3 TEMPLATES AS PAGES
  //TODO: FIX STEPPER
  //TODO: MAKE IT SO IT CAN SKIP STEPS
  //TODO: MAKE THE MENU FOR TOGGLING DARK MODE AND ACCESS SAVED CVs
  //TODO: FOR NOW JUST SHOW THE HTML
  //TODO: ADD ANIMATION BETWEEN PAGES
  //TODO: WHEN LEARN NODE, SEND THE TEMPLATES HTML TO GET A PDF
  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">
      <Stepper />

      <Heading variant={"h2"}>Tu CV:</Heading>

      <div className="bg-white w-[595px] h-[842px] border-foreground border-2"></div>
      <div>
        <Heading variant={"h2"}>Datos Personales</Heading>
        <Heading variant={"h3"}>Nombre: {curriculum.fullName}</Heading>
        <Heading variant={"h3"}>Teléfono: {curriculum.phoneNumber}</Heading>
        <Heading variant={"h3"}>Email: {curriculum.email}</Heading>
        <Heading variant={"h3"}>Titulo: {curriculum.title}</Heading>
        <Heading variant={"h3"}>Sitio web: {curriculum.website}</Heading>
        <Heading variant={"h3"}>Github: {curriculum.github}</Heading>
        <Heading variant={"h3"}>LinkedIn: {curriculum.linkedIn}</Heading>
        <Heading variant={"h3"}>Acerca de mi: {curriculum.aboutMe}</Heading>
        <Heading variant={"h2"}>Datos Académicos</Heading>
        {curriculum.academicData.map((data) => {
          return (
            <div className="ring-2 ring-secondary">
              <Heading variant={"h3"}>{data.title}</Heading>
              <Heading variant={"h3"}>{data.description}</Heading>
              <Heading variant={"h3"}>{data.from}</Heading>
              <Heading variant={"h3"}>{data.until}</Heading>
            </div>
          );
        })}
        <Heading variant={"h2"}>Experiencia laboral</Heading>
        {curriculum.workExperience.map((data) => {
          return (
            <div className="ring-2 ring-secondary">
              <Heading variant={"h3"}>{data.title}</Heading>
              <Heading variant={"h3"}>{data.description}</Heading>
              <Heading variant={"h3"}>{data.from}</Heading>
              <Heading variant={"h3"}>{data.until}</Heading>
            </div>
          );
        })}
        <Heading variant={"h2"}>Habilidades Técnicas</Heading>
        {curriculum.technicalSkills.map((data) => {
          return (
            <div className="ring-2 ring-secondary">
              <Heading variant={"h3"}>{data.title}</Heading>
              <Heading variant={"h3"}>{data.description}</Heading>
              <Heading variant={"h3"}>{data.from}</Heading>
              <Heading variant={"h3"}>{data.until}</Heading>
            </div>
          );
        })}

        <Heading variant={"h4"}>template {curriculum.template}</Heading>
        <Heading variant={"h4"}>pageSize {curriculum.pageSize}</Heading>
      </div>
    </main>
  );
}

export default Result;
