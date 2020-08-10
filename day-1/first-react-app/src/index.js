//react, react-dom
import ReactDOM from "react-dom";
import React from "react";

const helloDeisgn = "Hello";

//JSX: JavaScript XML
//pesudo - HTML

// const reactPElement = React.createElement(
//   "p",
//   { id: "p1" },
//   reactSectionElement
// );
const reactPElement = <p id="p1">{reactSectionElement}</p>;
ReactDOM.render(reactPElement, document.getElementById("root"));
//document.createElement('p')

/**
 * {
 * type:'section',
 * key:'',
 * props:{
 *  id:'s1'
 *  children:helloDesign
 * }
 * }
 * * {
 * type:'p',
 * props:{
 *  id:'p1'
 *  children:reactSectionElement
 * }
 * }
 */
