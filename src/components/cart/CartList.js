import React from "react";

const CartList = ({ data }) => {
  return (
    <ul>
      {data.map((data) => (
        <li>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <h4>${data.price}</h4>
        </li>
      ))}
    </ul>
  );
};

export default CartList;
