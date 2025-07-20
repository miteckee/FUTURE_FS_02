import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, onAdd, onRemove, onDelete }) => {
  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-img" />
              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
                <div className="cart-quantity">
                  <button onClick={() => onRemove(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onAdd(item)}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => onDelete(item)}>
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{getTotalPrice()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
