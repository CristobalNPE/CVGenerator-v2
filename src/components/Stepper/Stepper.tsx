import { Badge } from "../ui/badge";

function Stepper() {
  //state with current step?
  //works with array of steps?
  //outside of outlet???

  return (
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
        <Badge variant={"outline"}>Plantilla</Badge>
      </section>
    </article>
  );
}

export default Stepper;
