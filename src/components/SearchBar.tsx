import { Input } from "./ui/input";

interface SearchBarProps {
  defaultValue?: string;
}

export default function SearchBar({ defaultValue }: SearchBarProps) {
  return (
    <form>
      <Input
        defaultValue={defaultValue}
        type="text"
        name="name"
        className="focus:outline-slate-300"
      />
    </form>
  );
}
