import { CurriculumData } from "@/stores/curriculum";
import DataBox from "./DataBox";

type DataBoxesProps = {
  data: CurriculumData[];
  handleRemove:(id:string)=>void;
};

function DataBoxes({ data,handleRemove }: DataBoxesProps) {
  return (
    <article className="flex flex-col ">
      {data.map((d) => (
        <DataBox handleRemove={handleRemove} key={d.id} {...d} />
      ))}
    </article>
  );
}

export default DataBoxes;
