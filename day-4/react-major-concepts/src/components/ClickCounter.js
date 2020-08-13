import React from "react";
import withCounter from "./withCounter";

function ClickCounter({ counter, changeCounter, message }) {
  return (
    <div>
      Message:{message}
      <br />
      <button onClick={changeCounter}>Click: {counter}</button>
    </div>
  );
}
export default withCounter(ClickCounter);
