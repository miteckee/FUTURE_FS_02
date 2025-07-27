import React, { useState } from "react";
import "./Products.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Headphone from "../../assets/Headphone.jpg";
import Shoe from "../../assets/running_shoe.jpg";
import TShirt from "../../assets/T-shirt.jpg";
import Watch from "../../assets/SmartWatch.jpg";
import Sneaker from "../../assets/Sneakers.jpg";

const dummyProducts = [
  {
    id: 1,
    title: "Cool Sneakers",
    price: 1299,
    image: Sneaker,
    category: "Footwear",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 2499,
    image: Headphone,
    category: "Electronics",
  },
  {
    id: 3,
    title: "Casual T-Shirt",
    price: 499,
    image: TShirt,
    category: "Clothing",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 1999,
    image: Watch,
    category: "Electronics",
  },
  {
    id: 5,
    title: "Running Shoes",
    price: 1599,
    image: Shoe,
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
          name="search"
          id="search"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          id="category"
        >
          <option value="All">All Categories</option>
          <option value="Footwear">Footwear</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
