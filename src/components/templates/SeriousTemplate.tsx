import { Curriculum } from "@/stores/curriculum";
import { Github, Layout, Linkedin, Mail, Phone } from "lucide-react";

type TemplateProps = {
  cv: Curriculum;
};

function SeriousTemplate({ cv }: TemplateProps) {
  return (
    <div className="bg-white w-[595px] h-[842px] border-foreground border-2  text-zinc-900 overflow-auto">
      <header className="bg-slate-100 py-6 px-8">
        <h1 className="text-3xl font-bold">{cv.fullName}</h1>
        {cv.title && <h4 className="text-lg font-light">{cv.title}</h4>}
        <div className="mt-3 flex justify-center gap-6">
          <p className="text-xs flex items-center  ">
            <Mail size={14} strokeWidth={2} className="mr-1" /> {cv.email}
          </p>
          <p className="text-xs flex items-center  ">
            <Phone size={14} strokeWidth={2.25} className="mr-1" />{" "}
            {cv.phoneNumber}
          </p>
        </div>
        {(cv.github || cv.linkedIn || cv.website) && (
          <div className="mt-2 flex justify-center gap-6">
            {cv.github && (
              <p className="text-xs flex items-center ">
                <Github size={14} strokeWidth={2.25} className="mr-1" />{" "}
                {cv.github}
              </p>
            )}
            {cv.website && (
              <p className="text-xs flex items-center ">
                <Layout size={14} strokeWidth={2.25} className="mr-1" />{" "}
                {cv.website}
              </p>
            )}
            {cv.linkedIn && (
              <p className="text-xs flex items-center ">
                <Linkedin size={14} strokeWidth={2.25} className="mr-1" />{" "}
                {cv.linkedIn}
              </p>
            )}
          </div>
        )}
      </header>
      <main className="px-8 ">
        <section className="border-b-2 border-zinc-100 py-4 text-sm">
          <h2 className="text-xl uppercase font-thin mb-5">Datos académicos</h2>

          {cv.academicData.map((data) => {
            return (
              <div key={data.id} className=" flex justify-between items-center">
                <div className="flex flex-col leading-[18px] text-left mb-3 w-[60%]">
                  <p className="font-semibold">{data.title}</p>
                  <p className="font-light">{data.description}</p>
                </div>
                <div>
                  <p className="font-extralight text-xs">
                    <span className="capitalize">{data.from}</span> -{" "}
                    <span className="capitalize">{data.until}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="border-b-2 border-zinc-100 py-4 text-sm">
          <h2 className="text-xl uppercase font-thin mb-5">
            Experiencia Laboral
          </h2>
          {cv.workExperience.map((data) => {
            return (
              <div key={data.id} className=" flex justify-between items-center">
                <div className="flex flex-col leading-[18px] text-left mb-3 w-[60%]">
                  <p className="font-semibold">{data.title}</p>
                  <p className="font-light">{data.description}</p>
                </div>
                <div>
                  <p className="font-extralight text-xs">
                    <span className="capitalize">{data.from}</span> -{" "}
                    <span className="capitalize">{data.until}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="border-b-2 border-zinc-100 py-4 text-sm">
          <h2 className="text-xl uppercase font-thin mb-5">
            Habilidades Técnicas
          </h2>
          {cv.technicalSkills.map((data) => {
            return (
              <div key={data.id} className=" flex justify-between items-center">
                <div className="flex flex-col leading-[18px] text-left mb-3 w-[60%]">
                  <p className="font-semibold">{data.title}</p>
                  <p className="font-light">{data.description}</p>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default SeriousTemplate;
