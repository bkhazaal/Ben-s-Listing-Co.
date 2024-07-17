import { number, z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listingRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  customMessage: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `${input.text}`,
      };
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        location: z.string(),
        askingPrice: z.number(),
        grossRevenue: z.number(),
        adjCashflow: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      const newListing = prisma.listing.create({
        data: {
          name: input.name,
          location: input.location,
          askingPrice: input.askingPrice,
          grossRevenue: input.grossRevenue,
          adjCashflow: input.adjCashflow,
        },
      });
      return newListing;
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.listing.findFirst({});
  }),

  list: publicProcedure
    // On the procudure level, we define the input schema (basically, the shape of the object that the frontend will send to the backend)
    .input(z.object({ name: z.string().optional() }))
    // We're using query here, because we're fetching data, not creating new data
    .query(({ ctx, input }) => {
      const searchString = input.name?.split(" ").join(" & ") ?? "";

      return ctx.db.listing.findMany({
        ...(input.name && {
          where: {
            name: {
              search: searchString,
            },
          },
        }),
      });
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.listing.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
