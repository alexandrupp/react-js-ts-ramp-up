export function TodoListItemFunction({ children, isComplete }) {
  return (
    <label>
      <input type="checkbox" defaultChecked={isComplete} />
      {children}
      <br></br>
    </label>
  );
}
