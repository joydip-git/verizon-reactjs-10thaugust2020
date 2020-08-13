import React, { Component, useState } from "react";
/*
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
*/
const CounterRP = ({ render }) => {
  const [counterState, setCounterState] = useState({ counter: 0 });
  const increaseCounter = () => {
    setCounterState((ps) => {
      return { counter: ps.counter + 1 };
    });
  };
  return <div>{render(counterState.counter, increaseCounter)}</div>;
};
export default CounterRP;
