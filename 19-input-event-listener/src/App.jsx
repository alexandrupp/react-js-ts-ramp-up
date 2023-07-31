import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Kyle");

  return (
    <div>
      <input
        type="text"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>{name}</div>
    </div>
  );
}
