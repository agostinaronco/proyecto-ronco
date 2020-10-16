import React from "react";
import { NavLink } from "react-router-dom";
const Item = (props) => {
  const { nombre, valor, image, productId } = props;
  return (
    <NavLink to={`/detail/${productId}`}>
      <div className="itemList">
        <img src={image} className="img-fluid" alt="imagen de producto" />
        <p className="itemList--name"><span>Modelo:</span>  {nombre}</p>
        <p className="itemList--price">$ {valor}</p>
      </div>
    </NavLink>
  );
};

export default Item;
