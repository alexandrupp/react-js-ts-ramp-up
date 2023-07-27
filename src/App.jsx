import "./styles.css";
import user from "./user.json";
import img from "./code.png";

function App() {
  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
      <img src={img} />
    </div>
  );
}

export default App;
