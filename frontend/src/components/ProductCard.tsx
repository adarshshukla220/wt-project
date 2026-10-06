import { Link } from "react-router-dom";

import type { Product } from "@/types/product";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({
  product,
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-6"
        />
      </div>

      <CardHeader>
        <h2 className="line-clamp-2 text-lg font-semibold">
          {product.name}
        </h2>
      </CardHeader>

      <CardContent>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-3">

          <span className="text-xl font-bold">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <Badge variant="secondary">
            {product.category}
          </Badge>

        </div>

      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          
        >
          <Link to={`/products/${product._id}`}>
            View Product
          </Link>
        </Button>
      </CardFooter>

    </Card>
  );
};

export default ProductCard;