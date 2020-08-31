import React from "react";
import CounterButton from "./CounterButton";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initial,
    };
  }

  increase = () => {
    const cantidad = this.state.count;
    if (cantidad >= this.props.max) return;
    this.setState({
      count: cantidad + 1,
    });
  };

  decrease = () => {
    const cantidad = this.state.count;
    if (cantidad <= this.props.min) return;
    this.setState({
      count: cantidad - 1,
    });
  };

  render() {
    return (
      <div className="counter">
        <CounterButton action={this.decrease} titleBtn="-" />
        <input value={this.state.count} />
        <CounterButton action={this.increase} titleBtn="+" />
      </div>
    );
  }
}

export default Counter;
