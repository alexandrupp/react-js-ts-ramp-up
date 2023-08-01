import { useState } from "react";

export function Person() {
  const [person, setPerson] = useState({
    name: "Alex",
    age: 24,
    inputName: "George",
  });

  const updateNameInput = (event) =>
    setPerson((currentPerson) => ({
      ...currentPerson,
      inputName: event.target.value,
    }));

  const changeName = () =>
    setPerson((currentPerson) => ({
      ...currentPerson,
      name: currentPerson.inputName,
    }));

  const increaseAge = () =>
    setPerson((currentPerson) => ({
      ...currentPerson,
      age: currentPerson.age + 1,
    }));

  const decreaseAge = () =>
    setPerson((currentPerson) => ({
      ...currentPerson,
      age: currentPerson.age - 1,
    }));

  return (
    <div>
      <div>
        <h1>Function Component</h1>
        <p>
          My name is {person.name} and I am {person.age} years old
        </p>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            defaultValue={person.inputName}
            onChange={updateNameInput}
          />
        </label>
        <button onClick={changeName}>Change name</button>
      </div>
      <div>
        <label>Age:</label>
        <button onClick={increaseAge}>+</button>
        <button onClick={decreaseAge}>-</button>
      </div>
    </div>
  );
}
