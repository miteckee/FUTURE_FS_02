import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

// Sample product data (replace with real data or props later)
const sampleProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2999,
    image: "/assets/headphones.jpg",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 1999,
    image: "/assets/watch.jpg",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 1499,
    image: "/assets/speaker.jpg",
  },
];

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <section className="home-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
