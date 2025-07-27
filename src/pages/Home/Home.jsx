import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import Headphone from "../../assets/Headphone.jpg";
import Watch from "../../assets/SmartWatch.jpg";
import Sneaker from "../../assets/Sneakers.jpg";
import { useCart } from "../../context/CartContext";

const sampleProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2999,
    image: Headphone,
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 1999,
    image: Watch,
  },
  {
    id: 3,
    title: "Cool Sneakers",
    price: 1499,
    image: Sneaker,
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
