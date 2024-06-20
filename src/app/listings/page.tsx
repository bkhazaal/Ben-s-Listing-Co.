import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";

export default function Page() {
  return (
    <div className="flex">
      <div className="flex w-full justify-between p-5">
        <h1 className="text-3xl font-semibold">All Listings</h1>
        <div className="w-120 flex h-10 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-sla0te-200 focus:outline-none">
              <div className="px-6 py-2">
                <button className="h-10 w-16 rounded-lg bg-slate-100">
                  Items
                </button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>10 Items Per Page</DropdownMenuItem>
              <DropdownMenuItem>20 Items Per Page</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Search className="mx-2 h-20 w-10"></Search>
          <Input className="focus:outline-slate-300" />
        </div>
      </div>
    </div>
  );
}
