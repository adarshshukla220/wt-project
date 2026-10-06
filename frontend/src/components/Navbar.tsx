import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="text-xl font-bold"
        >
          Amazon Clone
        </Link>

        <nav className="flex items-center gap-2">

          <Button
            variant="ghost"
          >
            <Link to="/">
              Home
            </Link>
          </Button>

          <Button
            variant="ghost"
          >
            <Link to="/create-product">
              Add Product
            </Link>
          </Button>

          <Separator
            orientation="vertical"
            className="mx-2 h-6"
          />

          <Button >
            <Link to="/cart">
              <ShoppingCart className="mr-2 h-4 w-4" />

              Cart

              {cartCount > 0 && (
                <span className="ml-2 rounded-full bg-background px-2 py-0.5 text-xs text-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;