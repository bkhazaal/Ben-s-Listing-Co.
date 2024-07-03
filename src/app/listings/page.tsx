"use server";
import { Search } from "lucide-react";
import Link from "next/link";
import "src/styles/globals.css";
import DeleteButton from "~/components/deletebutton";
import { Input } from "~/components/ui/input";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Page() {
  const listings = await api.listing.list();
  const session = await getServerAuthSession();

  return (
    <main>
      <div className="flex">
        <div className="flex w-full justify-between p-10">
          <h1 className="text-3xl font-semibold">All Listings</h1>
          <div className="flex h-10 items-center">
            <div className="w-[250px] rounded-md border p-2 text-center">
              <Link
                href={
                  session
                    ? "/listings/create-listing"
                    : "/listings/signinplease"
                }
                className="text-[13px]"
              >
                Create New Listing
              </Link>
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
              className="fadeInUp-animation m-5 h-48 rounded-md border border-slate-300 transition hover:scale-[1.02] hover:cursor-pointer hover:shadow-md"
            >
              <div className="ml-5 mt-5">
                <div className="flex w-full justify-between">
                  <h1 className="text-2xl font-bold">{listing.name}</h1>
                  <DeleteButton id={listing.id}></DeleteButton>
                </div>
                <p className="text-sm uppercase text-slate-500">
                  {listing.location}
                </p>
                <div className="flex justify-center">
                  <div className="m-2 grid w-full grid-cols-3 place-content-center justify-between text-center">
                    <p className="text-sm text-slate-500">Asking Price:</p>
                    <p className="text-sm text-slate-500">Gross Revenue:</p>
                    <p className="text-sm text-slate-500">Adjusted Cashflow:</p>
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
            </div>
          );
        })}
      </div>
    </main>
  );
}
