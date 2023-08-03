import { useState, Fragment } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  const addItem = () => {
    setItems((currentItems) => {
      return [{ id: crypto.randomUUID(), name: "New Item" }, ...currentItems];
    });
  };

  return (
    // <> </> == <Fragment> </Fragment>; <Fragment> can take key argument
    <>
      <button onClick={addItem}>Add Item</button>
      <pre>
        {items.map((item) => (
          /* keys must be used where you are actually using the element, not in
           * its definition
           */
          // <> </> == <Fragment> </Fragment>; <Fragment> can take key argument
          <Fragment key={item.id}>
            {item.name}
            <input type="text" />
            <br />
          </Fragment>
        ))}
      </pre>
    </>
  );
}
