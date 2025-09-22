import { create } from "zustand";
import { Product } from "../types/product";

type ProductState = {
  selected?: Product;
  setSelected: (p: Product) => void;
};

export const useProductStore = create<ProductState>((set) => ({
  selected: undefined,
  setSelected: (p) => set({ selected: p }),
}));
