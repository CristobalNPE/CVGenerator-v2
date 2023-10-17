import Container from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCurriculumStore } from "@/stores/curriculum";
import { ArrowRight, Mail, PenLine, Phone } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

function PersonalInfo() {
  const { setFullName, setEmail, setPhoneNumber } = useCurriculumStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFullName(data.fullName);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    navigate("/additionalInfo");
  };

  return (
    <Container>
      <Heading variant={"h2"}>Información personal</Heading>

      <form
        onSubmit={handleSubmit(onSubmit)}
        id="personalInfo"
        className="grow flex flex-col gap-6 w-full max-w-sm mt-8"
      >
        <div className="flex flex-col justify-start  gap-1.5">
          <Label
            htmlFor="fullName"
            className="text-left font-semibold flex items-center gap-2"
          >
            <PenLine size={16} /> Nombre Completo
          </Label>
          <Input
            autoComplete="false"
            id="fullName"
            type="text"
            {...register("fullName", {
              required: "Este campo es obligatorio.",
            })}
            placeholder="Ej: Juan Pérez Pérez"
          />
          <p className="text-destructive text-sm text-left">
            {errors.fullName?.message}
          </p>
        </div>

        <div className="flex flex-col justify-start  gap-1.5">
          <Label
            htmlFor="phoneNumber"
            className="text-left font-semibold flex items-center gap-2"
          >
            <Phone size={16} /> Número de teléfono
          </Label>
          <Input
            id="phoneNumber"
            type="text"
            placeholder="Ej: +569 9999 9999"
            {...register("phoneNumber", {
              required: "Este campo es obligatorio.",
            })}
          />
          <p className="text-destructive  text-sm text-left">
            {errors.phoneNumber?.message}
          </p>
        </div>

        <div className="flex flex-col justify-start  gap-1.5">
          <Label
            htmlFor="email"
            className="text-left font-semibold flex items-center gap-2"
          >
            <Mail size={16} />
            Correo Electrónico
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Ej: ejemplo@mail.com"
            {...register("email", {
              required: "Este campo es obligatorio.",
            })}
          />
          <p className="text-destructive  text-sm text-left">
            {errors.email?.message}
          </p>
        </div>
      </form>

      <Button
        form="personalInfo"
        type="submit"
        className=" mt-5 max-w-md w-full md:w-fit md:text-md md:py-6 md:px-12"
      >
        <ArrowRight className="mr-2 " strokeWidth={3} /> Siguiente
      </Button>
    </Container>
  );
}

export default PersonalInfo;
