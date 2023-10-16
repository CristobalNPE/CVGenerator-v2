import { Curriculum } from "@/stores/curriculum";
import { Github, Layout, Linkedin, Mail, Phone } from "lucide-react";
type TemplateProps = {
  cv: Curriculum;
};

function FullTemplate({ cv }: TemplateProps) {
  return (
    <div className="flex bg-zinc-200 w-[595px] h-[842px] border-foreground border-2  text-zinc-900 overflow-auto">
      <aside className="bg-zinc-800 w-[22rem] text-white flex flex-col py-2 px-3  justify-start gap-12 rounded-t-full ">
        <div className=" bg-zinc-200 rounded-full  w-full aspect-square mx-auto ">
          {/* Photo goes here */}
        </div>

        <section className="py-4 text-sm ">
          <h2 className="text-lg uppercase font-thin mb-5 bg-zinc-200 text-zinc-800  rounded-full text-center">
            Datos académicos
          </h2>

          {cv.academicData.map((data) => {
            return (
              <div key={data.id} className=" flex justify-between items-center">
                <div className="flex flex-col leading-[18px] text-left mb-3 w-full items-center">
                  <p className="font-semibold">{data.title}</p>
                  <p className="font-light">{data.description}</p>
                </div>
              </div>
            );
          })}
        </section>

        <section>
          <h2 className="text-lg uppercase font-thin mb-5 bg-zinc-200 text-zinc-800  rounded-full text-center">
            Contacto
          </h2>
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
        </section>
      </aside>
      <main className="py-10 px-6 overflow-auto  w-full">
        <h1 className="text-left text-2xl font-bold uppercase">
          {cv.fullName}
        </h1>
        {cv.title && (
          <h4 className="text-lg font-regular text-left">{cv.title}</h4>
        )}
        <hr className="opacity-10 my-2" />
        <p className="text-xs text-left">{cv.aboutMe}</p>

        <section className="py-4 text-sm">
          <h2 className="text-lg uppercase font-thin mb-5 bg-zinc-800 text-white rounded-full text-center">
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
                  <p className="font-thin text-xs opacity-80">
                    <span className="capitalize">{data.from}</span> -{" "}
                    <span className="capitalize">{data.until}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </section>
        <section className="py-4 text-sm">
          <h2 className="text-lg uppercase font-thin mb-5 bg-zinc-800 text-white rounded-full text-center">
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

export default FullTemplate;
