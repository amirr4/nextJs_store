"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../store/cartStore";

export default function CartList() {
  const {
    items,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  if (items.length === 0) {
    return <p className="mt-6 text-gray-500">🛒 Your cart is empty</p>;
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4"> Cart ({totalItems} Products)</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.cartId}
            className="flex justify-between items-center border p-2 rounded-md"
          >
            <span className="flex-1 font-bold">
              {item.title} - ${item.price}
            </span>

            <div className="flex items-center gap-2 px-4">
              <Button
                size="sm"
                onClick={() => decreaseQuantity(item.cartId)}
                variant="outline"
              >
                -
              </Button>
              <span>{item.quantity}</span>
              <Button
                size="sm"
                onClick={() => increaseQuantity(item.cartId)}
                variant="outline"
              >
                +
              </Button>
            </div> 
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeFromCart(item.cartId)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2 items-center justify-center">
        <strong>Total:</strong>
        <span className="font-bold">${total.toFixed(2)}</span>
      </div>
      <Button onClick={clearCart} className="mt-4 w-full">
        Remove All
      </Button>
    </div>
  );
}
