import DatePicker from "@/components/DatePicker/DatePicker";
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
import { ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
function AcademicData() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  //* READ ACADEMIC DATA FROM STORE AND DISPLAY:
  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">
      <Stepper />
      <Heading variant={"h2"}>Datos Académicos</Heading>

      <div className=" grow flex flex-col gap-6 w-full max-w-sm mt-8">
        <Heading variant={"h4"}>Aun no has ingresado datos.</Heading>

        <Sheet>
          <SheetTrigger>
            <div
              className={`${buttonVariants({
                variant: "outline",
              })} mt-5 w-full md:w-fit md:text-md md:py-6 md:px-7`}
            >
              <Plus className="mr-2 " size={16} strokeWidth={3} /> Agregar
              Entrada
            </div>
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetHeader>
              <SheetTitle>Ingresa tus datos</SheetTitle>
              <SheetDescription>
                Completa la información requerida para ingresar una nueva
                entrada a Datos Académicos:
              </SheetDescription>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4 grow">
              <div className="flex flex-col justify-start  gap-1.5">
                <Label
                  htmlFor="title"
                  className="text-left font-semibold flex items-center gap-2"
                >
                  ¿Dónde te formaste?
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Ej: Universidad de Ejemplo"
                />
              </div>

              <div className="flex flex-col justify-start  gap-1.5">
                <Label
                  htmlFor="description"
                  className="text-left font-semibold flex items-center gap-2"
                >
                  ¿Qué fue lo que estudiaste?
                </Label>
                <Input
                  id="description"
                  type="text"
                  placeholder="Ej: Técnico en ..."
                />
              </div>

              <DatePicker label="¿Desde cuándo?" name={"from"} />
              <DatePicker label="Hasta cuándo?" name={"until"} />
            </div>
            <Button className="w-full" variant={"secondary"}>
              <Plus className="mr-2 " size={16} strokeWidth={3} /> Agregar
            </Button>
          </SheetContent>
        </Sheet>
      </div>

      {/* DISABLE UNTIL AT LEAST 1 ENTRY  */}
      <Button
        onClick={handleClick}
        className=" mt-5 w-full md:w-fit md:text-md md:py-6 md:px-12"
      >
        <ArrowRight className="mr-2 " strokeWidth={3} /> Siguiente
      </Button>
    </main>
  );
}

export default AcademicData;
