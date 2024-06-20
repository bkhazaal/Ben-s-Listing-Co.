import { Search } from "lucide-react";
import { Input } from "src/components/ui/input";

export default function Page() {
  return (
    <div className="listing-container flex">
      <div className="header-container flex w-full justify-between p-5">
        <h1 className="text-3xl font-semibold ">All Listings</h1>
        <Input className="w-1/3  focus:outline-slate-500"></Input>
      </div>
      <div></div>
    </div>
  );
}
