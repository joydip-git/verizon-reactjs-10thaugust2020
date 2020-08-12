import React from "react";

const PersonDetail = (props) => {
  //props.value = props.value++;
  const invokePropertyChange = (event) => {
    props.changeProperty(
      props.person.id,
      event.target.value,
      event.target.name
    );
  };
  const element = (
    <div>
      <div>
        Name:&nbsp;
        <input
          type="text"
          name="name"
          value={props.person.name}
          onChange={invokePropertyChange}
        />
        <br />
        Age:&nbsp;
        <input
          type="text"
          name="age"
          value={props.person.age}
          onChange={invokePropertyChange}
        />
        <br />
        Salary:&nbsp;
        <input
          type="text"
          name="salary"
          value={props.person.salary}
          onChange={invokePropertyChange}
        />
      </div>
      <div>
        <span>Name:</span>
        {props.person.name}
        <br />
        <span>Age:</span>
        {props.person.age}
        <br />
        <span>Salary:</span>
        {props.person.salary}
      </div>
      {props.counter}
    </div>
  );
  return element;
};

export default PersonDetail;
