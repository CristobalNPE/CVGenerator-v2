import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

function Home() {
  return (
    <main className="p-4 text-center flex flex-col justify-center gap-12 items-center w-full">
      <section>
        <Heading className="mb-3">
          Crea tu <span className="text-primary">Currículum Vitae</span> con
          facilidad.
        </Heading>
        <Heading variant="h3">
          Tu documento listo en minutos, en un formato elegante.
        </Heading>
      </section>
      <Button
        size={"lg"}
        className="w-full md:w-fit md:text-md md:py-6 md:px-12"
      >
        <Sparkles className="mr-2" /> Comenzar!
      </Button>
    </main>
  );
}

export default Home;
