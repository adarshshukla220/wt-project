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
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
          border: "1px dashed #d4d4d4",
          borderRadius: "10px",
        }}
      >
        <p style={{ color: "#737373" }}>
          No products found.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "24px",
      }}
    >
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