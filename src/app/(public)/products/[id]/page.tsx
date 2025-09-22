// src/app/(public)/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { Product } from '@/modules/products/types/product';
import ProductDetailCard from '@/modules/products/components/ProductDetailCard';

// 1. Define a type for your component's props
interface ProductPageProps {
  params: {
    id: string;
  };
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

// 2. Use the defined type in your function signature
export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const product = await getProduct(params.id).catch(() => notFound());
  return (
    <main className="container mx-auto p-6">
      <ProductDetailCard product={product} />
    </main>
  );
}
