"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="border rounded-lg p-4 space-y-3 shadow-sm">
      {/* photo */}
      <Skeleton className="w-full h-40 rounded-lg" />

      {/* title */}
      <Skeleton className="h-4 w-3/4" />

      {/* price */}
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
