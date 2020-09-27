import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          setProductos(res);
          setLoading(false);
        });
    }, 1);
  }, []);

  if (loading) {
    return (
      <div>
        <p className="loading">Loading</p>
      </div>
    );
  }

  return productos.map((producto) => (
    <div className="col-12 col-md-6 col-lg-4 ">
      <div className="itemListWrapper">
        <Item
          key={producto.id}
          nombre={producto.title}
          valor={producto.price}
          image={producto.image}
          productId={producto.id}
        />
      </div>
    </div>
  ));
};

export default ItemList;
