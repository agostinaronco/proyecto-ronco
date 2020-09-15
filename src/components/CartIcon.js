import React from "react";
import { Link } from "react-router-dom";

const CartIcon = () => {
  return (
    <Link to="/cart">
      <img className="icon" src={require("../assets/images/carro.svg")} />
    </Link>
  );
};

export default CartIcon;
