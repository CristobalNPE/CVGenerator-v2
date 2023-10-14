import { Badge } from "../ui/badge";

function Stepper() {
  //state with current step?
  //works with array of steps?
  //outside of outlet???

  return (
    <article className="flex gap-10 mb-10 justify-between items-center w-full sm:max-w-sm">
      <section className="text-md cursor-pointer">
        <div className="text-xl font-semibold">0</div>
        <Badge variant={"secondary"}>Inicio</Badge>
      </section>

      <section className="text-lg ">
        <div className="text-2xl font-black">1</div>
        <Badge>Formato</Badge>
      </section>

      <section className="opacity-30  text-md ">
        <div className="text-xl font-semibold">2</div>
        <Badge variant={"outline"}>Plantilla</Badge>
      </section>
    </article>
  );
}

export default Stepper;
