import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";

import { trpc } from "./utils/trpc";
import ShowData from "./components/ShowData";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3001/trpc",
          async headers() {
            return {
              "x-auth-token": "yoyo",
            };
          },
        }),
        // loggerLink(),
      ],
    });
  });
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ShowData />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
