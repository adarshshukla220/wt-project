import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CartProvider } from "@/context/CartContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import CreateProduct from "@/pages/CreateProduct";
import Cart from "@/pages/Cart";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/create-product"
            element={<CreateProduct />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;