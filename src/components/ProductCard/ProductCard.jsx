import React from "react";
import "./ProductCard.css";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  if (!product) return null;

  const { id, title, price, image } = product;

  // Get current quantity of this product in cart
  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>₹{price}</p>

      {quantity > 0 ? (
        <div className="quantity-control">
          <button onClick={() => removeFromCart(product)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
