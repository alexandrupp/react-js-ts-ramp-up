import React from "react";
import { ThemeContext } from "./App";

export class GrandChild extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ isDarkMode, toggleTheme }) => (
          <button
            style={{
              background: isDarkMode ? "white" : "#333",
              color: isDarkMode ? "#333" : "white",
              border: "none",
              padding: ".5em",
              borderRadius: "0.25em",
              cursor: "pointer",
            }}
            onClick={toggleTheme}
          >
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}
