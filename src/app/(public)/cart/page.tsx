import CartList from "@/modules/cart/components/CartList";

export default function CartPage() {
  return (
    <div className="px-16">
      <h1 className="text-2xl font-bold mb-6 pt-6">🛒 Your Cart</h1>
      <CartList />
    </div>
  );
}
