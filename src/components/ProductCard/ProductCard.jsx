import React from "react";
import "./ProductCard.css";
import bannerImage from "../../assets/banner.jpg";

const ProductCard = ({ image, title, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={bannerImage} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">₹{price}</p>
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
