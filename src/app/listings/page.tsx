import { Search } from "lucide-react";
import { useState } from "react";
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
            <div className="px-6 py-2">
              <Button variant="secondary" className="">
                Create New Listing
              </Button>
            </div>
            <Search className="mx-2 h-20 w-10"></Search>
            <Input type="text" className="focus:outline-slate-300" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2">
        {listings.map((listing) => {
          return (
            <div
              key={listing.id}
              className="m-5 flex h-48 rounded-md border border-slate-300 transition hover:scale-[1.02]"
            >
              <div className="ml-5 mt-5">
                <h1 className="text-2xl font-bold">{listing.name}</h1>
                <p className="text-sm uppercase text-slate-500">
                  {listing.location}
                </p>
                <div className="m-6 grid w-full grid-cols-3 place-content-center justify-between text-center">
                  <p className="text-sm text-slate-500">Asking Price:</p>
                  <p className="text-sm text-slate-500">Gross Revenue:</p>
                  <p className="text-sm text-slate-500">Asking Price:</p>
                  <p>
                    $
                    {listing.askingPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                  <p>
                    $
                    {listing.grossRevenue
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                  <p>
                    $
                    {listing.adjCashflow
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
