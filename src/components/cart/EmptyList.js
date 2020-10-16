import React from "react";
import { NavLink } from "react-router-dom";

const EmptyList = ({ data }) => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>
        No tenemos productos para mostrar{" "}
      </h4>
       <div className="text-center">
      <NavLink className="button" to="/">
        Buscar productos
      </NavLink>
      </div>
    </div>
  );
};

export default EmptyList;
