import React from "react";
import { Link } from "react-router-dom";

const EmptyList = ({ data }) => {
  return (
    <div>
      <h2>No tenemos productos para mostrar</h2>
      <Link to="/">Buscar productos</Link>
    </div>
  );
};

export default EmptyList;
