// import React from "react";
// const WithCounterAnother = (props) => {
//   const callMe = () => {
//     console.log("called");
//   };
//   //console.log(props);
//   return <>props.children</>;
// };
// export default WithCounterAnother;
import React from "react";
const withCounterAnother = (WrappedComponent) => {
  const WithCounterAnother = (props) => {
    return <WrappedComponent />;
  };
  return WithCounterAnother;
};
export default withCounterAnother;
