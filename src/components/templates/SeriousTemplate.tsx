import { Github, Layout, Linkedin, Mail, Phone } from "lucide-react";

function SeriousTemplate() {
  return (
    <div className="bg-white w-[595px] h-[842px] border-foreground border-2  text-zinc-900">
      <header className="bg-slate-100 p-5">
        <h1 className="text-3xl font-bold">Cristóbal Pulgar Estay</h1>
        <h4 className="text-lg font-light">FullStack Web Developer</h4>

        <div className="mt-3 flex justify-center gap-6">
          <p className="text-sm flex items-center  ">
            <Mail size={16} strokeWidth={2} className="mr-1" />{" "}
            cristobal.npe@gmail.com
          </p>
          <p className="text-sm flex items-center  ">
            <Phone size={16} strokeWidth={2.25} className="mr-1" /> +569 2000
            2280
          </p>
        </div>
        <div className="mt-2 flex justify-center gap-6">
          <p className="text-sm flex items-center ">
            <Github size={16} strokeWidth={2.25} className="mr-1" />{" "}
            github.com/in/myacc
          </p>
          <p className="text-sm flex items-center ">
            <Layout size={16} strokeWidth={2.25} className="mr-1" />{" "}
            www.mywebsite.com
          </p>
          <p className="text-sm flex items-center ">
            <Linkedin size={16} strokeWidth={2.25} className="mr-1" />{" "}
            linkedin.com/in/myacc
          </p>
        </div>
      </header>
      <main className="p-5 ">
        <section className="border-b-2 border-zinc-100 pb-4">
          <h2 className="text-xl uppercase font-thin my-3">Datos académicos</h2>
          {/*  */}
          <div className=" flex justify-between items-center">
            <div className="flex flex-col leading-4 text-left mb-3">
              <p className="font-semibold">Awakelab</p>
              <p className="font-light">Bootcamp Full Stack Java</p>
            </div>
            <div>
              <p className="font-extralight text-xs">
                Abril 2020 - Diciembre 2023
              </p>
            </div>
          </div>
        </section>
        <section className="border-b-2 border-zinc-100 pb-5">
          <h2 className="text-xl uppercase font-thin my-3">
            Experiencia Laboral
          </h2>
          {/*  */}
          <div className=" flex justify-between items-center">
            <div className="flex flex-col leading-4 text-left mb-3">
              <p className="font-semibold">Awakelab</p>
              <p className="font-light">Bootcamp Full Stack Java</p>
            </div>
            <div>
              <p className="font-extralight text-xs">
                Abril 2020 - Diciembre 2023
              </p>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-zinc-100 pb-5">
          <h2 className="text-xl uppercase font-thin my-3">
            Habilidades Técnicas
          </h2>
          {/*  */}
          <div className=" flex justify-between items-center">
            <div className="flex flex-col leading-4 text-left mb-3">
              <p className="font-semibold">Awakelab</p>
              <p className="font-light">Bootcamp Full Stack Java</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SeriousTemplate;
