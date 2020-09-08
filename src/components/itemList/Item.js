import React from "react";

const Item = (props) => {
  const { nombre, valor } = props;
  return (
    <div className="itemList">
      <p className="itemList--name"> {nombre}</p>
      <p>{valor}</p>
    </div>
  );
};

export default Item;
