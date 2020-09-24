import React from "react";
import CounterButton from "./CounterButton";

const Counter = (props) => {
  const increase = () => {
    const counter = props.valueCounter;
    if (props.valueCounter >= props.max) {
      alert("No hay mas de " + props.max + " unidades disponibles");
      return;
    }
    props.setValueCounter(counter + 1);
  };

  const decrease = () => {
    const counter = props.valueCounter;
    if (props.valueCounter <= props.min) return;
    props.setValueCounter(counter - 1);
  };

  const inputChange = (value) => {
    if (value <= props.max) {
      props.setValueCounter(value);
    } else {
      alert("No hay mas de " + props.max + " unidades disponibles");
    }
  };

  return (
    <div className="counter">
      <CounterButton action={decrease} titleBtn="-" />
      <input
        value={props.valueCounter}
        onChange={(e) => {
          inputChange(Number(e.target.value));
        }}
      />
      <CounterButton action={increase} titleBtn="+" />
    </div>
  );
};

export default Counter;
