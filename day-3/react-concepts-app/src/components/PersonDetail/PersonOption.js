import React from "react";

export default function PersonOption(props) {
  return <option value={props.person.id}>{props.person.name}</option>;
}
