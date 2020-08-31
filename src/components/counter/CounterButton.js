import React from "react";

const CounterButton = (props) => {
  return (
    <button className="btn counterBtn" onClick={props.action}>
      {props.titleBtn}
    </button>
  );
};

export default CounterButton;
