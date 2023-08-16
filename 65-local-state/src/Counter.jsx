export function Counter({ count, changeCount, reset }) {
  return (
    <>
      <button onClick={() => changeCount(-1)}>-</button>
      {count}
      <button onClick={() => changeCount(1)}>+</button>
    </>
  );
}
