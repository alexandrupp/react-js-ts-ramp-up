import { useEffect, useState, useContext, createContext } from "react";
import { Child } from "./Child";

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((d) => !d);
  }

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#333" : "white";
    document.body.style.color = isDarkMode ? "white" : "#333";
  });
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Child />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        consequuntur itaque molestiae tempore necessitatibus neque qui dolore
        architecto aliquam tempora aut eveniet optio eum molestias quidem, vitae
        nesciunt quis beatae.
      </p>
    </ThemeContext.Provider>
  );
}

export default App;
