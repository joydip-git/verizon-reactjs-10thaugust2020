import React, { Component } from "react";
import "./App.css";
import PersonDetail from "./components/PersonDetail/PersonDetail";
import PersonOption from "./components/PersonDetail/PersonOption";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedPersonId: null,
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
    const index = this.state.people.findIndex((p) => p.id === pid);

    const newPerson = { ...this.state.people[index] };
    newPerson[propertyName] = newValue;
    const newPeople = [...this.state.people];
    newPeople[index] = newPerson;

    this.setState({
      people: newPeople,
    });
  };

  selectionChangedHandler = (e) => {
    const pid = parseInt(e.target.value);
    // const found = this.state.people.find((p) => p.id === pid);
    this.setState({
      selectedPersonId: pid,
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          Select a Person:&nbsp;
          <select
            onChange={this.selectionChangedHandler}
            defaultValue={"--select--"}
          >
            <option disabled key={-1}>
              --select--
            </option>
            {this.state.people.map((p, index) => {
              let ele = <PersonOption key={p.id} person={p} />;
              return ele;
            })}
          </select>
        </div>

        {this.state.selectedPerson ? (
          <PersonDetail
            person={this.state.people.find(
              (p) => p.id === this.state.selectedPerson
            )}
            changeProperty={this.changePropertyHandler}
          />
        ) : (
          "select a person"
        )}
      </div>
    );
  }
}

export default App;
