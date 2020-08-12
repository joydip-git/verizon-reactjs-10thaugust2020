import React, { useState } from "react";

const UseStateComponent = (props) => {
  console.log(props.someValue);
  const [counterState, setCounterState] = useState({ counter: 0 });
  const [valueState, setValueState] = useState({ val: 20 });
  const increaseCounter = () => {
    setCounterState((oldState) => {
      return {
        counter: oldState.counter + props.someValue,
      };
    });
  };
  const updateValue = () => {
    setValueState((oldState) => {
      return {
        val: oldState.val + 1,
      };
    });
  };
  console.log("rendered");
  return (
    <div>
      <div>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={updateValue}>Update Value</button>
      </div>
      {counterState.counter}
      <br />
      {valueState.val}
    </div>
  );
};

export default UseStateComponent;
