import React from "react";

//counter, changeCounter
function ClickCounterRP(props) {
  return (
    <div>
      <button onClick={props.change}>{props.val}</button>
    </div>
  );
}
export default ClickCounterRP;

//App.js
/**
 *  <CounterRP
        render={(countVal, changeFn) => {
          return <ClickCounterRP val={countVal} change={changeFn} />;
        }}
      />
 */
