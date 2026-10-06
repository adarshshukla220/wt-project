import { Link } from "react-router-dom";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({
  product,
}: ProductCardProps) => {
  return (
    <div
      style={{
        overflow: "hidden",
        border: "1px solid #e5e5e5",
        borderRadius: "12px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          height: "256px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "24px",
          }}
        />
      </div>

      <div style={{ padding: "20px" }}>
        <h2
          style={{
            margin: "0 0 10px",
            fontSize: "18px",
            lineHeight: 1.4,
          }}
        >
          {product.name}
        </h2>

        <p
          style={{
            margin: "0 0 18px",
            color: "#737373",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          {product.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <strong style={{ fontSize: "20px" }}>
            ₹{product.price.toLocaleString("en-IN")}
          </strong>

          <span
            style={{
              padding: "4px 10px",
              borderRadius: "999px",
              background: "#f5f5f5",
              fontSize: "12px",
            }}
          >
            {product.category}
          </span>
        </div>

        <Link
          to={`/products/${product._id}`}
          style={{
            display: "block",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "7px",
            background: "#111827",
            color: "#ffffff",
            textAlign: "center",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;