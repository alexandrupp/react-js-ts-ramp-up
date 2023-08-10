import "./styles.css";
import { useState } from "react";
import { TodoItem } from "./TodoItem.jsx";

export default function App() {
  const NEW_TODO_DURATION_OPTIONS = [0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8];

  const [newTodoName, setNewTodoName] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [newTodoDuration, setNewTodoDuration] = useState(
    NEW_TODO_DURATION_OPTIONS[0]
  );
  const [newTodoIsCompleted, setNewTodoIsCompleted] = useState(false);

  const [todos, setTodos] = useState([]);

  const addNewTodo = (event) => {
    event.preventDefault();

    if (newTodoName !== "") {
      setTodos((currentTodos) => [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          completed: newTodoIsCompleted,
          name: newTodoName,
          description: newTodoDescription,
          duration: newTodoDuration,
        },
      ]);

      setNewTodoName("");
      setNewTodoDescription("");
      setNewTodoDuration(NEW_TODO_DURATION_OPTIONS[0]);
      setNewTodoIsCompleted(false);
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
      <form onSubmit={addNewTodo} id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>

        <label>
          Name:
          <input
            type="text"
            id="todo-input"
            value={newTodoName}
            onChange={(event) => setNewTodoName(event.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            value={newTodoDescription}
            onChange={(event) => setNewTodoDescription(event.target.value)}
          />
        </label>

        <label>
          Duration (h):
          <select
            value={newTodoDuration}
            onChange={(event) => setNewTodoDuration(event.target.value)}
          >
            {NEW_TODO_DURATION_OPTIONS.map((duration) => (
              <option key={duration}>{duration}</option>
            ))}
          </select>
        </label>

        <label>
          Completed:
          <input
            type="checkbox"
            checked={newTodoIsCompleted}
            onChange={(event) => setNewTodoIsCompleted(event.target.checked)}
            data-list-item-checkbox
          />
        </label>

        <button>Add Todo</button>
      </form>

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
