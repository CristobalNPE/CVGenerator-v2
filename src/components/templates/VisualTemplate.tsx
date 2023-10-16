import { Curriculum } from "@/stores/curriculum";
import { Github, Layout, Linkedin, Mail, Phone } from "lucide-react";
type TemplateProps = {
  cv: Curriculum;
};

function VisualTemplate({ cv }: TemplateProps) {
  return (
    <div className="flex bg-white w-[595px] h-[842px] border-foreground border-2  text-zinc-900 overflow-auto">
      <aside className="bg-zinc-800 w-[20rem] text-white flex flex-col py-2 px-3  justify-end gap-12">
        <div className="mt-3 flex flex-col justify-center gap-4 ">
          <p className="text-xs flex items-center font-thin">
            <Mail size={20} strokeWidth={2} className="mr-3" /> 
            <span className="max-w-[80%] break-all">{cv.email}</span>
          </p>
          <p className="text-xs flex items-center  font-thin">
            <Phone size={20} strokeWidth={2} className="mr-3" />{" "}
            <span className="max-w-[80%] break-all">{cv.phoneNumber}</span>
          </p>

          {cv.github && (
            <p className="text-xs flex items-center font-thin">
              <Github size={20} strokeWidth={2} className="mr-3" /> 
              <span className="max-w-[80%] break-all">{cv.github}</span>
            </p>
          )}
          {cv.website && (
            <p className="text-xs flex items-center font-thin">
              <Layout size={20} strokeWidth={2} className="mr-3" /> 
              <span className="max-w-[80%] break-all">{cv.website}</span>
            </p>
          )}
          {cv.linkedIn && (
            <p className="text-xs flex items-center font-thin ">
              <Linkedin size={20} strokeWidth={2} className="mr-3" />{" "}
              <span className="max-w-[80%] break-all">{cv.linkedIn}</span>
            </p>
          )}
        </div>

        <div className="border-t-2 border-zinc-700 py-2 my-2 min-h-[50%]">
          <h2 className="text-xl text-left my-2">Acerca de mí</h2>
          <p className="opacity-95 text-xs text-left font-thin">{cv.aboutMe}</p>
        </div>
      </aside>
      <main className="py-10 px-6 overflow-auto  w-full">
        <h1 className="text-left text-3xl font-bold">{cv.fullName}</h1>
        {cv.title && (
          <h4 className="text-lg font-semibold text-left">{cv.title}</h4>
        )}
        <hr className="opacity-10" />
        <div >
          <section className="border-b-2 border-zinc-100 py-4 text-sm ">
            <h2 className="text-xl text-left uppercase font-thin mb-5">
              Datos académicos
            </h2>
         
            {cv.academicData.map((data) => {
              return (
                <div
                  key={data.id}
                  className=" flex justify-between items-center"
                >
                  <div className="flex flex-col leading-[18px] text-left mb-3 w-[60%]">
                    <p className="font-semibold">{data.title}</p>
                    <p className="font-light">{data.description}</p>
                  </div>
                  <div>
                    <p className="font-thin text-xs opacity-80">
                      <span className="capitalize">{data.from}</span> -{" "}
                      <span className="capitalize">{data.until}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </section>

          <section className="border-b-2 border-zinc-100 py-4 text-sm">
            <h2 className="text-xl text-left uppercase font-thin mb-5">
              Experiencia Laboral
            </h2>
            {cv.workExperience.map((data) => {
              return (
                <div
                  key={data.id}
                  className=" flex justify-between items-center"
                >
                  <div className="flex flex-col leading-[18px] text-left mb-3 w-[60%]">
                    <p className="font-semibold">{data.title}</p>
                    <p className="font-light">{data.description}</p>
                  </div>
                  <div>
                    <p className="font-thin text-xs opacity-80">
                      <span className="capitalize">{data.from}</span> -{" "}
                      <span className="capitalize">{data.until}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </section>

          <section className="border-b-2 border-zinc-100 py-4 text-sm">
            <h2 className="text-xl text-left uppercase font-thin mb-5">
              Habilidades Técnicas
            </h2>
            {cv.technicalSkills.map((data) => {
              return (
                <div
                  key={data.id}
                  className=" flex justify-between items-center"
                >
                  <div className="flex flex-col leading-[18px] text-left mb-3 w-[60%]">
                    <p className="font-semibold">{data.title}</p>
                    <p className="font-light">{data.description}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default VisualTemplate;
