import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // hooks only at the top of function
  useEffect(() => {
    if (count > 5) {
      document.title = count;
    }
  }, [count]);

  printName("Alex");

  if (count > 5) return "hi";

  return (
    <>
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
    </>
  );
}

// ooks only in functions
function printName(name) {
  useEffect(() => {
    console.log("In use effect");
  }, [name]);
  console.log(name);
}
