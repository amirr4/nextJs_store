// src/app/(public)/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { Product } from '@/modules/products/types/product';
import ProductDetailCard from '@/modules/products/components/ProductDetailCard';

type PageProps = {
  params: { id: string };
};

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = params;

  const product = await getProduct(id).catch(() => notFound());

  return (
    <main className="container mx-auto p-6">
      <ProductDetailCard product={product} />
    </main>
  );
}
