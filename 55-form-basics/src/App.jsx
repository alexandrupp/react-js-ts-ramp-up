import "./styles.css";
import { useState } from "react";
import { TodoItem } from "./TodoItem.jsx";

export default function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  const addNewTodo = () => {
    if (newTodoName !== "") {
      setTodos((currentTodos) => [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          completed: false,
          name: newTodoName,
        },
      ]);

      setNewTodoName("");
    }
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        }

        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(event) => setNewTodoName(event.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
