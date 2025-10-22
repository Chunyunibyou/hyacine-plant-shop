import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import "./App.css";

// Cute Header Component
function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="header">
      <h1>🌸 Hyacine Plant Shop 🌸</h1>
      <nav>
        <a href="/" className="nav-link">🏠 Home</a>
        <a href="/products" className="nav-link">🪴 Products</a>
        <a href="/cart" className="nav-link">🛒 Cart ({cartItems.length})</a>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
