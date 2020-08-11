import React from "react";

const PersonDetail = (props) => {
  const element = (
    <div>
      <div>
        Name:&nbsp;
        <input
          type="text"
          name="name"
          value={props.person.name}
          onChange={(event) =>
            props.changeProperty(
              props.person.id,
              event.target.value,
              event.target.name
            )
          }
        />
        <br />
        Age:&nbsp;
        <input
          type="text"
          name="age"
          value={props.person.age}
          onChange={(event) =>
            props.changeProperty(
              props.person.id,
              event.target.value,
              event.target.name
            )
          }
        />
        <br />
        Salary:&nbsp;
        <input
          type="text"
          name="salary"
          value={props.person.salary}
          onChange={(event) =>
            props.changeProperty(
              props.person.id,
              event.target.value,
              event.target.name
            )
          }
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
    </div>
  );
  return element;
};

export default PersonDetail;
