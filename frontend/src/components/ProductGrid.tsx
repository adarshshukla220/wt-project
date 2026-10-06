import type { Product } from "@/types/product";

import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({
  products,
}: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed py-20 text-center">
        <p className="text-muted-foreground">
          No products found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;