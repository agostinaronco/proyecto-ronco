import React, { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "./../../context/cartContext";
import { getFirestore } from "./../../firebase";

const ItemDetailContainer = () => {
  const [detalleProducto, setdetalleProducto] = useState([]);
  const [loading, setLoading] = useState(false);

  const [valueCounter, setValueCounter] = useState(0);

  const [cart, setCart] = useContext(CartContext);

  const SetCartValue = (value, itemsCounter) => {
    // opcion 1
    // const cartValue = [...cart]
    // cartValue.push(value)
    // opcion 2
    // const cartValue = [...cart,value]; dos formas de agregar un elemento a un array
    const newValue = { ...value, count: itemsCounter }; //estoy agregando todas las propiedades del obj value y definiendo la propiedad count con el valor itemcounter
    if (!cart) {
      setCart([newValue]);
      return;
    }
    const cartValue = [...cart, newValue];

    const sumDuplicatedItems = cartValue.reduce(function(accumulator, cur) {
      let id = cur.id;
      let found = accumulator.find( elem => {
          return elem.id == id
      });
      if (found) found.count += cur.count;
      else accumulator.push(cur);
      return accumulator;
    }, []);
    setCart(sumDuplicatedItems);
  };

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No hay resultados");
          return;
        }
        setdetalleProducto({ id: doc.id, ...doc.data() });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div>
        <p className="loading">Loading</p>
      </div>
    );
  }

  return (
    <ItemDetail
      item={detalleProducto}
      valueCounter={valueCounter}
      setValueCounter={setValueCounter}
      setCartValue={SetCartValue}
    />
  );
};

export default ItemDetailContainer;
