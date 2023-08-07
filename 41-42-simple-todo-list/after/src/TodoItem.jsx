export function TodoItem({ id, completed, name, toggleTodo, deleteTodo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => toggleTodo(id, event.target.checked)}
          data-list-item-checkbox
        />
        <span data-list-item-text>{name}</span>
      </label>
      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  );
}
