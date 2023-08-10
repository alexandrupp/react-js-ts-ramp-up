export function TodoItem({
  id,
  completed,
  name,
  description,
  duration,
  toggleTodo,
  deleteTodo,
}) {
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
        <span data-list-item-text>
          {description !== "" ? ` (${description})` : " "}
        </span>
        <span data-list-item-text> [{duration}h]</span>
      </label>
      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  );
}
