// src/app/products/page.tsx
import ProductFilterWrapper from "@/modules/products/components/ProductFilterWrapper";

interface Props {
  searchParams: { category?: string };
}

export default function ProductsPage({ searchParams }: Props) {
  const category = searchParams.category || "";

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">🛍️ Products {category && `(${category})`}</h1>
      <ProductFilterWrapper initialCategory={category} />
    </div>
  );
}
