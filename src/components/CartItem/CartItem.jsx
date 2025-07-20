import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onAdd, onRemove, onDelete }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-img" />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
        <div className="cart-item-quantity">
          <button onClick={() => onRemove(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onAdd(item)}>+</button>
        </div>
      </div>
      <button className="cart-item-remove" onClick={() => onDelete(item)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
