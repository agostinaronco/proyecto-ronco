import React from "react";

const CartList = ({ data }) => {
  return (
    <ul className="cartList_list">
      <li>
        <p>Cantidad</p>
        <p>Producto</p>
        <p>Total</p>
      </li>
      {data.map((data) => (
        <li>
          <p>{data.count}</p>
          <p>{data.title}</p>
          <p>${data.precio * data.count}</p>
        </li>
      ))}
    </ul>
  );
};

export default CartList;
