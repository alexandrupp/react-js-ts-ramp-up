import { useState } from "react";

export default function App() {
  const [array, setArray] = useState(["A", "B", "C"]);
  const [letter, setLetter] = useState("");

  const removeFirstElement = () => {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  };

  const removeSpecificElement = () => {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  };

  const addElementAtStartOfArray = () => {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  };

  const addElementAtEndOfArray = () => {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  };

  const clearArray = () => {
    setArray(() => []);
  };

  const resetArrayToInitialValue = () => {
    setArray(() => ["A", "B", "C"]);
  };

  /* TODO:
   * 1. Add the ability to update all `A` elements in the array to `H`
   * 2. Add an input that is connected to state and a button that will add the input value to the start of the array
   * 3. Add the ability to add a new element at any index in the array
   */

  return (
    <div>
      <div>My array: {array.join(", ")}</div>
      <br />
      <div>Actions:</div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <button onClick={clearArray}>Clear Array</button>
      <button onClick={resetArrayToInitialValue}>
        Reset Array To Initial Value
      </button>
      <br />
      <br />
      <div>Input actions:</div>
      <input
        type="text"
        defaultValue={letter}
        onChange={(e) => setLetter(e.target.value)}
      />
      <br />
      <br />
      <button onClick={removeSpecificElement}>Remove Specific Letter</button>
      <button onClick={addElementAtStartOfArray}>
        Add Element at Start of Array
      </button>
      <button onClick={addElementAtEndOfArray}>
        Add Element at End of Array
      </button>
      <br />
    </div>
  );
}
