import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      onClick={() => {
        setCounter((currentCounter) => currentCounter + 1);
      }}
    >
      {counter}
    </div>
  );
}
