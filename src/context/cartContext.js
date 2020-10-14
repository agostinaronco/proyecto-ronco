import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  /*
  useEffect(() => {
    var myCart = localStorage.getItem("myCart");
    setCart(myCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("myCart", cart);
  }, [cart]);
*/

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
