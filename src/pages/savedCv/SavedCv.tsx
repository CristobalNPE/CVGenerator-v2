import { Heading } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { Curriculum, useCurriculumStore } from "@/stores/curriculum";
import { Eye, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SavedCv() {
  const prefix = "cvCreator";
  const keys = Object.keys(localStorage).filter((k) => k.startsWith(prefix));
  const navigate = useNavigate();
  const { setAllData } = useCurriculumStore();
  const [savedCvs, setSavedCvs] = useState<Curriculum[]>();

  useEffect(() => {
    const dataFromLocalStorage = keys
      .map((key) => {
        const jsonAsString = localStorage.getItem(key);
        return jsonAsString !== null ? JSON.parse(jsonAsString) : null;
      })
      .filter((data) => data !== null);

    setSavedCvs(dataFromLocalStorage);
  }, [keys]);

  const handleToCv = (cv: Curriculum) => {
    setAllData(cv);
    navigate("/result");
  };

  return (
    <main className="grow p-4 text-center flex flex-col items-center w-full max-w-md">
      <Heading variant={"h2"}>CVs Guardados</Heading>
      <p className="mt-2 mb-6">
        Puedes guardar tus CVs en la página de resultado y verlos acá más tarde.
      </p>
      {savedCvs?.map((parsedData) => {
        return (
          <div
            className="w-full bg-secondary py-3 px-3 flex"
            key={parsedData.id}
          >
            <div className="grow rounded-md flex justify-start items-center">
              <Button
                onClick={() =>
                  localStorage.removeItem(`${prefix}-${parsedData.id}`)
                }
                variant={"ghost"}
                size={"icon"}
              >
                <X className="text-destructive" />
              </Button>
              <div className="ml-3 grow text-left max-w-[80%] text-sm">
                <h1 className="font-thin">
                  <span className="font-bold">Nombre :</span>
                  <br className="sm:hidden" /> {parsedData.fullName}
                </h1>
                <h1 className="font-thin">
                  <span className="font-bold">Formato:</span>
                  <br className="sm:hidden" /> {parsedData.template}
                </h1>
                <h1 className="font-thin">
                  <span className="font-bold">Creado:</span>
                  <br className="sm:hidden" /> {parsedData.creationDate}
                </h1>
              </div>
              <Button onClick={() => handleToCv(parsedData)} size={"icon"}>
                <Eye />
              </Button>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default SavedCv;
