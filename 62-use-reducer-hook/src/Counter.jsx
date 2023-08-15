import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  PLUS_FIVE: "PLUS_FIVE",
};

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return count - 1;
    case ACTIONS.INCREMENT:
      return count + 1;
    case ACTIONS.RESET:
      return 0;
    case ACTIONS.PLUS_FIVE:
      return count + action.payload.value;
    default:
      return count;
  }
}

export function Counter({ initialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.PLUS_FIVE, payload: { value: 5 } })
        }
      >
        +5
      </button>
    </>
  );
}
