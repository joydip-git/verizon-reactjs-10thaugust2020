import React, { Component, useState } from "react";

// const WithCounter = (WrappedComponent, props) => {
//   const [counterState, setCounterState] = useState({ counter: 0 });
//   const increaseCounter = () => {
//     setCounterState((ps) => {
//       return { counter: ps.counter + 1 };
//     });
//   };
//   return { ...props};
// };

// export default WithCounter;

const withCounter = (WrappedComponent) => {
  class WithCounter extends Component {
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
        <WrappedComponent
          {...this.props}
          counter={this.state.counter}
          changeCounter={this.increaseCounter}
        />
      );
    }
  }
  return WithCounter;
};
export default withCounter;
