import { useState } from "react";

export function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    type: "text",
    value,
    onChange: (event) => setValue(event.target.value),
  };
}
