import { useState, useRef } from "react";

export default function App() {
  const nameRef = useRef();
  // const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    if (name === "") return;
    alert(`Name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <br />
        <input type="text" id="name" ref={nameRef} />
        {/* <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        /> */}
        <br />
        <button>Alert Name</button>
      </label>
    </form>
  );
}
