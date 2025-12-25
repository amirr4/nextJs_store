// src/store/cartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../types/cartType';

interface CartState {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'cartId' | 'quantity'>) => void;
  removeFromCart: (cartId: string) => void;
  clearCart: () => void;
  increaseQuantity: (cartId: string) => void;
  decreaseQuantity: (cartId: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addToCart: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            };
          }
          return {
            items: [...state.items, { ...item, cartId: crypto.randomUUID(), quantity: 1 }],
          };
        }),

      removeFromCart: (cartId) =>
        set((state) => ({
          items: state.items.filter((i) => i.cartId !== cartId),
        })),

      clearCart: () => set({ items: [] }),

      increaseQuantity: (cartId) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.cartId === cartId ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        })),

      decreaseQuantity: (cartId) =>
        set((state) => ({
          items: state.items
            .map((i) => (i.cartId === cartId ? { ...i, quantity: Math.max(i.quantity - 1, 1) } : i))
            .filter((i) => i.quantity > 0),
        })),
    }),
    {
      name: 'cart-storage', 
    },
  ),
);
