import { useState } from "react";
import { Counter } from "./COunter";

export default function App() {
  // const [name, setName] = useState("Kyle");
  // const [age, setAge] = useState(27);
  const [person, setPerson] = useState({ name: "Kyle", age: 27 });

  function handleClick() {
    setPerson((currentPerson) => {
      return { ...currentPerson, name: "Sally" };
    });
    // setName("Sally");
    // setAge(age + 1);
  }

  return (
    <div>
      <h1 onClick={handleClick}>
        Hi {person.name} {person.age}
      </h1>
      <Counter />
    </div>
  );
}
