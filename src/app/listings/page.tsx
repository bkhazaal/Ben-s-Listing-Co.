import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/server";

export default async function Page() {
  const listings = await api.listing.list();
  return (
    <main>
      <div className="flex">
        <div className="flex w-full justify-between p-5">
          <h1 className="text-3xl font-semibold">All Listings</h1>
          <div className="w-120 flex h-10 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="bg-sla0te-200 focus:outline-none"
              >
                <div className="px-6 py-2">
                  <Button variant="secondary" className="">
                    Items per page
                  </Button>
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
      <div className="flex">
        <div className="m-5 flex h-48 w-1/2 rounded-md border border-slate-300"></div>
        <div className="m-5 flex h-48 w-1/2 rounded-md border border-slate-300"></div>
      </div>
      <div className="flex">
        <div className="m-5 flex h-48 w-1/2 rounded-md border border-slate-300"></div>
        <div className="m-5 flex h-48 w-1/2 rounded-md border border-slate-300"></div>
      </div>
    </main>
  );
}
