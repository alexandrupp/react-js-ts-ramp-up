import { useState, useEffect } from "react";
import { User } from "./User";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    /* Fetching Data from API */
    fetch("https://jsonplaceholder.typicode.com/users")
      /* Parsing JSON Data to Array */
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>User List</h1>
      {
        /* Conditional Rendering */
        loading ? (
          <h2>Loading...</h2>
        ) : (
          <ul>
            {
              /* Array Mapping and Rendering */
              users.map((user) => (
                /* Using Fragments
                 * Passing Data to Child Components
                 */
                <User key={user.id} name={user.name} />
              ))
            }
          </ul>
        )
      }
    </>
  );
}
