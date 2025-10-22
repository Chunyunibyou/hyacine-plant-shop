import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <header className="header">
        <h2>🌸 Hyacine Plant Shop</h2>
        <div className="nav">
          <button onClick={() => navigate("/")}>🏠 Home</button>
          <button onClick={() => navigate("/products")}>🪴 Continue Shopping</button>
        </div>
      </header>

      <h3 className="page-title">🛒 Your Cart</h3>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty 🌱</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>💵 ${item.price}</p>
                <div className="qty-controls">
                  <button onClick={() => dispatch(decreaseQty(item.id))}>➖</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))}>➕</button>
                </div>
              </div>
              <button className="delete" onClick={() => dispatch(removeFromCart(item.id))}>
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="summary">
          <p>🌿 Total Plants: {totalItems}</p>
          <p>💰 Total Cost: ${totalCost}</p>
          <button className="checkout">💸 Checkout (Coming Soon)</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
