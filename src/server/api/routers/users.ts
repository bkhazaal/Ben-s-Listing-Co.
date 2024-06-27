import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        title: z.string(),
        companyName: z.string(),
        officePhone: z.string(),
        homePhone: z.string(),
        mobilePhone: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const newUser = prisma.user.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          title: input.title,
          companyName: input.companyName,
          officePhone: input.officePhone,
          homePhone: input.homePhone,
          mobilePhone: input.mobilePhone,
        },
      });
      return newUser;
    }),

  findFirst: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findFirst({});
  }),
});
