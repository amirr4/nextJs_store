import ProductFilterWrapper from "@/modules/products/components/ProductFilterWrapper";

// 1. Define the type to expect a Promise
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  // 2. Await the searchParams before using them
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