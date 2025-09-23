"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

interface Props {
  onFilter: (
    min: number,
    max: number,
    search: string,
    sort: "asc" | "desc" | ""
  ) => void;
}

export default function ProductFilter({ onFilter }: Props) {
  const [range, setRange] = useState<[number, number]>([0, 1000]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc" | "">("");

  useEffect(() => {
    onFilter(range[0], range[1], search, sort);
  }, [range, search, sort]);

  return (
    <div className="flex flex-wrap gap-4 items-center justify-between mb-6 px-4 sm:px-6 lg:px-8 ">
      {/* Price Slider */}
      <div>
        <p className="text-sm font-medium mb-2">
          Price: {range[0]}$ - {range[1]}$
        </p>
        <Slider
          defaultValue={[0, 1000]}
          min={0}
          max={2000}
          step={10}
          value={range}
          onValueChange={(val) => setRange([val[0], val[1]])}
          className="w-[250px]"
        />
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-3 py-2 flex-1 min-w-[200px]"
      />

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value as "asc" | "desc" | "")}
        className="border rounded px-3 py-2"
      >
        <option value="">Sort By</option>
        <option value="asc">Lowest Price</option>
        <option value="desc">Highest Price</option>
      </select>
    </div>
  );
}
