import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalleProducto, setdetalleProducto] = useState([]);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          setdetalleProducto(res);
          setLoading(false);
        });
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div>
        <p className="loading">Loading</p>
      </div>
    );
  }

  return <ItemDetail item={detalleProducto} />;
};

export default ItemDetailContainer;
