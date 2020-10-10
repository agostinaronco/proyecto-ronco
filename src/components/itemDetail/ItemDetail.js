import React from "react";
import Counter from "./../counter/Counter";
import { Button } from "reactstrap";

const ItemDetail = ({ setValueCounter, item, valueCounter, setCartValue }) => {
  return (
    <div className="row itemDetail">
      <div className="col-12 col-md-6">
        <img src={item.img} className="img-fluid" alt="imagen del producto"/>
      </div>
      <div className="col-12 col-md-6">
        <p>{item.title}</p>
        <p>{item.description}</p>
        <h4>${item.precio}</h4>
        <Counter
          setValueCounter={setValueCounter}
          initial={0}
          min={0}
          max={item.stock}
          valueCounter={valueCounter}
        />
        <Button
          className="btn-block btn-secondary"
          onClick={() => {
            setCartValue(item, valueCounter);
          }}
          disabled={!valueCounter ? true : false}
        >
          Comprar {valueCounter !== 0 ? valueCounter : null}
        </Button>
      </div>
    </div>
  );
};

export default ItemDetail;
