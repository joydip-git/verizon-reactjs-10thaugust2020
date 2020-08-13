import React from "react";
import withCounter from "./withCounter";

function HoverCounter({ counter, changeCounter, msg }) {
  return (
    <div>
      Message:{msg}
      <br />
      <p onMouseOver={changeCounter}>Hover: {counter}</p>
    </div>
  );
}
export default withCounter(HoverCounter);
