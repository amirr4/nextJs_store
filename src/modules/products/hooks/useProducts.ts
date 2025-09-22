import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productApi";
import { Product } from "../types/product";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
