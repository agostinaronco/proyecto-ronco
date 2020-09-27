import React, { useContext } from "react";
import { CartContext } from "./../../context/cartContext";
import CartList from "../cart/CartList";
import EmptyList from "../cart/EmptyList";

const Cart = () => {
  const [cart] = useContext(CartContext);
  console.log("length", cart.length);
  return (
    <div className="col-12">
      {cart.length == 0 ? <EmptyList /> : <CartList data={cart} />}
    </div>
  );
};

export default Cart;
