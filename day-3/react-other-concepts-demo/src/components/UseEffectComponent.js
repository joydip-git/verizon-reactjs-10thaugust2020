import React, { useEffect, useState } from "react";

export default function UseEffectComponent({ count, person }) {
  const [valState, setValState] = useState(0);
  //every time
  useEffect(() => {
    console.log("use effect called everytime");
    return () => {
      console.log("clean up every time");
    };
  });
  //componentDidiMount
  useEffect(() => {
    console.log("use effect called only one time");
  }, []);
  //componentWillUnMount
  useEffect(() => {
    return () => {
      console.log("clean up only one time");
    };
  }, []);
  //shouleComponentUpdate & componentDidUpdate
  useEffect(() => {
    console.log("use effect called only when count changes");
    return () => {
      console.log("clean up called only when count changes");
    };
  }, [count]);

  useEffect(() => {
    console.log("use effect called only when valstate changes");
    return () => {
      console.log("clean up called only when valstate changes");
    };
  }, [valState]);

  useEffect(() => {
    console.log("use effect called when valstate/count changes");
    return () => {
      console.log("clean up called when valstate/count changes");
    };
  }, [count, valState]);

  useEffect(() => {
    console.log("use effect called when person changes");
    return () => {
      console.log("clean up called when person changes");
    };
  }, [person]);

  console.log("use effect comp rendered");
  const changeValue = () => {
    setValState((ps) => {
      return ps + 1;
    });
  };
  return (
    <div>
      <button onClick={changeValue}>
        Change Value in func comp: {valState}
      </button>
      <br />
      {`ueseffect: ${count}`}
      <br />
      Name:{person.name}
    </div>
  );
}
