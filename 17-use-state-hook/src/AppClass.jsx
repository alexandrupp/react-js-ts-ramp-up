import React from "react";
import { CounterClass } from "./CounterClass";

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kyle",
      age: 27,
    };
  }
  render() {
    const handleClick = () => {
      this.setState({ name: "Sally" });
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
    };
    return (
      <div>
        <h1 onClick={handleClick}>
          Hi, {this.state.name} {this.state.age}
        </h1>
        <CounterClass />
      </div>
    );
  }
}
