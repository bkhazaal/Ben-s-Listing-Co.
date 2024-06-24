import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { Prisma, PrismaClient } from "@prisma/client";

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

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        location: z.string(),
        askingPrice: z.number(),
        grossRevenue: z.number(),
        adjCashflow: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
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

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.listing.findMany({});
  }),

  getSecretMessage: publicProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
