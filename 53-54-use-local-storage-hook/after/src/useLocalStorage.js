import { useEffect, useState } from "react";

export function useLocalStorage(localStorageKey, initialValue) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
