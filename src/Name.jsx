export function Name({ name, age = 27, isProgrammer }) {
  return (
    <div>
      {name} is {age} years old. He is {isProgrammer ? "" : " not"} a
      programmer.
    </div>
  );
}
