import { CounterReset } from "./CounterReset";
import { Counter } from "./Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function changeCount(amount) {
    setCount((c) => c + amount);
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <Counter count={count} changeCount={changeCount} />
      <CounterReset reset={reset} />
    </>
  );
}

export default App;
