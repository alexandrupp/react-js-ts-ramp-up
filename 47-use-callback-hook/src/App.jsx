import { useCallback } from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  //useCallback() memorizes a function - just like useMemo() memorizes a value
  const printName = useCallback(() => {
    console.log(`Name: ${name}`);
  }, [name]);

  useEffect(() => {
    console.log("In Effect");
    printName();
  }, [printName]);

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
    </>
  );
}
