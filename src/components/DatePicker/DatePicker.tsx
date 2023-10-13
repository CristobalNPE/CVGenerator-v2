import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type DatePickerProps = {
  name: string;
  label: string;
};

function DatePicker({ name, label }: DatePickerProps) {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className="flex flex-col justify-start  gap-1.5">
      <Label
        htmlFor={name}
        className="text-left font-semibold flex items-center gap-2"
      >
        {label}
      </Label>
      <div className="flex gap-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Mes" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          id={name}
          type="number"
          min="1900"
          max="2099"
          step="1"
          placeholder="2000"
        />
      </div>
    </div>
  );
}

export default DatePicker;
