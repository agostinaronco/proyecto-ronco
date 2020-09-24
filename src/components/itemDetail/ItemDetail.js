import React, { useState } from "react";
import Counter from "./../counter/Counter";
import { Button } from "reactstrap";

const ItemDetail = (props) => {
  const item = props.item;

  const [valueCounter, setValueCounter] = useState(0);

  return (
    <div className="row itemDetail">
      <div className="col-12 col-md-6">
        <img src={item.image} className="img-fluid" />
      </div>
      <div className="col-12 col-md-6">
        <p>{item.title}</p>
        <p>{item.description}</p>
        <h4>${item.price}</h4>
        <Counter
          setValueCounter={setValueCounter}
          initial={0}
          min={0}
          max={5}
          valueCounter={valueCounter}
        />
        <Button
          className="btn-block btn-secondary"
          onClick={() => console.log("comprar")}
        >
          Comprar {valueCounter != 0 ? valueCounter : null}
        </Button>
      </div>
    </div>
  );
};

export default ItemDetail;
