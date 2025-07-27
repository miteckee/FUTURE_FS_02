import React from "react";
import "./Cart.css";
import { useCart } from "../../context/CartContext";
import bannerImage from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

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
          {cartItems.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <img src={item.image} alt={item.title} className="cart-img" />
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
          <Link to="/checkout">
            <button className="checkout-btn" disabled={cartItems.length === 0}>
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
