import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// barrel imports
import { Navbar, Hero, ProductCard, CartItem } from "./components";

// pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Add this */}
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
