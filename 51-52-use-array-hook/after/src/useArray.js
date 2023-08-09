import { useState } from "react";

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  const push = () => {};
  const replace = () => {};
  const filter = () => {};
  const remove = () => {};
  const clear = () => {};
  const reset = () => {};

  return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
