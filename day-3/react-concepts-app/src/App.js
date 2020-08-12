import React, { Component } from "react";
import "./App.css";
import PersonDetail from "./components/PersonDetail/PersonDetail";
import PersonOption from "./components/PersonDetail/PersonOption";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedPerson: null,
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
    //this.state.people.find()
    console.log(e);
    // this.setState({
    //   selectedPerson: null,
    // });
  };
  render() {
    // const selectedPerson = { ...this.state.selectedPerson };
    // let design = "Select a person";
    // if (selectedPerson) {
    //   design = (
    // <PersonDetail
    //   person={selectedPerson}
    //   changeProperty={this.changePropertyHandler}
    // />
    //   );
    // }
    return (
      <div className="App">
        <div>
          Select a Person:&nbsp;
          <select onChange={this.selectionChangedHandler}>
            <option selected disabled key={-1}>
              --select--
            </option>
            {this.state.people.map((p, index) => {
              return <PersonOption key={p.id} person={p} />;
            })}
          </select>
        </div>
        {/* {design} */}
        {/*this.state.selectedPerson && ()*/}
        {this.state.selectedPerson ? (
          <PersonDetail
            person={this.state.selectedPerson}
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
/**
 *  <div>
          {this.state.people.map((person, index) => {
            return (
              <PersonDetail
                key={person.id}
                person={person}
                changeProperty={this.changePropertyHandler}
              />
            );
          })}
          {/* <PersonDetail
          person={this.state.people[0]}
          changeProperty={this.changePropertyHandler}
          counter={this.state.counter}
        />
        <br />
        <PersonDetail
          person={this.state.people[1]}
          changeProperty={this.changePropertyHandler}
          counter={this.state.counter}
        /> 
        </div>
 */
