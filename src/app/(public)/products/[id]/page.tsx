// src/app/(public)/products/[id]/page.tsx
import { notFound } from "next/navigation";
import { Product } from "@/modules/products/types/product";
import ProductDetailCard from "@/modules/products/components/ProductDetailCard";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id).catch(() => notFound());

  return (
    <main className="container mx-auto p-6">
      <ProductDetailCard product={product} />
    </main>
  );
}
