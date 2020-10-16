import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./../../context/cartContext";
import CartList from "../cart/CartList";
import EmptyList from "../cart/EmptyList";
import { getFirestore } from "./../../firebase";

const Cart = () => {
  const [cart] = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [buyer, setBuyer] = useState({
    nombre: "",
    email: "",
    phone: "",
  });
const [orderItems, setOrderItems] = useState([]);


  useEffect(() => {
    var totalCart = 0;
    cart.forEach(function (data) {
      totalCart += data.precio * data.count;
    });
    setTotal(totalCart);

    setOrderItems(cart.map((data) => ({
      id: data.id,
      title: data.title,
      price: (data.precio * data.count),
      qty: data.count,
    }))) ;

  }, [cart]);

    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: buyer,
      items: orderItems,
      total: total,
    };
 
    const updateBuyer = (key, value) => {
      const buyerUpdated = { ...buyer };
      buyerUpdated[key] = value;
      setBuyer(buyerUpdated);
    };
    console.log("newOrder", newOrder);

    
  const saveOrder = () => {
    orders
      .add(newOrder)
      .then(({ id }) => {
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("listo");
      });
  };


  return (
    <div className="row">
      <div className="col-12 col-lg-8 m-auto">
        {
          cart?.length === 0 || !cart ? (
            <EmptyList />
          ) : (
            <CartList
              data={cart}
              total={total}
              value={buyer}
              updateBuyer={updateBuyer}
              onClick={saveOrder}
            />
          )
          //otra forma de escribirlo : cart && cart.length
        }
      </div>
    </div>
  );
};

export default Cart;
