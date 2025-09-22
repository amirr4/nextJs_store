"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { queryClient as client } from "@/lib/react-query/queryClient";

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => client);
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
