import React from "react";

export class PersonClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alex",
      age: 24,
      inputName: "George",
    };
  }

  render() {
    const updateNameInput = (event) =>
      this.setState(() => ({ inputName: event.target.value }));

    const changeName = () =>
      this.setState((currentState) => ({ name: currentState.inputName }));

    const increaseAge = () =>
      this.setState((currentState) => ({ age: currentState.age + 1 }));

    const decreaseAge = () =>
      this.setState((currentState) => ({ age: currentState.age - 1 }));

    return (
      <div>
        <div>
          <h1>Class Component</h1>
          <p>
            My name is {this.state.name} and I am {this.state.age} years old
          </p>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              defaultValue={this.state.inputName}
              onChange={updateNameInput}
            />
          </label>
          <button onClick={changeName}>Change name</button>
        </div>
        <div>
          <label>Age:</label>
          <button onClick={increaseAge}>+</button>
          <button onClick={decreaseAge}>-</button>
        </div>
      </div>
    );
  }
}
