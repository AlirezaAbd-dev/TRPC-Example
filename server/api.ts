import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

import { createContext } from "./context";
import { appRouter } from "./routers/index";

const app = express();

app.use(cors());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(3001, () => {
  console.log("Server is running on  http://localhost:3001");
});

export type appRouter = typeof appRouter;
