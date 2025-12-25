import ProductFilterWrapper from "@/modules/products/components/ProductFilterWrapper";

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams.category ?? "";

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">
        🛍️ Products {category && `(${category})`}
      </h1>
      <ProductFilterWrapper initialCategory={category} />
    </div>
  );
}