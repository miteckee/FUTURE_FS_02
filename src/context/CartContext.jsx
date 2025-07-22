import React, { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Custom hook for easy access
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add or increase quantity
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Decrease quantity or remove if quantity becomes 0
  const removeFromCart = (product) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item completely
  const deleteFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  // Total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
