import React from "react";
import "./Cart.css";
import { useCart } from "../../context/CartContext";
import bannerImage from "../../assets/banner.jpg";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, deleteFromCart, totalPrice } =
    useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={bannerImage} alt={item.title} className="cart-img" />
              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
                <div className="cart-quantity">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
              <button
                className="remove-btn"
                onClick={() => deleteFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
