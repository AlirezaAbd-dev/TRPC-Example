import { createTRPCReact } from "@trpc/react-query";
import type { appRouter } from "../../../server/api";

export const trpc = createTRPCReact<appRouter>();
