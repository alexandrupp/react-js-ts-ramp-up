import { useState } from "react";

export function FunctionComponent({ favoriteNumber }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      {favoriteNumber != null && `My favorite number is ${favoriteNumber}`}
      <br />
      {favoriteNumber > 5
        ? `My favorite number is large`
        : `My favorite number is small`}
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
