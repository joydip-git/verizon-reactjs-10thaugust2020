import React, { useState } from "react";
import "./App.css";
import ClickCounterRP from "./components/ClickCounterRP";
import CounterRP from "./components/CounterRP";
import HoverCounterRP from "./components/HoverCounterRP";
//import ClickCounter from "./components/ClickCounter";
//import HoverCounter from "./components/HoverCounter";
//import WithCounter from "./components/withCounter";

function App() {
  return (
    <div className="App">
      {/* <WithCounter>
        {"hello world"}
        <ClickCounter message={"click counter"} />
      </WithCounter> */}
      {/* <ClickCounter message={"click counter"} />
      <HoverCounter msg={"hover counter"} /> */}
      <CounterRP
        render={(countVal, changeFn) => {
          return <ClickCounterRP val={countVal} change={changeFn} />;
        }}
      />
      <CounterRP
        render={(val, change) => {
          return (
            <HoverCounterRP
              counter={val}
              changeCounter={change}
              msg={"Hover counter"}
            />
          );
        }}
      />
    </div>
  );
}

export default App;
