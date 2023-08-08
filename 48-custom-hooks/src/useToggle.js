import { useState } from "react";

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((currentValue) => !currentValue);

  return [value, toggle];
}
