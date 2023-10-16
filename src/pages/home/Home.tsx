import { Heading } from "@/components/typography/Heading";
import { buttonVariants } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  

  return (
    <main className="grow p-4 text-center flex flex-col justify-center gap-12 items-center w-full">
      <section className="">
        <Heading className="mb-3">
          Crea tu <span className="text-primary">Currículum Vitae</span> con
          facilidad
        </Heading>
        <Heading variant="h3">
          Tu documento listo en minutos, en un formato elegante
        </Heading>
      </section>

      <Link
        className={`${buttonVariants({
          variant: "default",
        })} w-full md:w-fit md:text-md md:py-6 md:px-12 max-w-md`}
        to={"/size"}
      >
        {" "}
        <Sparkles className="mr-2" strokeWidth={2} /> Comenzar!
      </Link>
    </main>
  );
}

export default Home;
