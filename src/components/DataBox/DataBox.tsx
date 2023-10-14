import { CurriculumData } from "@/stores/curriculum";
import { X } from "lucide-react";
import { Button } from "../ui/button";

type DataBoxProps = CurriculumData & {
  handleRemove: (id: string) => void;
};

function DataBox({
  title,
  description,
  from,
  until,
  id,
  handleRemove,
}: DataBoxProps) {
  return (
    <div className="flex justify-between items-center  ring-1 ring-secondary py-2 px-3 rounded-md ">
      <div className="flex flex-col text-left">
        <p className="text-sm font-semibold ">{title}</p>
        <p className="text-sm font-thin">{description}</p>
      </div>
      <div className="hidden sm:flex flex-col justify-center items-center">
        <p className="text-xs font-light capitalize">{from}</p>
        <p className="text-xs font-light capitalize">{until}</p>
      </div>

      <Button
        onClick={() => handleRemove(id)}
        variant={"outline"}
        size={"sm"}
        className="hover:text-destructive"
      >
        <X />
      </Button>
    </div>
  );
}

export default DataBox;
