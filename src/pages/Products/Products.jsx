import React, { useState } from "react";
import "./Products.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const dummyProducts = [
  {
    id: 1,
    title: "Cool Sneakers",
    price: 1299,
    image: "/assets/product1.jpg",
    category: "Footwear",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 2499,
    image: "/assets/product2.jpg",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Casual T-Shirt",
    price: 499,
    image: "/assets/product3.jpg",
    category: "Clothing",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 1999,
    image: "/assets/product4.jpg",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Running Shoes",
    price: 1599,
    image: "/assets/product5.jpg",
    category: "Footwear",
  },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = dummyProducts.filter((product) => {
    const matchTitle = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory = category === "All" || product.category === category;
    return matchTitle && matchCategory;
  });

  return (
    <div className="products-container">
      <div className="products-filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Footwear">Footwear</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onAddToCart={() => console.log("Add to Cart", product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
