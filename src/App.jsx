import React from "react";
import { Name } from "./Name";
import { NameWithChildern } from "./NameWithChildren";
import { TodoListItemFunction } from "./TodoListItemFunction";
import { TodoListItemClass } from "./TodoListClass";

function App() {
  return (
    <div>
      <Name name="Alex" isProgrammer={true} />
      <NameWithChildern>Alex</NameWithChildern>

      <TodoListItemFunction isComplete>Gardening</TodoListItemFunction>
      <TodoListItemClass>Take out trash</TodoListItemClass>
    </div>
  );
}

export default App;

<div></div>;
