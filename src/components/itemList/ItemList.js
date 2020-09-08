import React, { useEffect, useState } from "react";
import Item from "./Item";
import Counter from "./../counter/Counter";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = [
        { id: 1, nombre: "producto 1", valor: "$350" },
        { id: 2, nombre: "producto 2", valor: "$350" },
        { id: 3, nombre: "producto 3", valor: "$350" },
        { id: 4, nombre: "producto 4", valor: "$350" },
        { id: 5, nombre: "producto 5", valor: "$350" },
        { id: 6, nombre: "producto 6", valor: "$350" },
        { id: 7, nombre: "producto 7", valor: "$350" },
        { id: 8, nombre: "producto 9", valor: "$350" },
      ];
      resolve(resultado);
    }, 2000);
  });

  useEffect(() => {
    getProductos
      .then((result) => {
        setProductos(result);
        //throw new Error();
      })
      .catch((err) => {
        console.log("Hubo un problema:", err);
      });
  }, []);

  return productos.map((producto) => (
    <div className="col-12 col-md-6 col-lg-4 ">
      <div className="itemListWrapper">
        <Item
          key={producto.id}
          nombre={producto.nombre}
          valor={producto.valor}
        />
        <Counter initial={1} min={1} max={5} />
      </div>
    </div>
  ));
};

export default ItemList;
