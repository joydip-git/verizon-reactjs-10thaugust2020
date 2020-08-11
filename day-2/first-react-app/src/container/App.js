import React, { Component } from "react";
import Simple from "../component/Simple";
import { render } from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      value: 12,
    };
  }

  // changeState (oldState) {
  //   return {
  //     counter: oldState.counter + 1,
  //   };
  // }
  // someAfterWork() {
  //   console.log("update is over..", this.state.counter);        }
  // }
  increaseCounter() {
    console.log(this);
    for (let index = 0; index < 3; index++) {
      // this.setState({
      //   counter:index+1
      // });

      // this.setState(
      //   function (oldState) {
      //     return {
      //       counter:oldState.counter+1
      //     }
      //   }
      // )

      this.setState(
        function (oldState) {
          return {
            counter: oldState.counter + 1,
          };
        },
        function () {
          console.log("update is over..", this.state.counter);
        }
      );
    }
    // console.log(this.state.counter);
  }
  render() {
    console.log("render");
    const x = 20;
    const design = (
      <div>
        <button onClick={this.increaseCounter.bind(this)}>
          {this.state.counter}
        </button>
        <span>{this.state.value}</span>
        {x}
        <Simple />
      </div>
    );
    return design;
  }
}

export default App;
