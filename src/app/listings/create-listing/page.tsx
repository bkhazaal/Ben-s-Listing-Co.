"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
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
  const { control, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const createListing = api.listing.create.useMutation({
    onSuccess: () => {
      console.log("success");
    },
  });

  const onSubmit = (data: Schema) =>
    createListing.mutate({
      name: data.name,
      location: data.location,
      askingPrice: data.askingPrice,
      grossRevenue: data.grossRevenue,
      adjCashflow: data.adjCashflow,
    });

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 py-[50px]">
        <h1 className="text-center text-3xl">New Listing</h1>
        <div className=" py-5">
          <div className="py-2">
            <Label>Company Name:</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </div>
          <div className="py-2">
            <Label>Location:</Label>
            <Controller
              name="location"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </div>
          <div className="py-2">
            <Label>Asking Price:</Label>
            <Controller
              name="askingPrice"
              control={control}
              render={({ field }) => <Input {...field} type="number" />}
            />
          </div>
          <div className="py-2">
            <Label>Gross Revenue:</Label>
            <Controller
              name="grossRevenue"
              control={control}
              render={({ field }) => <Input {...field} type="number" />}
            />
          </div>
          <div className="py-2">
            <Label>Adjusted Cashflow:</Label>
            <Controller
              name="adjCashflow"
              control={control}
              render={({ field }) => <Input {...field} type="number" />}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button type="submit">Publish</Button>
        </div>
      </form>
    </div>
  );
}
