import React from "react";
import Counter from "./../counter/Counter";
import { Button } from "reactstrap";

const ItemDetail = (props) => {
  const item = props.item;
  return (
    <div className="row itemDetail">
      <div className="col-12 col-md-6">
        <img src={item.secure_thumbnail} />
      </div>
      <div className="col-12 col-md-6">
        <p>{item.title}</p>
        <h4>${item.price}</h4>
        <Counter initial={0} min={0} max={item.available_quantity} />
        <Button
          className="btn-block btn-secondary"
          onClick={() => console.log("comprar")}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default ItemDetail;
