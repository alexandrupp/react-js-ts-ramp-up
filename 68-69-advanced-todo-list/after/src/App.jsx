import { useState, useEffect, useReducer, createContext } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoFrom";
import { TodoList } from "./TodoList";
import { TodoFilterForm } from "./TodoFilterForm";

export const TodoContext = createContext();

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
    case ACTIONS.UPDATE:
      return state.map((todo) => {
        if (todo.id === payload.id) return { ...todo, name: payload.name };

        return todo;
      });
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

  const [filterName, setFilterName] = useState("");
  const [filterHideCompleted, setFilterHideCompleted] = useState(false);
  const filteredTodos = todos.filter(
    (todo) =>
      todo.name.includes(filterName) && !(todo.completed && filterHideCompleted)
  );

  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  }

  function updateTodo(id, name) {
    dispatch({ type: ACTIONS.UPDATE, payload: { id, name } });
  }

  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
  }

  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: todoId } });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        updateTodo,
        addNewTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      <TodoFilterForm
        name={filterName}
        setName={setFilterName}
        filterHideCompleted={filterHideCompleted}
        setFilterHideCompleted={setFilterHideCompleted}
      />
      <TodoList />
      <NewTodoForm />
    </TodoContext.Provider>
  );
}

export default App;
