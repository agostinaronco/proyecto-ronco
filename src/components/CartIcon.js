import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./../context/cartContext";

const CartIcon = () => {
  const [cart] = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cartIconWrapper">
        <img className="icon" src={require("../assets/images/carro.svg")} />
        <p className="cartUnits">{cart ? cart.length : []}</p>
      </div>
    </Link>
  );
};

export default CartIcon;
