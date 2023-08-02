import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alex",
      age: 24,
    };

    this.handleDocumentClick = () => {
      console.log(this.state.name);
    };
  }

  componentDidMount() {
    console.log("Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      document.removeEventListener("click", this.handleDocumentClick);
      document.addEventListener("click", this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
    console.log("Unmount");
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() => {
            this.setState((currentState) => ({ age: currentState.age - 1 }));
          }}
        >
          +
        </button>
        {this.state.age}
        <button
          onClick={() => {
            this.setState((currentState) => ({ age: currentState.age + 1 }));
          }}
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}
