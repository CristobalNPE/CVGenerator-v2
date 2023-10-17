import Container from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCurriculumStore } from "@/stores/curriculum";
import {
  ArrowRight,
  Github,
  GraduationCap,
  Linkedin,
  Monitor,
  Text,
} from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  title: string;
  website: string;
  github: string;
  linkedin: string;
  aboutMe: string;
};

export function AdditionalInfo() {
  const { template, setTitle, setWebsite, setGithub, setLinkedIn, setAboutMe } =
    useCurriculumStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setTitle(data.title);
    setWebsite(data.website);
    setGithub(data.github);
    setLinkedIn(data.linkedin);
    setAboutMe(data.aboutMe);
    navigate("/academicData");
  };

  return (
    <Container>
      <Heading variant={"h2"}>Información adicional</Heading>

      <form
        onSubmit={handleSubmit(onSubmit)}
        id="additionalData"
        className="grow flex flex-col gap-6 w-full max-w-sm mt-8"
      >
        <div className="flex flex-col justify-start  gap-1.5">
          <Label
            htmlFor="title"
            className="text-left font-semibold flex items-center gap-2"
          >
            <GraduationCap size={16} />
            Título o cargo (opcional)
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="Ej: Desarrollador Web Fullstack"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col justify-start  gap-1.5">
          <Label
            htmlFor="website"
            className="text-left font-semibold flex items-center gap-2"
          >
            <Monitor size={16} />
            Página Web (opcional)
          </Label>
          <Input
            id="website"
            type="text"
            placeholder="Ej: www.misitiowebpersonal.com"
            {...register("website")}
          />
        </div>
        <div className="flex flex-col justify-start  gap-1.5">
          <Label
            htmlFor="github"
            className="text-left font-semibold flex items-center gap-2"
          >
            <Github size={16} />
            Github (opcional)
          </Label>
          <Input
            id="github"
            type="text"
            placeholder="Ej: github.com/miPerfil"
            {...register("github")}
          />
        </div>
        <div className="flex flex-col justify-start  gap-1.5">
          <Label
            htmlFor="linkedin"
            className="text-left font-semibold flex items-center gap-2"
          >
            <Linkedin size={16} />
            LinkedIn (opcional)
          </Label>
          <Input
            id="linkedin"
            type="text"
            placeholder="Ej: linkedin.com/in/miPerfil"
            {...register("linkedin")}
          />
        </div>

        {template !== "Serio" && (
          <div className="flex flex-col justify-start  gap-1.5">
            <Label
              htmlFor="aboutMe"
              className="text-left font-semibold flex items-center gap-2"
            >
              <Text size={16} />
              Acerca de mi
            </Label>
            <Textarea
              id="aboutMe"
              {...register("aboutMe", {
                required: "Este campo es obligatorio.",
                minLength: {
                  value: 200,
                  message:
                    "La presentación debe contener al menos 200 caracteres.",
                },
                maxLength: {
                  value: 600,
                  message:
                    "La presentación no puede contener mas de 600 caracteres",
                },
              })}
            />
            <p className="text-destructive text-sm text-left">
              {errors.aboutMe?.message}
            </p>
          </div>
        )}
      </form>

      <Button
        type="submit"
        form="additionalData"
        className=" mt-5 w-full max-w-md md:w-fit md:text-md md:py-6 md:px-12"
      >
        <ArrowRight className="mr-2 " strokeWidth={3} /> Siguiente
      </Button>
    </Container>
  );
}
