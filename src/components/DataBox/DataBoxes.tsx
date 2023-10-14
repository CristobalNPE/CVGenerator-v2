import { CurriculumData } from "@/stores/curriculum";
import DataBox from "./DataBox";

type DataBoxesProps = {
  data: CurriculumData[];
};

function DataBoxes({ data }: DataBoxesProps) {
  return (
    <article className="flex flex-col ">
      {data.map((d) => (
        <DataBox key={d.id} {...d} />
      ))}
    </article>
  );
}

export default DataBoxes;
