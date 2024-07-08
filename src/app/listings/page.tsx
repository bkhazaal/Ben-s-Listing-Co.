"use server";
import { Search } from "lucide-react";
import Link from "next/link";
import "src/styles/globals.css";
import DeleteButton from "~/components/deletebutton";
import SearchBar from "~/components/search";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Page() {
  const listings = await api.listing.list();
  const session = await getServerAuthSession();
  if (session?.user)
    return (
      <main>
        <div className="flex">
          <div className="flex w-full justify-between p-10">
            <div className="flex gap-5">
              <h1 className="text-3xl font-semibold">All Listings</h1>
              <div className="w-[150px] rounded-md border p-2 text-center">
                <Link href="/create-listing" className="text-[13px]">
                  Create New Listing
                </Link>
              </div>
            </div>
            <div className="flex h-10 items-center">
              <Search className="mx-1 h-7 w-10"></Search>
              <SearchBar></SearchBar>
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
                      <p className="text-sm text-slate-500">
                        Adjusted Cashflow:
                      </p>
                      <p>
                        {listing.askingPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                      <p>
                        {listing.grossRevenue.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                      <p>
                        {listing.adjCashflow.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
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
  else
    return (
      <main>
        <h1 className="fadeInUp-animation flex justify-center p-[50px] text-center text-4xl font-bold">
          Sign in to <br /> view all listings
        </h1>
      </main>
    );
}
