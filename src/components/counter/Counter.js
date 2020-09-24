import React from "react";
import CounterButton from "./CounterButton";

const Counter = (props) => {
  const increase = () => {
    const counter = props.valueCounter + 1;
    if (props.valueCounter >= props.max) return;
    props.setValueCounter(counter);
  };

  const decrease = () => {
    const counter = props.valueCounter - 1;
    if (props.valueCounter <= props.min) return;
    props.setValueCounter(counter);
  };

  return (
    <div className="counter">
      <CounterButton action={decrease} titleBtn="-" />
      <input value={props.valueCounter} />
      <CounterButton action={increase} titleBtn="+" />
    </div>
  );
};

export default Counter;
