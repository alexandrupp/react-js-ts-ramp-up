import { useState } from "react";
import { useToggle } from "./useToggle";
import { useInputValue } from "./useInputValue";

export default function App() {
  const nameInput = useInputValue("");
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <label>
        Name:
        <input {...nameInput} />
      </label>
      <br />
      <br />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}
