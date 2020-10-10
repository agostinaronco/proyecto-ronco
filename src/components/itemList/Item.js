import React from "react";
import { NavLink } from "react-router-dom";
const Item = (props) => {
  const { nombre, valor, image, productId } = props;
  return (
    <NavLink to={`/detail/${productId}`}>
      <div className="itemList">
        <img src={image} className="img-fluid" alt="imagen de producto" />
        <p className="itemList--name"> {nombre}</p>
        <p>{valor}</p>
      </div>
    </NavLink>
  );
};

export default Item;
