import { useState } from "react";

export default function App() {
  const [array, setArray] = useState(["A", "B", "C"]);
  const [letter, setLetter] = useState("");
  const [index, setIndex] = useState(0);

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

  const updateAWithH = () => {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        return element === "A" ? "H" : element;
      });
    });
  };

  const addElementAtIndex = () => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
  };

  return (
    <div>
      <div>
        <p>My array: {array.join(", ")}</p>
      </div>
      <div>
        <p>Actions:</p>
        <button onClick={removeFirstElement}>Remove First Element</button>
        <button onClick={clearArray}>Clear Array</button>
        <button onClick={resetArrayToInitialValue}>
          Reset Array To Initial Value
        </button>
        <button onClick={updateAWithH}>Update A with H</button>
      </div>
      <div>
        <p>Input actions:</p>
        <label htmlFor="inputLetter">
          Input Letter:
          <input
            type="text"
            defaultValue={letter}
            onChange={(event) => setLetter(event.target.value)}
          />
        </label>
        <label>
          Input Index:
          <input
            type="text"
            pattern="[0-9]*"
            defaultValue={0}
            onChange={(event) => setIndex(event.target.value)}
          />
        </label>
        <br />
        <button onClick={removeSpecificElement}>Remove Specific Letter</button>
        <button onClick={addElementAtStartOfArray}>
          Add Element at Start of Array
        </button>
        <button onClick={addElementAtEndOfArray}>
          Add Element at End of Array
        </button>
      </div>
      <div>
        <p>Add element at index</p>
        <button onClick={addElementAtIndex}>Add Element at Index</button>
      </div>
    </div>
  );
}
