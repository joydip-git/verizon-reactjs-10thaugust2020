import React from "react";
//import withCounter from "./withCounter";

function ClickCounterAnother({ fn, message }) {
  return (
    <div>
      Message:{message}
      <br />
      <button onClick={fn}>Click: {message}</button>
    </div>
  );
}
export default ClickCounterAnother;
