import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detalleProducto, setdetalleProducto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://api.mercadolibre.com/items/MLA841413632")
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          setdetalleProducto(res);
          setLoading(false);
        });
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div>
        <img src={require("../../assets/images/91.gif")} />
      </div>
    );
  }

  return <ItemDetail item={detalleProducto} />;
};

export default ItemDetailContainer;
