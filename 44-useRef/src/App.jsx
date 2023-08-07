import { useEffect } from "react";
import { useState, useRef } from "react";

export default function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [name]);
  return (
    <>
      <label>
        Name:
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </>
  );
}
