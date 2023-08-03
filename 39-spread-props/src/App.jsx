import { useState, useEffect } from "react";
import { User } from "./User";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
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
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      )}
    </>
  );
}
