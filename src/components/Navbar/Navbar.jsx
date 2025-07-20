import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyShop</div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
      <div className="navbar-toggle">
        <span>&#9776;</span>
      </div>
    </nav>
  );
};

export default Navbar;
