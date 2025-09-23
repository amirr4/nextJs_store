// src/modules/products/components/ProductList.tsx
import { Product } from "../types/product";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
  products: Product[];
  loading?: boolean;
}

export default function ProductList({ products, loading }: Props) {
  const gridClasses =
    "grid gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 " +
    "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

  if (loading) {
    return (
      <div className={gridClasses}>
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 px-4 sm:px-0">
        No products found
      </p>
    );
  }

  return (
    <div className={gridClasses}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
