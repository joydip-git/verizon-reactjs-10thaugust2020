import React, { Component } from "react";
//import UseStateComponent from "./components/UseStateComponent";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import UseEffectComponent from "./components/UseEffectComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App created");
    this.state = {
      person: {
        name: "joy",
        age: 20,
      },
      counter: 0,
      message: "hello",
      show: true,
      count: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App getDerivedStateFromProps");
    // return {
    //   counter: props.x + state.counter,
    // };
    return null;
  }
  increaseCounterHandler = () => {
    this.setState((oldState) => {
      return {
        counter: oldState.counter + 1,
      };
    });
  };
  messageChangeHandler = (e) => {
    const message = e.target.value;
    this.setState({
      message: message,
    });
  };
  showHandler = () => {
    this.setState((ps) => {
      return {
        show: !ps.show,
      };
    });
  };
  changeCountHandler = () => {
    this.setState((oldState) => {
      return {
        count: oldState.count + 1,
      };
    });
  };
  changePerson = (e) => {
    const val = e.target.value;
    // const key = e.target.name;
    const p = this.state.person;
    p.name = val;
    this.setState({
      person: p,
    });
  };
  render() {
    console.log("App rendered");
    return (
      <div className="App">
        <div>
          Name:&nbsp;
          <input
            type="text"
            name="name"
            value={this.state.person.name}
            onChange={this.changePerson}
          />
          <br />
        </div>
        <button onClick={this.changeCountHandler}>Change</button>
        <button onClick={this.showHandler}>show or not</button>
        {this.state.show && (
          <UseEffectComponent
            count={this.state.count}
            person={this.state.person}
          />
        )}
      </div>
    );
  }
  componentDidMount() {
    console.log("App Mounted...");
  }
  componentWillUnmount() {
    console.log("App destroyed");
  }
}
/**
 *  {this.state.counter}
        <br />
        <button onClick={this.increaseCounterHandler}>Increase</button>
        <br />
        <button onClick={this.showHandler}>Show or not?</button>
        <input
          type="text"
          value={this.state.message}
          onChange={this.messageChangeHandler}
        />
        {this.state.show && <ChildComponent message={this.state.message} />}

        {/* <UseStateComponent someValue={10} /> 
        <br />
        <br />
 */
