import DataBoxes from "@/components/DataBox/DataBoxes";
import Stepper from "@/components/Stepper/Stepper";
import { Heading } from "@/components/typography/Heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCurriculumStore } from "@/stores/curriculum";
import { ArrowRight, Plus } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  id: string;
  title: string;
  description: string;
  from?: string;
  until?: string;
};

function TechnicalSkills() {
  const { technicalSkills, addTechnicalSkill, removeTechnicalSkill } =
    useCurriculumStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addTechnicalSkill(data);
    //TODO:Reset inputs to ""
  };

  const handleClick = () => {
    navigate("/result");
  };

  return (
    <main className=" p-4 text-center flex flex-col  items-center w-full  ">
      <Stepper />
      <Heading variant={"h2"}>Habilidades Técnicas</Heading>

      <div className=" grow flex flex-col gap-6 w-full max-w-md mt-8 ">
        <section>
          {technicalSkills.length === 0 ? (
            <Heading variant={"h4"}>Aun no has ingresado datos.</Heading>
          ) : (
            <DataBoxes
              data={technicalSkills}
              handleRemove={removeTechnicalSkill}
            />
          )}
        </section>

        <Sheet>
          <SheetTrigger className="w-full md:w-fit mx-auto">
            <div
              className={`${buttonVariants({
                variant: "secondary",
              })} mt-5 w-full md:w-fit md:text-md md:py-6 md:px-7 `}
            >
              <Plus className="mr-2 " size={16} strokeWidth={3} /> Ingresar Dato
            </div>
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetHeader>
              <SheetTitle>Ingresa tus datos</SheetTitle>
              <SheetDescription>
                Completa la información requerida para ingresar una nueva
                entrada a Experiencia Laboral:
              </SheetDescription>
            </SheetHeader>
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="academicData"
              className="mt-8 flex flex-col gap-4 grow"
            >
              <div className="flex flex-col justify-start  gap-1.5">
                <Label
                  htmlFor="title"
                  className="text-left font-semibold flex items-center gap-2"
                >
                  ¿Que habilidad quieres describir?
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Ej: Idiomas"
                  {...register("title", {
                    required: "Este campo es obligatorio.",
                  })}
                />
                <p className="text-destructive text-sm text-left">
                  {errors.title?.message}
                </p>
              </div>

              <div className="flex flex-col justify-start  gap-1.5">
                <Label
                  htmlFor="description"
                  className="text-left font-semibold flex items-center gap-2"
                >
                  Características (Utiliza ',' para separarlas)
                </Label>
                <Input
                  id="description"
                  type="text"
                  placeholder="Ej: Español nativo, Inglés intermedio"
                  {...register("description", {
                    required: "Este campo es obligatorio.",
                  })}
                />
                <p className="text-destructive text-sm text-left">
                  {errors.description?.message}
                </p>
              </div>
            </form>
            <Button
              type="submit"
              form="academicData"
              className="w-full"
              variant={"secondary"}
            >
              <Plus className="mr-2 " size={16} strokeWidth={3} /> Agregar
            </Button>
          </SheetContent>
        </Sheet>
      </div>

      <Button
        onClick={handleClick}
        className=" mt-5 w-full md:w-fit max-w-md md:text-md md:py-6 md:px-12"
      >
        <ArrowRight className="mr-2 " strokeWidth={3} /> Siguiente
      </Button>
    </main>
  );
}

export default TechnicalSkills;
