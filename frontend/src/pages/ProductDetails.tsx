import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

import { getProduct } from "@/services/product";

import Loading from "@/components/Loading";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
const { addToCart } = useCart();
  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

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
      <main className="flex min-h-screen items-center justify-center">

        <div className="text-center">

          <h1 className="text-2xl font-bold">
            {error || "Product not found"}
          </h1>

          <Button
            className="mt-6"
          >
            <Link to="/">
              Back to Products
            </Link>
          </Button>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/40 px-6 py-12">

      <div className="mx-auto max-w-6xl">

        <Card>

          <CardContent className="p-8">

            <div className="grid gap-10 md:grid-cols-2">

              {/* Image */}
              <div className="flex min-h-100 items-center justify-center rounded-lg bg-muted">

                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-100 max-w-full object-contain p-8"
                />

              </div>

              {/* Information */}
              <div className="flex flex-col justify-center">

                <Badge className="w-fit">
                  {product.category}
                </Badge>

                <h1 className="mt-4 text-4xl font-bold">
                  {product.name}
                </h1>

                <p className="mt-6 leading-7 text-muted-foreground">
                  {product.description}
                </p>

                <p className="mt-8 text-3xl font-bold">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

               <Button
  size="lg"
  className="mt-8"
  onClick={() => addToCart(product)}
>
  Add to Cart
</Button>

              </div>

            </div>

          </CardContent>

        </Card>

      </div>

    </main>
  );
};

export default ProductDetails;