import { useState } from "react";

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  const push = (element) => setArray([...array, element]);
  const replace = (index, newElem) =>
    setArray(array.map((elem, id) => (id === index ? newElem : elem)));
  const filter = (condition) => setArray(array.filter(condition));
  const remove = (elemAtIndex) => filter((n, id) => id !== elemAtIndex);
  const clear = () => setArray([]);
  const reset = () => setArray(initialValue);

  return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
