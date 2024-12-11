import { z } from "zod";
import { procedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userRouter = router({
  addUser: procedure
    .input(z.object({ name: z.string(), role: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      await prisma.user.create({
        data: {
          name: input.name,
          role: input.role,
        },
      });
    }),
  getUsers: procedure.query(async () => {
    return await prisma.user.findMany();
  }),
  updateUser: procedure
    .input(z.object({ id: z.number(), name: z.string(), role: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      await prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          role: input.role,
        },
      });
    }),
  removeUser: procedure
    .input(z.object({ id: z.number() }))
    .mutation(async (opts) => {
      const { input } = opts;
      await prisma.user.delete({
        where: { id: input.id },
      });
    }),
});
