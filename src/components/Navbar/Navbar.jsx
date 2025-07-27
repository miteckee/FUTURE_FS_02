import React from "react";
import "./Navbar.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cart_icon from "../../assets/cart_icon.png";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyShop</div>
      <ul className="navbar-links">
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={cart_icon} alt="" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </li>
      </ul>
      <div className="navbar-toggle">
        <span>&#9776;</span>
      </div>
    </nav>
  );
};

export default Navbar;
