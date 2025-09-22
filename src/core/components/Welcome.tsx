import { ShoppingBag } from "lucide-react";
import React from "react";
import Link from "next/link";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <span>Welcome to</span>
      <div className="flex items-center justify-center gap-3">
        <ShoppingBag />
        <h1 className="text-3xl font-bold text-gray-800">Online shop</h1>
      </div>
      <Link
        href="/products"
        className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go to products
      </Link>
    </div>
  );
}

export default Welcome;
