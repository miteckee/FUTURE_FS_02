import React from "react";
import "./Hero.css";
import bannerImage from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={bannerImage} alt="Shop Banner" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to MyShop</h1>
        <p>Your one-stop destination for amazing products</p>
        <a href="/products" className="hero-button">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
