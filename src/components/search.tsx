import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <div>
      {" "}
      <Input type="text" className="focus:outline-slate-300" />
    </div>
  );
}
