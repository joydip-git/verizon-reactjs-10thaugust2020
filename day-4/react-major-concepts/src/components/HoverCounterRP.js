import React from "react";

function HoverCounterRP({ counter, changeCounter, msg }) {
  return (
    <div>
      Message:{msg}
      <br />
      <p onMouseOver={changeCounter}>Hover: {counter}</p>
    </div>
  );
}
export default HoverCounterRP;
