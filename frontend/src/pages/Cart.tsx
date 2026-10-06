import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "@/context/CartContext";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-muted/40 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="py-16 text-center">
              <h1 className="text-2xl font-bold">
                Your cart is empty
              </h1>

              <p className="mt-2 text-muted-foreground">
                Add some products to your cart.
              </p>

              <Button
                
                className="mt-6"
              >
                <Link to="/">
                  Continue Shopping
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/40 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Shopping Cart
            </h1>

            <p className="text-muted-foreground">
              Review your items before checkout.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

          <div className="space-y-4">
            {cart.map((item) => (
              <Card key={item._id}>
                <CardContent className="flex gap-5 p-5">

                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">

                    <div className="flex justify-between gap-4">
                      <div>
                        <h2 className="font-semibold">
                          {item.name}
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          removeFromCart(item._id)
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-auto flex items-center gap-2">

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          decreaseQuantity(item._id)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>

                      <span className="w-8 text-center">
                        {item.quantity}
                      </span>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          increaseQuantity(item._id)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>

                    </div>
                  </div>

                  <div className="font-bold">
                    ₹{(
                      item.price * item.quantity
                    ).toLocaleString("en-IN")}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle>
                Order Summary
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between">
                <span>Subtotal</span>

                <span>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>

                <span>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>

              <Button className="mt-6 w-full">
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  );
};

export default Cart;