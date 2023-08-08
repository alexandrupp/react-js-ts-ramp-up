import { useState, useMemo } from "react";

const LIST = Array(1000000)
  .fill()
  .map((_, i) => i + 1);

export default function App() {
  const [query, setQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  /* only use useMemo() for performance gains when computing large pieces of
   * information
   */
  const filteredList = useMemo(() => {
    return LIST.filter((n) => n.toString().includes(query));
  }, [query]);

  // non useMemo alternative
  // const filteredList = LIST.filter((n) => n.toString().includes(query));

  console.log(filteredList.length);

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <label>
        Query:
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={(e) => setIsDarkMode(e.target.checked)}
        />
        Dark Mode
      </label>
    </div>
  );
}
