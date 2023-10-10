import { Heading } from "@/components/typography/Heading";
import { Badge } from "@/components/ui/badge";

function SizeSelection() {
  return (
    <main className="p-4 text-center flex flex-col  items-center w-full  ">
      <article className="flex gap-10 mb-10 justify-around items-center w-full sm:max-w-sm">
        <section className="opacity-40 text-md">
          <div className="text-2xl font-semibold">0</div>
          <Badge variant={"outline"}>Inicio</Badge>
        </section>

        <section className="text-lg ">
          <div className="text-3xl font-black">1</div>
          <Badge>Formato</Badge>
        </section>

        <section className="opacity-40  text-md ">
          <div className="text-2xl font-semibold">2</div>
          <Badge variant={"outline"} >Plantilla</Badge>
        </section>
      </article>

      <Heading variant={"h2"}>Selecciona el formato del documento</Heading>

      {/* carousel? or something to select between a4,letter,oficio */}
      {/* when selected, button continuar */}
    </main>
  );
}

export default SizeSelection;
