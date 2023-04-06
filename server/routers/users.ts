import { adminProcedure, t } from "../trpc";
import { z } from "zod";

const userProcedure = t.procedure.input(z.object({ userId: z.string() }));

export const userRouter = t.router({
  get: userProcedure.query((v) => {
    return { id: 1, name: "Alireza", userId: v.input.userId };
  }),
  update: userProcedure
    .input(z.object({ name: z.string() }))
    .output(z.object({ name: z.string(), id: z.string() }))
    .mutation((req) => {
      console.log(req.ctx.isAdmin);

      console.log(
        `Updateing user ${req.input.userId} to have the name ${req.input.name}`
      );
      return { id: req.input.userId, name: req.input.name };
    }),
  secretData: adminProcedure.query(({ ctx }) => {
    console.log(ctx.user);
    return "Super top secret admin data";
  }),
});
