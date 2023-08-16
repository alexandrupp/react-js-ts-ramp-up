import { useState, useEffect, useReducer } from "react";
import "./styles.css";
import { TodoItem } from "./TodoItem";
import { NewTodoForm } from "./NewTodoFrom";

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
  const [todos, dispatch] = useReducer(reducer, [], (initialValue) => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
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

      <NewTodoForm addNewTodo={addNewTodo} />
    </>
  );
}

export default App;
