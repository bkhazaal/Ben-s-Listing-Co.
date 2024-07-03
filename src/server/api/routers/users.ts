import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

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
  update: protectedProcedure
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
    .mutation(async ({ ctx, input }) => {
      const updatedUser = ctx.db.user.update({
        where: {
          id: ctx.session.user.id,
        },
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
      return updatedUser;
    }),

  users: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findFirst({});
  }),
});
