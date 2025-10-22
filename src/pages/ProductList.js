import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plants = [
    { id: 1, name: "🌷 Hyacine Bloom", price: 199, category: "Flowering", img: "https://i.imgur.com/xMTPyWu.jpeg" },
    { id: 2, name: "🌿 Minty Fresh", price: 149, category: "Herb", img: "https://i.imgur.com/TDzS5i8.jpeg" },
    { id: 3, name: "🌼 Daisy Dream", price: 129, category: "Flowering", img: "https://i.imgur.com/YdC6k2Q.jpeg" },
    { id: 4, name: "🌵 Cactus Cutie", price: 99, category: "Succulent", img: "https://i.imgur.com/hUkjUIh.jpeg" },
    { id: 5, name: "🌸 Sakura Sprout", price: 179, category: "Flowering", img: "https://i.imgur.com/n6OeiML.jpeg" },
    { id: 6, name: "🪴 Aloe Baby", price: 159, category: "Succulent", img: "https://i.imgur.com/LdIuCwh.jpeg" },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div className="product-page">
      <h2 className="page-title">🌷 Our Lovely Plants 🌷</h2>

      <div className="categories">
        <span>🌸 Flowering</span>
        <span>🌿 Herb</span>
        <span>🪴 Succulent</span>
      </div>

      <div className="plant-grid">
        {plants.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img src={plant.img} alt={plant.name} className="plant-img" />
            <h3>{plant.name}</h3>
            <p>₱{plant.price}</p>
            <button
              onClick={() => handleAddToCart(plant)}
              disabled={isInCart(plant.id)}
              className="add-btn"
            >
              {isInCart(plant.id) ? "🌿 Added!" : "🛒 Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
