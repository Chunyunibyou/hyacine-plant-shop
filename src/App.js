import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductList from "./pages/ProductList"; // we’ll make this next 💕


function ProductListPlaceholder() {
  return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product page coming soon! 🌿</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListPlaceholder />} />
      </Routes>
    </Router>
  );
}

export default App;
