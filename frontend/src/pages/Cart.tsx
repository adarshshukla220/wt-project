import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

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
      <main
        style={{
          minHeight: "70vh",
          background: "#f5f5f5",
          padding: "48px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "64px 20px",
            textAlign: "center",
            background: "#fff",
            borderRadius: "12px",
          }}
        >
          <h1>Your cart is empty</h1>

          <p style={{ color: "#737373" }}>
            Add some products to your cart.
          </p>

          <Link
            to="/"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "11px 18px",
              borderRadius: "7px",
              background: "#111827",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "70vh",
        background: "#f5f5f5",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          <div>
            <h1 style={{ margin: 0 }}>
              Shopping Cart
            </h1>

            <p style={{ color: "#737373" }}>
              Review your items before checkout.
            </p>
          </div>

          <button
            onClick={clearCart}
            style={{
              padding: "9px 14px",
              border: "1px solid #d4d4d4",
              borderRadius: "7px",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Clear Cart
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0, 1fr) 300px",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {cart.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "20px",
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "contain",
                    background: "#f5f5f5",
                    borderRadius: "8px",
                  }}
                />

                <div
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          margin: 0,
                          fontSize: "17px",
                        }}
                      >
                        {item.name}
                      </h2>

                      <p
                        style={{
                          color: "#737373",
                        }}
                      >
                        ₹
                        {item.price.toLocaleString(
                          "en-IN",
                        )}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(item._id)
                      }
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "20px",
                    }}
                  >
                    <button
                      onClick={() =>
                        decreaseQuantity(item._id)
                      }
                      style={quantityButton}
                    >
                      <Minus size={15} />
                    </button>

                    <span
                      style={{
                        width: "30px",
                        textAlign: "center",
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item._id)
                      }
                      style={quantityButton}
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>

                <strong>
                  ₹
                  {(
                    item.price * item.quantity
                  ).toLocaleString("en-IN")}
                </strong>
              </div>
            ))}
          </div>

          <div
            style={{
              height: "fit-content",
              padding: "24px",
              background: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "10px",
            }}
          >
            <h2>Order Summary</h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Subtotal</span>

              <span>
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>

            <hr
              style={{
                border: 0,
                borderTop: "1px solid #e5e5e5",
                margin: "20px 0",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              <span>Total</span>

              <span>
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "24px",
                padding: "12px",
                border: "none",
                borderRadius: "7px",
                background: "#111827",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

const quantityButton = {
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #d4d4d4",
  borderRadius: "6px",
  background: "#fff",
  cursor: "pointer",
};

export default Cart;