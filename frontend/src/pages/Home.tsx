import { useEffect, useState } from "react";

import type { Product } from "@/types/product";

import { getProducts } from "@/services/product";

import ProductGrid from "@/components/ProductGrid";
import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";

const Home = () => {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const data = await getProducts();

        setProducts(data);
      } catch (error) {
        console.error(error);

        setError(
          "Unable to load products. Please check the backend.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const query = search.toLowerCase().trim();

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(query) ||
      product.category
        .toLowerCase()
        .includes(query),
  );

  return (
    <main
      style={{
        minHeight: "calc(100vh - 64px)",
        background: "#f5f5f5",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "32px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            Products
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#737373",
            }}
          >
            Browse our latest products.
          </p>
        </div>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        {loading && <Loading />}

        {!loading && error && (
          <div
            style={{
              padding: "20px",
              border: "1px solid #ef4444",
              borderRadius: "8px",
              color: "#dc2626",
              background: "#fff",
            }}
          >
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <p
              style={{
                marginBottom: "20px",
                color: "#737373",
                fontSize: "14px",
              }}
            >
              {filteredProducts.length} products found
            </p>

            <ProductGrid
              products={filteredProducts}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;