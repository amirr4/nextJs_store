"use client";
import { useState, useEffect, useCallback } from "react";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import { Product } from "../types/product";
import { getProducts } from "../services/productApi";

interface Props {
  initialCategory?: string;
}

export default function ProductFilterWrapper({ initialCategory }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        let data: Product[] = [];
        if (initialCategory) {
          const res = await fetch(
            `https://fakestoreapi.com/products/category/${encodeURIComponent(initialCategory)}`
          );
          data = await res.json();
        } else {
          data = await getProducts();
        }
        setProducts(data);
        setFiltered(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [initialCategory]);

  const handleFilter = useCallback(
    (min: number | "", max: number | "", search: string, sort: "asc" | "desc" | "") => {
      let result = products.filter((p) => {
        const matchPrice =
          (min === "" || p.price >= min) && (max === "" || p.price <= max);
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
        return matchPrice && matchSearch;
      });

      if (sort === "asc") result = [...result].sort((a, b) => a.price - b.price);
      if (sort === "desc") result = [...result].sort((a, b) => b.price - a.price);

      setFiltered(result);
    },
    [products]
  );

  return (
    <div>
      <ProductFilter onFilter={handleFilter} />
      <ProductList products={filtered} loading={loading} />
    </div>
  );
}
