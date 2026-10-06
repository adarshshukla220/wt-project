import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #e5e5e5",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          height: "64px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#111827",
            textDecoration: "none",
          }}
        >
          Amazon Clone
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Link
            to="/"
            style={navLinkStyle}
          >
            Home
          </Link>

          <Link
            to="/create-product"
            style={navLinkStyle}
          >
            Add Product
          </Link>

          <div
            style={{
              width: "1px",
              height: "24px",
              background: "#d4d4d4",
              margin: "0 8px",
            }}
          />

          <Link
            to="/cart"
            style={{
              ...navLinkStyle,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#111827",
              color: "#ffffff",
            }}
          >
            <ShoppingCart size={17} />

            <span>Cart</span>

            {cartCount > 0 && (
              <span
                style={{
                  background: "#ffffff",
                  color: "#111827",
                  borderRadius: "999px",
                  padding: "2px 7px",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

const navLinkStyle = {
  padding: "8px 12px",
  borderRadius: "6px",
  color: "#374151",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
};

export default Navbar;