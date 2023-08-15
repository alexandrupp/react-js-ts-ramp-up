import { RefForm } from "./RefForm";
import { StateForm } from "./StateForm";
import "./styles.css";

export default function App() {
  return (
    <>
      <h3>State Form</h3>
      <StateForm />
      <h3>Ref Form</h3>
      <RefForm />
    </>
  );
}
