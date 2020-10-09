import React, { useEffect, useState } from "react";
import Item from "./Item";
import { getFirestore } from "./../../firebase";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    console.log(itemCollection);
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay resultados");
        }
        setProductos(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
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
          valor={producto.precio}
          image={producto.img}
          productId={producto.id}
        />
      </div>
    </div>
  ));
};

export default ItemList;
