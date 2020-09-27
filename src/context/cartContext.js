import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    console.log("cart reset");
  }, [cart]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
