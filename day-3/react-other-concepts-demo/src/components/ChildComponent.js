import React, { Component, PureComponent } from "react";

// export default class ChildComponent extends PureComponent {
export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log("ChildComponent created");
    this.state = {
      position_X: 10,
      position_Y: 20,
      x: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("ChildComponent getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(newProps, newState) {
    let decision = true;

    if (newProps.message !== this.props.message) decision = true;
    else {
      decision = false;
    }
    console.log("ChildComponent should update? " + decision);
    return decision;
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log("ChildComponent getSnapshotBeforeUpdate");
    return { mousePos: { posX: state.position_X, posY: state.position_Y } };
  }
  componentDidUpdate(oldProps, oldState, snapshot) {
    console.log(snapshot);
    console.log(this.props.message);
    console.log("ChildComponent updated: " + oldProps.message);
  }
  render() {
    console.log("ChildComponent rendered");
    return (
      <div>
        {this.props.message}
        <br />
        {this.state.x}
      </div>
    );
  }
  componentDidMount() {
    console.log("ChildComponent Mounted...");
  }
  componentWillUnmount() {
    console.log("ChildComponent destroyed");
  }
  componentDidCatch(message, info) {}
  //   componentWillMount() {
  //     console.log("will mount?");
  //   }
  //   componentWillReceiveProps() {}
  //   componentWillUpdate() {}
}
