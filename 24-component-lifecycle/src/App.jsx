import { useState } from "react";
import { Child } from "./Child";

export default function App() {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const childComponent = isDisplayed ? <Child /> : null;

  return (
    <div>
      <button
        style={{ display: "block", marginBottom: "1rem" }}
        onClick={() => setIsDisplayed((s) => !s)}
      >
        Show/Hide
      </button>
      {childComponent}
    </div>
  );
}
