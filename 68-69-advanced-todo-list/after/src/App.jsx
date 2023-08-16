import { useState, useEffect, useReducer } from "react";
import "./styles.css";
import { TodoItem } from "./TodoItem";

const LOCAL_STORAGE_KEY = "TODOS";

const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...state,
        {
          name: payload.name,
          completed: false,
          id: crypto.randomUUID(),
        },
      ];
    case ACTIONS.TOGGLE:
      return state.map((todo) => {
        if (todo.id === payload.id)
          return { ...todo, completed: payload.completed };

        return todo;
      });
    case ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== payload.id);
    default:
      throw new Error(`No action found for ${type}`);
  }
}

function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo() {
    if (newTodoName === "") return;

    dispatch({ type: ACTIONS.ADD, payload: { name: newTodoName } });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  }

  return (
    <>
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

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
