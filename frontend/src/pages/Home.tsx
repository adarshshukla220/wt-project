import { useEffect, useState } from "react";

import type { Product } from "@/types/product";

import { getProducts } from "@/services/product";

import ProductGrid from "@/components/ProductGrid";
import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";

import { Card } from "@/components/ui/card";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
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

  const filteredProducts = products.filter(
    (product) => {
      const query = search.toLowerCase();

      return (
        product.name
          .toLowerCase()
          .includes(query) ||
        product.category
          .toLowerCase()
          .includes(query)
      );
    },
  );

  return (
    <main className="min-h-screen bg-muted/40">

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold tracking-tight">
            Products
          </h1>

          <p className="mt-2 text-muted-foreground">
            Browse our latest products.
          </p>

        </div>

        {/* Search */}
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        {/* Loading */}
        {loading && <Loading />}

        {/* Error */}
        {!loading && error && (
          <Card className="border-destructive p-6">

            <p className="text-destructive">
              {error}
            </p>

          </Card>
        )}

        {/* Products */}
        {!loading && !error && (
          <>
            <div className="mb-5 text-sm text-muted-foreground">
              {filteredProducts.length} products found
            </div>

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