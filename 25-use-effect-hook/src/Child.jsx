import { useState, useEffect } from "react";

export function Child() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Name changed");
  }, [name]);

  useEffect(() => {
    document.title = `My age is ${age}`;
  }, [age]);

  useEffect(() => {
    console.log("Mounted component");
  }, []);

  useEffect(() => {
    // everything runs after cleanup function
    const handler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handler);

    // cleanup function
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <p>
        My name is {name} and I am {age} years old
      </p>
      <p>My screen width is {width}</p>
    </div>
  );
}
