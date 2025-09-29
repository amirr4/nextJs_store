'use client';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/modules/cart/store/cartStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const { items } = useCartStore();
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-blue-600">
        🛍 Online Shop
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative p-0">
              <ShoppingCart className="w-12 h-12" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-3">
            {items.length === 0 ? (
              <p className="text-sm text-gray-500">🛒 Your cart is empty</p>
            ) : (
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item.cartId}
                    className="flex justify-between text-sm border-b pb-1"
                  >
                    <span>
                      {item.title} × {item.quantity}
                    </span>
                    <span className="font-medium">${item.price}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-3">
              <Link
                href="/cart"
                onClick={() => setOpen(false)} 
                className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                View Cart
              </Link>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
