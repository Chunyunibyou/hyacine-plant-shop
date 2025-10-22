import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="company-name">🌸 Hyacine Plant Shop 🌸</h1>
        <p className="company-desc">
          Welcome to Hyacine — your cozy little garden online 🌷. 
          Discover adorable houseplants that bring calm and color to your space. 
          Each plant is grown with love and a sprinkle of cuteness 💖.
        </p>
        <button className="start-btn" onClick={() => navigate("/products")}>
          🌿 Get Started 🌿
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
