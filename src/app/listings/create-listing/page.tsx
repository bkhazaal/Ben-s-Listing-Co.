"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { api } from "~/trpc/react";

const schema = z.object({
  name: z.string(),
  location: z.string(),
  askingPrice: z.number(),
  grossRevenue: z.number(),
  adjCashflow: z.number(),
});

type Schema = z.infer<typeof schema>;

export default function CreateListing() {
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const createListing = api.listing.create.useMutation({
    onSuccess: () => {
      console.log("success");
    },
  });
  const onSubmit = (data: Schema) => {
    createListing.mutate({
      name: data.name,
      location: data.location,
      askingPrice: data.askingPrice,
      grossRevenue: data.grossRevenue,
      adjCashflow: data.adjCashflow,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-[200px] py-[50px]">
      <h1 className="text-center text-3xl">New Listing</h1>
      <div className="py-5 text-center">
        <div className="py-2">
          <Label>Company Name:</Label>
          <div>
            <input
              {...register("name")}
              className="my-2 rounded-lg border border-slate-300 px-3 py-2"
            ></input>
          </div>
        </div>
        <div className="py-2">
          <Label>Location:</Label>
          <div>
            <input
              {...register("location")}
              className="my-2 rounded-lg border border-slate-300 px-3 py-2"
            ></input>
          </div>
        </div>
        <div className="py-2">
          <Label>Asking Price:</Label>
          <div>
            <input
              {...register("askingPrice", {
                valueAsNumber: true,
              })}
              className="my-2 rounded-lg border border-slate-300 px-3 py-2"
            ></input>
          </div>
        </div>
        <div className="py-2">
          <Label>Gross Revenue:</Label>
          <div>
            <input
              {...register("grossRevenue", {
                valueAsNumber: true,
              })}
              className="my-2 rounded-lg border border-slate-300 px-3 py-2"
            ></input>
          </div>
        </div>
        <div className="py-2">
          <Label>Adjusted Cashflow:</Label>
          <div>
            <input
              {...register("adjCashflow", {
                valueAsNumber: true,
              })}
              className="my-2 rounded-lg border border-slate-300 px-3 py-2"
            ></input>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="bg-black hover:bg-black" type="submit">
          Publish
        </Button>
      </div>
    </form>
  );
}
