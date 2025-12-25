import ProductFilterWrapper from "@/modules/products/components/ProductFilterWrapper";


export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>; 
}) {
  
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