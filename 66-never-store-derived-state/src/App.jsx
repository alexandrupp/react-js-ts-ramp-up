import { useState, useMemo } from "react";

export default function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");

  //recalculate derived state on render whenever inputValue changes
  const filteredItems = useMemo(() => {
    return inputValue === ""
      ? items
      : items.filter((item) => item < inputValue);
  }, [items, inputValue]);

  return (
    <>
      <label htmlFor="lessThan">Show Less Than</label>
      <input
        id="lessThan"
        type="number"
        onChange={(event) => setInputValue(event.target.valueAsNumber)}
        value={inputValue}
      />
      <br />
      <br />
      <div>{filteredItems.join(", ")}</div>
      <br />
      <button onClick={() => setItems((i) => [...i, 2.5])}>
        Add 2.5 To List
      </button>
    </>
  );
}
