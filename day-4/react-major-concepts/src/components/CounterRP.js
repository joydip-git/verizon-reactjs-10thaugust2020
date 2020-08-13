import React, { Component } from "react";

class CounterRP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increaseCounter = () => {
    this.setState((ps) => {
      return { counter: ps.counter + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.render(this.state.counter, this.increaseCounter)}</div>
    );
  }
}
export default CounterRP;
