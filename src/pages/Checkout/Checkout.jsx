import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate order placement
    console.log("Order Placed:", formData);
    setSubmitted(true);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {submitted ? (
        <p className="success-msg">✅ Order placed successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            ></textarea>
          </label>

          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
