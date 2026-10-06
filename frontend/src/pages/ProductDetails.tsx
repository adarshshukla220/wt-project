import { useEffect, useState } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";

import { useCart } from "@/context/CartContext";

import type { Product } from "@/types/product";

import { getProduct } from "@/services/product";

import Loading from "@/components/Loading";

const ProductDetails = () => {
  const { id } = useParams<{
    id: string;
  }>();

  const { addToCart } = useCart();

  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);

        setProduct(data);
      } catch (error) {
        console.error(error);

        setError("Product not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !product) {
    return (
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Product not found</h1>

          <Link
            to="/"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "10px 16px",
              borderRadius: "7px",
              background: "#111827",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "calc(100vh - 64px)",
        background: "#f5f5f5",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: "12px",
          padding: "32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
          }}
        >
          <div
            style={{
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                objectFit: "contain",
                padding: "32px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: "fit-content",
                padding: "5px 10px",
                borderRadius: "999px",
                background: "#f5f5f5",
                fontSize: "12px",
              }}
            >
              {product.category}
            </span>

            <h1
              style={{
                marginTop: "16px",
                fontSize: "36px",
              }}
            >
              {product.name}
            </h1>

            <p
              style={{
                marginTop: "20px",
                color: "#737373",
                lineHeight: 1.7,
              }}
            >
              {product.description}
            </p>

            <strong
              style={{
                marginTop: "24px",
                fontSize: "30px",
              }}
            >
              ₹{product.price.toLocaleString("en-IN")}
            </strong>

            <button
              onClick={() => addToCart(product)}
              style={{
                marginTop: "24px",
                padding: "13px",
                border: "none",
                borderRadius: "7px",
                background: "#111827",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;