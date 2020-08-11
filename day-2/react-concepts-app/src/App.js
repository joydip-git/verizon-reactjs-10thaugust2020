import React, { Component } from "react";
import "./App.css";
import PersonDetail from "./components/PersonDetail/PersonDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "anil",
          age: 34,
          salary: 1000,
        },
        {
          id: 2,
          name: "sunil",
          age: 43,
          salary: 2000,
        },
      ],
    };
  }
  changePropertyHandler = (pid, newValue, propertyName) => {
    const found = this.state.people.find((p) => p.id === pid);
    const index = this.state.people.findIndex((p) => p.id === pid);

    // const newPerson = Object.assign({}, found);
    const newPerson = { ...found };
    newPerson[propertyName] = newValue;
    const newPeople = [...this.state.people];
    newPeople[index] = newPerson;

    this.setState({
      people: newPeople,
    });
  };
  render() {
    return (
      <div className="App">
        <PersonDetail
          person={this.state.people[0]}
          changeProperty={this.changePropertyHandler}
        />
        <br />
        <PersonDetail
          person={this.state.people[1]}
          changeProperty={this.changePropertyHandler}
        />
      </div>
    );
  }
}

export default App;
