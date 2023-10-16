import { ArrowBigLeft, RefreshCw, Save, Settings2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTheme } from "@/providers/ThemeProvider";
function NavigationBar() {
  const { theme, setTheme } = useTheme();

  const navigate = useNavigate();


  const handleToSavedCvs = () => {
    navigate("/saved");
  };

  return (
    <nav className="my-4">
      <Button variant={"secondary"} className="rounded-l-full p-6">
        <ArrowBigLeft className="mr-2" /> Atrás
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"secondary"} className="rounded-r-full p-6">
            <Settings2 className="mr-2" />
            Opciones
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit p-1">
          <div className="flex flex-col gap-1">
            <Button
              onClick={
                theme === "dark"
                  ? () => setTheme("light")
                  : () => setTheme("dark")
              }
              variant={"secondary"}
              className="py-7"
            >
              <RefreshCw className="mr-2" /> Cambiar tema
            </Button>

            <Button onClick={handleToSavedCvs} variant={"secondary"} className="py-7">
              <Save className="mr-2" /> CV Guardados
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
}

export default NavigationBar;
